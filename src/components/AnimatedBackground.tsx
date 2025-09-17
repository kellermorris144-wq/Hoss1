import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface AnimatedBackgroundProps {
  theme: 'light' | 'dark';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 150 });

  // Define colors based on theme
  const particleColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.5)';
  const lineColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const maxDistance = 120;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
      return particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p1, i) => {
        // Update position
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Boundary check (wrap around)
        if (p1.x < -p1.size) p1.x = canvas.width + p1.size;
        if (p1.x > canvas.width + p1.size) p1.x = -p1.size;
        if (p1.y < -p1.size) p1.y = canvas.height + p1.size;
        if (p1.y > canvas.height + p1.size) p1.y = -p1.size;

        // Mouse interaction
        const dxMouse = mouseRef.current.x - p1.x;
        const dyMouse = mouseRef.current.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distMouse < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - distMouse) / mouseRef.current.radius;
          p1.x -= dxMouse / distMouse * force * 2;
          p1.y -= dyMouse / distMouse * force * 2;
        }

        // Draw lines to other particles
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.globalAlpha = 1 - (distance / maxDistance);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      
      // Reset alpha and draw particles
      ctx.globalAlpha = 1;
      particlesRef.current.forEach(p => {
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    
    const handleMouseOut = () => {
        mouseRef.current.x = -1000;
        mouseRef.current.y = -1000;
    }

    const handleResize = () => {
      resizeCanvas();
      particlesRef.current = createParticles();
    };

    // Initialize
    resizeCanvas();
    particlesRef.current = createParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [lineColor, particleColor]); // Rerun effect if theme changes

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ zIndex: 1 }}
    />
  );
};

export default AnimatedBackground;