import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Truck, MapPin, FileText, CreditCard, BarChart3, CheckCircle, ArrowRight, AlertTriangle, Warehouse, CheckSquare, User, Users, Building, LayoutDashboard, ArrowRightLeft } from 'lucide-react';

const features = [
  { name: 'Live ETA Tracking', icon: MapPin },
  { name: 'Instant Quoting', icon: FileText },
  { name: 'Digital Invoicing', icon: CreditCard },
  { name: 'Analytics & Reporting', icon: BarChart3 },
];

// Updated truck positions to align with the new Essex map
const trucks = [
  {
    id: 'HOSS-04',
    driver: 'Sarah J.',
    position: { top: '40%', left: '48%' }, // Chelmsford
    color: 'bg-amber-500',
    pingColor: 'bg-amber-400',
  },
  {
    id: 'HOSS-11',
    driver: 'Mike P.',
    position: { top: '70%', left: '65%' }, // Southend
    color: 'bg-red-500',
    pingColor: 'bg-red-400',
  },
  {
    id: 'HOSS-07',
    driver: 'David L.',
    position: { top: '50%', left: '20%' }, // Harlow
    color: 'bg-green-500',
    pingColor: 'bg-green-400',
  },
];

const expertFeatures = [
  'Automated Quoting',
  'Multi Pickup/Delivery Bookings',
  'Automated Invoicing',
  'Works from any Device',
  'Accounting and Bank Integration',
  'Customer Management (CRM System)',
  'Live Tracking',
  'Automated Intelligent Address Lookup',
  'Servicing, MOT, Insurance Monitoring',
  'Signature/Document/Photo/POD Capture',
];

const whoWeHelp = [
  {
    icon: User,
    title: 'Owner Drivers',
    description: 'Manage your single vehicle with enterprise-level tools. Find loads, plan routes, and handle invoicing effortlessly.',
  },
  {
    icon: Users,
    title: 'Fleet Managers',
    description: 'Oversee your entire fleet with a real-time dashboard. Optimize dispatch, track performance, and reduce operational costs.',
  },
  {
    icon: Building,
    title: 'Enterprise Logistics',
    description: 'Integrate HOSS into your large-scale operations for complete visibility and control over your supply chain.',
  },
];

// SVG component for the Essex map outline
const EssexMapOutline = () => (
  <svg viewBox="0 0 950 650" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
    <path d="M418 122L415 118L412 118L409 115L406 115L404 112L401 112L398 109L395 109L392 106L389 106L386 103L383 103L380 100L377 100L374 97L371 97L368 94L365 94L362 91L359 91L356 88L353 88L350 85L347 85L344 82L341 82L338 79L335 79L332 76L329 76L326 73L323 73L320 70L317 70L314 67L311 67L308 64L305 64L302 61L299 61L296 58L293 58L290 55L287 55L284 52L281 52L278 49L275 49L272 46L269 46L266 43L263 43L260 40L257 40L254 37L251 37L248 34L245 34L242 31L239 31L236 28L233 28L230 25L227 25L224 22L221 22L218 19L215 19L212 16L209 16L206 13L203 13L200 10L197 10L194 7L191 7L188 4L185 4L182 1L185 1L188 4L191 4L194 7L197 7L200 10L203 10L206 13L209 13L212 16L215 16L218 19L221 19L224 22L227 22L230 25L233 25L236 28L239 28L242 31L245 31L248 34L251 34L254 37L257 37L260 40L263 40L266 43L269 43L272 46L275 46L278 49L281 49L284 52L287 52L290 55L293 55L296 58L299 58L302 61L305 61L308 64L311 64L314 67L317 67L320 70L323 70L326 73L329 73L332 76L335 76L338 79L341 79L344 82L347 82L350 85L353 85L356 88L359 88L362 91L365 91L368 94L371 94L374 97L377 97L380 100L383 100L386 103L389 103L392 106L395 106L398 109L401 109L404 112L407 112L410 115L413 115L416 118L419 118L422 121L425 121L428 124L431 124L434 127L437 127L440 130L443 130L446 133L449 133L452 136L455 136L458 139L461 139L464 142L467 142L470 145L473 145L476 148L479 148L482 151L485 151L488 154L491 154L494 157L497 157L500 160L503 160L506 163L509 163L512 166L515 166L518 169L521 169L524 172L527 172L530 175L533 175L536 178L539 178L542 181L545 181L548 184L551 184L554 187L557 187L560 190L563 190L566 193L569 193L572 196L575 196L578 199L581 199L584 202L587 202L590 205L593 205L596 208L599 208L602 211L605 211L608 214L611 214L614 217L617 217L620 220L623 220L626 223L629 223L632 226L635 226L638 229L641 229L644 232L647 232L650 235L653 235L656 238L659 238L662 241L665 241L668 244L671 244L674 247L677 247L680 250L683 250L686 253L689 253L692 256L695 256L698 259L701 259L704 262L707 262L710 265L713 265L716 268L719 268L722 271L725 271L728 274L731 274L734 277L737 277L740 280L743 280L746 283L749 283L752 286L755 286L758 289L761 289L764 292L767 292L770 295L773 295L776 298L779 298L782 301L785 301L788 304L791 304L794 307L797 307L800 310L803 310L806 313L809 313L812 316L815 316L818 319L821 319L824 322L827 322L830 325L833 325L836 328L839 328L842 331L845 331L848 334L851 334L854 337L857 337L860 340L863 340L866 343L869 343L872 346L875 346L878 349L881 349L884 352L887 352L890 355L893 355L896 358L899 358L902 361L905 361L908 364L911 364L914 367L917 367L920 370L923 370L926 373L929 373L932 376L935 376L938 379L941 379L944 382L947 382L950 385L947 385L944 388L941 388L938 391L935 391L932 394L929 394L926 397L923 397L920 400L917 400L914 403L911 403L908 406L905 406L902 409L899 409L896 412L893 412L890 415L887 415L884 418L881 418L878 421L875 421L872 424L869 424L866 427L863 427L860 430L857 430L854 433L851 433L848 436L845 436L842 439L839 439L836 442L833 442L830 445L827 445L824 448L821 448L818 451L815 451L812 454L809 454L806 457L803 457L800 460L797 460L794 463L791 463L788 466L785 466L782 469L779 469L776 472L773 472L770 475L767 475L764 478L761 478L758 481L755 481L752 484L749 484L746 487L743 487L740 490L737 490L734 493L731 493L728 496L725 496L722 499L719 499L716 502L713 502L710 505L707 505L704 508L701 508L698 511L695 511L692 514L689 514L686 517L683 517L680 520L677 520L674 523L671 523L668 526L665 526L662 529L659 529L656 532L653 532L650 535L647 535L644 538L641 538L638 541L635 541L632 544L629 544L626 547L623 547L620 550L617 550L614 553L611 553L608 556L605 556L602 559L599 559L596 562L593 562L590 565L587 565L584 568L581 568L578 571L575 571L572 574L569 574L566 577L563 577L560 580L557 580L554 583L551 583L548 586L545 586L542 589L539 589L536 592L533 592L530 595L527 595L524 598L521 598L518 601L515 601L512 604L509 604L506 607L503 607L500 610L497 610L494 613L491 613L488 616L485 616L482 619L479 619L476 622L473 622L470 625L467 625L464 628L461 628L458 631L455 631L452 634L449 634L446 637L443 637L440 640L437 640L434 643L431 643L428 646L425 646L422 649L419 649L416 652L413 652L410 655L407 655L404 658L401 658L398 661L395 661L392 664L389 664L386 667L383 667L380 670L377 670L374 673L371 673L368 676L365 676L362 679L359 679L356 682L353 682L350 685L347 685L344 688L341 688L338 691L335 691L332 694L329 694L326 697L323 697L320 700L317 700L314 703L311 703L308 706L305 706L302 709L299 709L296 712L293 712L290 715L287 715L284 718L281 718L278 721L275 721L272 724L269 724L266 727L263 727L260 730L257 730L254 733L251 733L248 736L245 736L242 739L239 739L236 742L233 742L230 745L227 745L224 748L221 748L218 751L215 751L212 754L209 754L206 757L203 757L200 760L197 760L194 763L191 763L188 766L185 766L182 769L179 769L176 772L173 772L170 775L167 775L164 778L161 778L158 781L155 781L152 784L149 784L146 787L143 787L140 790L137 790L134 793L131 793L128 796L125 796L122 799L119 799L116 802L113 802L110 805L107 805L104 808L101 808L98 811L95 811L92 814L89 814L86 817L83 817L80 820L77 820L74 823L71 823L68 826L65 826L62 829L59 829L56 832L53 832L50 835L47 835L44 838L41 838L38 841L35 841L32 844L29 844L26 847L23 847L20 850L17 850L14 853L11 853L8 856L5 856L2 859L0 859L0 856L3 856L6 853L9 853L12 850L15 850L18 847L21 847L24 844L27 844L30 841L33 841L36 838L39 838L42 835L45 835L48 832L51 832L54 829L57 829L60 826L63 826L66 823L69 823L72 820L75 820L78 817L81 817L84 814L87 814L90 811L93 811L96 808L99 808L102 805L105 805L108 802L111 802L114 799L117 799L120 796L123 796L126 793L129 793L132 790L135 790L138 787L141 787L144 784L147 784L150 781L153 781L156 778L159 778L162 775L165 775L168 772L171 772L174 769L177 769L180 766L183 766L186 763L189 763L192 760L195 760L198 757L201 757L204 754L207 754L210 751L213 751L216 748L219 748L222 745L225 745L228 742L231 742L234 739L237 739L240 736L243 736L246 733L249 733L252 730L255 730L258 727L261 727L264 724L267 724L270 721L273 721L276 718L279 718L282 715L285 715L288 712L291 712L294 709L297 709L300 706L303 706L306 703L309 703L312 700L315 700L318 697L321 697L324 694L327 694L330 691L333 691L336 688L339 688L342 685L345 685L348 682L351 682L354 679L357 679L360 676L363 676L366 673L369 673L372 670L375 670L378 667L381 667L384 664L387 664L390 661L393 661L396 658L399 658L402 655L405 655L408 652L411 652L414 649L417 649L420 646L423 646L426 643L429 643L432 640L435 640L438 637L441 637L444 634L447 634L450 631L453 631L456 628L459 628L462 625L465 625L468 622L471 622L474 619L477 619L480 616L483 616L486 613L489 613L492 610L495 610L498 607L501 607L504 604L507 604L510 601L513 601L516 598L519 598L522 595L525 595L528 592L531 592L534 589L537 589L540 586L543 586L546 583L549 583L552 580L555 580L558 577L561 577L564 574L567 574L570 571L573 571L576 568L579 568L582 565L585 565L588 562L591 562L594 559L597 559L600 556L603 556L606 553L609 553L612 550L615 550L618 547L621 547L624 544L627 544L630 541L633 541L636 538L639 538L642 535L645 535L648 532L651 532L654 529L657 529L660 526L663 526L666 523L669 523L672 520L675 520L678 517L681 517L684 514L687 514L690 511L693 511L696 508L699 508L702 505L705 505L708 502L711 502L714 499L717 499L720 496L723 496L726 493L729 493L732 490L735 490L738 487L741 487L744 484L747 484L750 481L753 481L756 478L759 478L762 475L765 475L768 472L771 472L774 469L777 469L780 466L783 466L786 463L789 463L792 460L795 460L798 457L801 457L804 454L807 454L810 451L813 451L816 448L819 448L822 445L825 445L828 442L831 442L834 439L837 439L840 436L843 436L846 433L849 433L852 430L855 430L858 427L861 427L864 424L867 424L870 421L873 421L876 418L879 418L882 415L885 415L888 412L891 412L894 409L897 409L900 406L903 406L906 403L909 403L912 400L915 400L918 397L921 397L924 394L927 394L930 391L933 391L936 388L939 388L942 385L945 385L948 382L951 382L954 379L957 379L960 376L963 376L966 373L969 373L972 370L975 370L978 367L981 367L984 364L987 364L990 361L993 361L996 358L999 358L1002 355L1005 355L1008 352L1011 352L1014 349L1017 349L1020 346L1023 346L1026 343L1029 343L1032 340L1035 340L1038 337L1041 337L1044 334L1047 334L1050 331L1053 331L1056 328L1059 328L1062 325L1065 325L1068 322L1071 322L1074 319L1077 319L1080 316L1083 316L1086 313L1089 313L1092 310L1095 310L1098 307L1101 307L1104 304L1107 304L1110 301L1113 301L1116 298L1119 298L1122 295L1125 295L1128 292L1131 292L1134 289L1137 289L1140 286L1143 286L1146 283L1149 283L1152 280L1155 280L1158 277L1161 277L1164 274L1167 274L1170 271L1173 271L1176 268L1179 268L1182 265L1185 265L1188 262L1191 262L1194 259L1197 259L1200 256L1203 256L1206 253L1209 253L1212 250L1215 250L1218 247L1221 247L1224 244L1227 244L1230 241L1233 241L1236 238L1239 238L1242 235L1245 235L1248 232L1251 232L1254 229L1257 229L1260 226L1263 226L1266 223L1269 223L1272 220L1275 220L1278 217L1281 217L1284 214L1287 214L1290 211L1293 211L1296 208L1299 208L1302 205L1305 205L1308 202L1311 202L1314 199L1317 199L1320 196L1323 196L1326 193L1329 193L1332 190L1335 190L1338 187L1341 187L1344 184L1347 184L1350 181L1353 181L1356 178L1359 178L1362 175L1365 175L1368 172L1371 172L1374 169L1377 169L1380 166L1383 166L1386 163L1389 163L1392 160L1395 160L1398 157L1401 157L1404 154L1407 154L1410 151L1413 151L1416 148L1419 148L1422 145L1425 145L1428 142L1431 142L1434 139L1437 139L1440 136L1443 136L1446 133L1449 133L1452 130L1455 130L1458 127L1461 127L1464 124L1467 124L1470 121L418 122Z" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" />
    <path d="M418 122L415 126L412 126L409 129L406 129L403 132L400 132L397 135L394 135L391 138L388 138L385 141L382 141L379 144L376 144L373 147L370 147L367 150L364 150L361 153L358 153L355 156L352 156L349 159L346 159L343 162L340 162L337 165L334 165L331 168L328 168L325 171L322 171L319 174L316 174L313 177L310 177L307 180L304 180L301 183L298 183L295 186L292 186L289 189L286 189L283 192L280 192L277 195L274 195L271 198L268 198L265 201L262 201L259 204L256 204L253 207L250 207L247 210L244 210L241 213L238 213L235 216L232 216L229 219L226 219L223 222L220 222L217 225L214 225L211 228L208 228L205 231L202 231L199 234L196 234L193 237L190 237L187 240L184 240L181 243L178 243L175 246L172 246L169 249L166 249L163 252L160 252L157 255L154 255L151 258L148 258L145 261L142 261L139 264L136 264L133 267L130 267L127 270L124 270L121 273L118 273L115 276L112 276L109 279L106 279L103 282L100 282L97 285L94 285L91 288L88 288L85 291L82 291L79 294L76 294L73 297L70 297L67 300L64 300L61 303L58 303L55 306L52 306L49 309L46 309L43 312L40 312L37 315L34 315L31 318L28 318L25 321L22 321L19 324L16 324L13 327L10 327L7 330L4 330L1 333L1 330L4 330L7 327L10 327L13 324L16 324L19 321L22 321L25 318L28 318L31 315L34 315L37 312L40 312L43 309L46 309L49 306L52 306L55 303L58 303L61 300L64 300L67 297L70 297L73 294L76 294L79 291L82 291L85 288L88 288L91 285L94 285L97 282L100 282L103 279L106 279L109 276L112 276L115 273L118 273L121 270L124 270L127 267L130 267L133 264L136 264L139 261L142 261L145 258L148 258L151 255L154 255L157 252L160 252L163 249L166 249L169 246L172 246L175 243L178 243L181 240L184 240L187 237L190 237L193 234L196 234L199 231L202 231L205 228L208 228L211 225L214 225L217 222L220 222L223 219L226 219L229 216L232 216L235 213L238 213L241 210L244 210L247 207L250 207L253 204L256 204L259 201L262 201L265 198L268 198L271 195L274 195L277 192L280 192L283 189L286 189L289 186L292 186L295 183L298 183L301 180L304 180L307 177L310 177L313 174L316 174L319 171L322 171L325 168L328 168L331 165L334 165L337 162L340 162L343 159L346 159L349 156L352 156L355 153L358 153L361 150L364 150L367 147L370 147L373 144L376 144L379 141L382 141L385 138L388 138L391 135L394 135L397 132L400 132L403 129L406 129L409 126L412 126L415 122L418 122Z" className="fill-blue-200 dark:fill-blue-900/50" />
  </svg>
);

const MapVisual = () => (
  <div className="w-full h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-4 flex items-center justify-center overflow-hidden">
    <div className="w-full h-full rounded-lg relative">
      <EssexMapOutline />
      <div className="relative w-full h-full">
        {/* Realigned pins and labels for Essex map */}
        <MapPin className="absolute top-[40%] left-[48%] text-amber-400 animate-pulse" style={{ animationDelay: '0.1s' }} />
        <MapPin className="absolute top-[70%] left-[65%] text-amber-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
        <MapPin className="absolute top-[50%] left-[20%] text-amber-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[30%] left-[10%] p-2 bg-white/80 dark:bg-slate-900/80 rounded-lg shadow-md text-xs font-semibold text-slate-800 dark:text-slate-200 animate-float-slow" style={{ animationDuration: '6s' }}>New Load Available!</div>
        <div className="absolute bottom-[15%] right-[10%] p-2 bg-white/80 dark:bg-slate-900/80 rounded-lg shadow-md text-xs font-semibold text-slate-800 dark:text-slate-200 animate-float-slow-reverse" style={{ animationDuration: '7s' }}>Route Optimized</div>
      </div>
    </div>
  </div>
);

const BackloadVisual = () => (
  <div className="w-full h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-4 flex flex-col justify-center items-center space-y-4 overflow-hidden">
    <div className="text-center">
      <p className="font-semibold text-slate-700 dark:text-slate-300">Without HOSS</p>
      <div className="flex items-center mt-2">
        <span className="font-bold text-slate-800 dark:text-slate-200">A</span>
        <div className="w-24 h-0.5 bg-slate-300 dark:bg-slate-600 mx-2"></div>
        <Truck className="text-amber-500 animate-slide-in-right" style={{ animationDelay: '0.2s' }} />
        <div className="w-24 h-0.5 bg-slate-300 dark:bg-slate-600 mx-2"></div>
        <span className="font-bold text-slate-800 dark:text-slate-200">B</span>
      </div>
      <div className="flex items-center mt-1">
        <div className="w-24 h-0.5 bg-transparent mx-2"></div>
        <div className="w-24 h-0.5 bg-red-400 border-t-2 border-dashed border-red-500 mx-2 relative -left-7 animate-fade-in" style={{ animationDelay: '0.5s' }}></div>
        <span className="text-red-500 font-semibold text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>Empty Return</span>
      </div>
    </div>
    <div className="w-3/4 h-px bg-slate-200 dark:bg-slate-700"></div>
    <div className="text-center">
      <p className="font-semibold text-slate-700 dark:text-slate-300">With HOSS</p>
      <div className="flex items-center mt-2">
        <span className="font-bold text-slate-800 dark:text-slate-200">A</span>
        <div className="w-24 h-0.5 bg-slate-300 dark:bg-slate-600 mx-2"></div>
        <Truck className="text-amber-500" />
        <div className="w-24 h-0.5 bg-slate-300 dark:bg-slate-600 mx-2"></div>
        <span className="font-bold text-slate-800 dark:text-slate-200">B</span>
      </div>
      <div className="flex items-center mt-1">
        <div className="w-24 h-0.5 bg-green-400 mx-2 relative left-7 animate-fade-in" style={{ animationDelay: '0.8s' }}></div>
        <Truck className="text-green-500 transform -scale-x-100 animate-slide-in-left" style={{ animationDelay: '0.8s' }} />
        <div className="w-24 h-0.5 bg-transparent mx-2"></div>
        <span className="text-green-500 font-semibold text-sm animate-fade-in" style={{ animationDelay: '1s' }}>Backload Found!</span>
      </div>
    </div>
  </div>
);

const FleetVisual = () => (
  <div className="w-full h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-4 flex flex-col space-y-2">
    <div className="flex justify-between items-center">
      <h3 className="font-bold text-slate-800 dark:text-slate-200">Fleet Performance</h3>
      <div className="flex items-center space-x-1">
        <span className="text-xs text-green-500">Live</span>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
    <div className="flex-grow flex items-end justify-between space-x-2 px-2">
      <div className="w-1/4 h-[60%] bg-amber-500 rounded-t-md animate-grow-bar" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-1/4 h-[80%] bg-amber-500 rounded-t-md animate-grow-bar" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-1/4 h-[50%] bg-amber-500 rounded-t-md animate-grow-bar" style={{ animationDelay: '0.3s' }}></div>
      <div className="w-1/4 h-[70%] bg-amber-500 rounded-t-md animate-grow-bar" style={{ animationDelay: '0.4s' }}></div>
    </div>
    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 px-2">
      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span>
    </div>
    <div className="mt-2 p-2 bg-slate-100 dark:bg-slate-900/50 rounded-lg space-y-1">
      <div className="flex justify-between items-center text-xs">
        <span className="font-medium text-slate-600 dark:text-slate-300">Efficiency</span>
        <span className="font-bold text-green-500">89%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
        <div className="bg-green-500 h-1.5 rounded-full w-[89%] animate-grow-bar-x" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  </div>
);

const PaymentsVisual = () => {
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('Paid');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-4 relative overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-800 dark:text-slate-200">Invoice #INV-0451</h3>
        <span className={`px-2 py-1 text-xs font-semibold rounded-full transition-colors duration-300 ${
          status === 'Pending' 
          ? 'text-yellow-800 bg-yellow-100 dark:text-yellow-100 dark:bg-yellow-900/50' 
          : 'text-green-800 bg-green-100 dark:text-green-100 dark:bg-green-900/50'
        }`}>
          {status}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm animate-fade-in" style={{ animationDelay: '0.1s' }}><span className="text-slate-500 dark:text-slate-400">Item 1</span><span className="font-medium text-slate-800 dark:text-slate-200">£450.00</span></div>
        <div className="flex justify-between text-sm animate-fade-in" style={{ animationDelay: '0.2s' }}><span className="text-slate-500 dark:text-slate-400">Item 2</span><span className="font-medium text-slate-800 dark:text-slate-200">£320.00</span></div>
        <div className="w-full h-px bg-slate-200 dark:bg-slate-700 my-2"></div>
        <div className="flex justify-between font-bold"><span className="text-slate-800 dark:text-slate-200">Total</span><span className="text-slate-800 dark:text-slate-200">£770.00</span></div>
      </div>
      {status === 'Paid' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="border-4 border-green-500 text-green-500 rounded-full w-32 h-32 flex items-center justify-center font-bold text-3xl uppercase transform -rotate-12 animate-scale-in-stamp">
            Paid
          </div>
        </div>
      )}
    </div>
  );
};

const Home: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const interactiveFeatures = [
    {
      icon: MapPin,
      title: 'Find Profitable Loads',
      description: 'Stop searching, start hauling. HOSS gives you exclusive access to thousands of daily loads from a network of vetted shippers. Our smart matching system filters opportunities by your route, vehicle type, and availability, while Price-Per-Mile insights ensure you\'re always maximizing your earnings.',
      visual: <MapVisual />,
    },
    {
      icon: ArrowRightLeft,
      title: 'Slash Empty Mileage',
      description: 'Turn deadhead runs into revenue. HOSS\'s intelligent backload finder automatically identifies profitable return loads along your route. Drastically reduce fuel waste, increase your vehicle utilisation, and boost your bottom line with every trip.',
      visual: <BackloadVisual />,
    },
    {
      icon: LayoutDashboard,
      title: 'Unify Your Fleet Management',
      description: 'Ditch the spreadsheets and chaotic group chats. Manage your entire fleet from a single, intuitive dashboard. HOSS provides live GPS tracking, automated dispatching, instant driver communication, and real-time performance analytics to keep your operations running smoothly and efficiently.',
      visual: <FleetVisual />,
    },
    {
      icon: CreditCard,
      title: 'Get Paid in Days, Not Weeks',
      description: 'Accelerate your cash flow with automated invoicing and integrated payments. HOSS generates and sends professional invoices the moment a job is complete. Track payment statuses in real-time and offer clients secure, convenient payment options to eliminate delays and chasing payments.',
      visual: <PaymentsVisual />,
    },
  ];

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50 dark:to-transparent z-0"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-12">
          {/* Top Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6 leading-tight">
              The All-in-One Solution for Modern Logistics.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              HOSS integrates everything from live tracking and quoting to invoicing and analytics into a single, powerful platform. Stop juggling software and start streamlining your operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/demo">
                <Button variant="dark" size="lg" icon={ArrowRight} iconPosition="right">
                  Book a Demo
                </Button>
              </Link>
              <Link to="/features" className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Explore Features
              </Link>
            </div>
          </div>

          {/* Visual Diagram */}
          <div className="w-full max-w-7xl mx-auto mt-16 md:mt-24">
            {/* Mobile View */}
            <div className="md:hidden flex flex-col items-center space-y-8">
              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {features.map((feature) => (
                  <div key={feature.name} className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
                      <feature.icon className="w-5 h-5 text-amber-500" />
                    </div>
                    <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">{feature.name}</span>
                  </div>
                ))}
              </div>
              <div className="relative w-24 h-24 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center shadow-lg">
                <Truck className="w-10 h-10 text-amber-600 dark:text-amber-500" />
              </div>
              <div className="w-full max-w-lg">
                <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl p-4 w-full backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-md text-slate-800 dark:text-slate-200">Dashboard</span>
                    <div className="flex items-center space-x-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-3 bg-slate-100 dark:bg-slate-900/50 rounded-xl relative">
                      <h3 className="font-semibold text-slate-700 dark:text-slate-300 text-sm mb-2">Live Fleet: Essex</h3>
                      <div className="relative h-32 rounded-lg overflow-hidden">
                        <EssexMapOutline />
                        <div className="relative w-full h-full">
                          <span className="absolute top-[40%] left-[48%] text-[10px] text-white font-semibold drop-shadow-md -translate-x-1/2">Chelmsford</span>
                          <span className="absolute top-[70%] left-[65%] text-[10px] text-white font-semibold drop-shadow-md -translate-x-1/2">Southend</span>
                          <span className="absolute top-[50%] left-[20%] text-[10px] text-white font-semibold drop-shadow-md -translate-x-1/2">Harlow</span>
                          {trucks.map(truck => (
                            <div key={truck.id} className="absolute" style={truck.position}>
                              <div className="relative w-2.5 h-2.5">
                                <div className={`absolute inset-0 ${truck.pingColor} rounded-full animate-ping`}></div>
                                <div className={`relative block w-2.5 h-2.5 ${truck.color} rounded-full border border-white`}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block relative md:h-[400px]">
              <div className="relative flex flex-row items-center justify-between h-full">
                <div className="flex flex-col justify-between h-full py-2">
                  {features.map((feature) => (
                    <div key={feature.name} className="flex items-center space-x-4 group">
                      <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-amber-500/30 group-hover:border-amber-400 dark:group-hover:border-amber-600">
                        <feature.icon className="w-6 h-6 text-slate-500 dark:text-slate-400 transition-colors group-hover:text-amber-500" />
                      </div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300 text-lg">{feature.name}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
                  <div className="relative w-28 h-28 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center shadow-lg">
                    <Truck className="w-12 h-12 text-amber-600 dark:text-amber-500" />
                  </div>
                </div>
                <div className="w-full md:w-auto max-w-lg">
                  <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl p-6 w-full backdrop-blur-sm animate-shadow-pulse">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-lg text-slate-800 dark:text-slate-200">Operations Dashboard</span>
                      <div className="flex items-center space-x-1.5">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 p-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl relative">
                        <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Live Fleet: Essex</h3>
                        <div className="relative h-32 rounded-lg overflow-hidden">
                          <EssexMapOutline />
                          <div className="relative w-full h-full">
                            <span className="absolute top-[40%] left-[48%] text-xs text-white font-semibold drop-shadow-md -translate-x-1/2">Chelmsford</span>
                            <span className="absolute top-[70%] left-[65%] text-xs text-white font-semibold drop-shadow-md -translate-x-1/2">Southend</span>
                            <span className="absolute top-[50%] left-[20%] text-xs text-white font-semibold drop-shadow-md -translate-x-1/2">Harlow</span>
                            {trucks.map(truck => (
                              <div key={truck.id} className="absolute group" style={truck.position}>
                                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-slate-900 text-white text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                                  <p>{truck.driver}</p>
                                  <p className="text-slate-400 font-medium">{truck.id}</p>
                                </div>
                                <div className="relative w-3 h-3">
                                  <div className={`absolute inset-0 ${truck.pingColor} rounded-full animate-ping`}></div>
                                  <div className={`relative block w-3 h-3 ${truck.color} rounded-full border-2 border-white`}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 p-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl">
                        <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-4">Key Metrics</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                              <div className="w-2 h-2 rounded-full bg-green-400 mr-2 shadow-[0_0_6px_1px] shadow-green-400"></div>
                              On-Time Rate
                            </div>
                            <p className="text-3xl font-bold text-slate-800 dark:text-slate-200">98.7%</p>
                          </div>
                          <div>
                            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                              <div className="w-2 h-2 rounded-full bg-amber-400 mr-2 shadow-[0_0_6px_1px] shadow-amber-400"></div>
                              Fleet Utilization
                            </div>
                            <p className="text-3xl font-bold text-slate-800 dark:text-slate-200">82%</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 p-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl">
                        <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-4">Active Jobs</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center text-sm p-2 rounded-md transition-colors hover:bg-slate-200 dark:hover:bg-slate-800/50">
                            <span className="font-medium text-slate-700 dark:text-slate-300">Chelmsford &rarr; Colchester</span>
                            <span className="flex items-center text-green-600 dark:text-green-400"><CheckCircle className="w-4 h-4 mr-1" /> On Time</span>
                          </div>
                          <div className="flex justify-between items-center text-sm p-2 rounded-md transition-colors hover:bg-slate-200 dark:hover:bg-slate-800/50">
                            <span className="font-medium text-slate-700 dark:text-slate-300">Southend &rarr; London</span>
                            <span className="flex items-center text-yellow-600 dark:text-yellow-400"><Truck className="w-4 h-4 mr-1" /> In Transit</span>
                          </div>
                          <div className="flex justify-between items-center text-sm p-2 rounded-md transition-colors hover:bg-slate-200 dark:hover:bg-slate-800/50">
                            <span className="font-medium text-slate-700 dark:text-slate-300">Harwich &rarr; Tilbury</span>
                            <span className="flex items-center text-red-600 dark:text-red-400"><AlertTriangle className="w-4 h-4 mr-1" /> At Risk</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <svg className="absolute top-0 left-0 w-full h-full z-[-1]" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1280 400">
                <defs>
                  <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(245, 158, 11, 0.5)" />
                    <stop offset="100%" stopColor="rgba(245, 158, 11, 0.1)" />
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <g filter="url(#glow)">
                  <path d="M 280 50 C 420 50, 450 200, 580 200" stroke="url(#line-grad)" strokeWidth="2" fill="none" />
                  <path d="M 280 125 C 420 125, 450 200, 580 200" stroke="url(#line-grad)" strokeWidth="2" fill="none" />
                  <path d="M 280 275 C 420 275, 450 200, 580 200" stroke="url(#line-grad)" strokeWidth="2" fill="none" />
                  <path d="M 280 350 C 420 350, 450 200, 580 200" stroke="url(#line-grad)" strokeWidth="2" fill="none" />
                  <path d="M 700 200 H 850" stroke="url(#line-grad)" strokeWidth="2" fill="none" />
                  <path d="M 850 190 H 700" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="1.5" fill="none" />
                  <path d="M 850 210 H 700" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="1.5" fill="none" />
                  <circle cx="0" cy="0" r="5" fill="#f59e0b"><animateMotion dur="8s" repeatCount="indefinite" path="M 280 50 C 420 50, 450 200, 580 200" /></circle>
                  <circle cx="0" cy="0" r="5" fill="#f59e0b"><animateMotion dur="7s" repeatCount="indefinite" path="M 280 125 C 420 125, 450 200, 580 200" /></circle>
                  <circle cx="0" cy="0" r="5" fill="#f59e0b"><animateMotion dur="6s" repeatCount="indefinite" path="M 280 275 C 420 275, 450 200, 580 200" /></circle>
                  <circle cx="0" cy="0" r="5" fill="#f59e0b"><animateMotion dur="9s" repeatCount="indefinite" path="M 280 350 C 420 350, 450 200, 580 200" /></circle>
                  <circle cx="0" cy="0" r="5" fill="#f59e0b"><animateMotion dur="5s" repeatCount="indefinite" path="M 700 200 H 850" /></circle>
                  <circle cx="0" cy="0" r="4" fill="#22c55e"><animateMotion dur="4s" repeatCount="indefinite" path="M 850 190 H 700" /></circle>
                  <circle cx="0" cy="0" r="4" fill="#22c55e"><animateMotion dur="4s" begin="0.5s" repeatCount="indefinite" path="M 850 210 H 700" /></circle>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* The HOSS Advantage Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">The HOSS Advantage</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover the core benefits that make HOSS the preferred platform for modern logistics companies.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible -mx-4 px-4 lg:mx-0 lg:px-0 pb-4 lg:pb-0 space-x-2 lg:space-x-0 lg:space-y-2">
                {interactiveFeatures.map((feature, index) => (
                  <button
                    key={feature.title}
                    onClick={() => setActiveFeature(index)}
                    className={`p-4 rounded-lg text-left transition-all duration-300 w-48 lg:w-full flex-shrink-0 ${
                      activeFeature === index
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <div className="flex items-center">
                      <feature.icon className={`w-6 h-6 mr-3 flex-shrink-0 ${activeFeature === index ? 'text-white' : 'text-amber-600 dark:text-amber-400'}`} />
                      <span className={`font-semibold ${activeFeature === index ? 'text-white' : 'text-gray-900 dark:text-gray-100'}`}>{feature.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="relative w-full h-auto md:h-[450px]">
                {interactiveFeatures.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`transition-all duration-500 ease-in-out ${
                      activeFeature === index ? 'opacity-100 translate-y-0 static' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                      <div className="relative w-full h-80 md:h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-orange-100 dark:bg-orange-900/20 rounded-2xl bg-purple-grid-pattern-faded"></div>
                        <div className="relative w-[90%] h-[90%] transform transition-transform duration-500 group-hover:scale-105">
                          {feature.visual}
                        </div>
                      </div>
                      <div className="pr-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built by Experts Section */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl -z-0 animate-pulse-slow"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 lg:mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
                The logistics platform built by <span className="text-amber-600 dark:text-amber-500">logistics experts</span>, for logistics professionals.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                HOSS is engineered by professionals who live and breathe logistics. With decades of industry experience, our team knows what it takes to run a thriving logistics company, and we've built HOSS to help you run yours.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full blur-2xl animate-pulse-slow"></div>
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center shadow-lg">
                  <Warehouse className="w-24 h-24 sm:w-32 sm:h-32 text-amber-600 dark:text-amber-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertFeatures.slice(0, 9).map((feature) => (
              <div key={feature} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200 dark:border-slate-700 rounded-xl p-6 h-full flex items-center">
                  <CheckSquare className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">A Solution for Every Scale of Operation</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Whether you're a solo operator or a national enterprise, HOSS provides the tools you need to succeed and scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whoWeHelp.map((who) => (
              <div key={who.title} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                    <who.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{who.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{who.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white dark:bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-10 text-center bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-2xl rounded-2xl overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-16 -left-10 w-48 h-48 bg-white/10 rounded-full"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-amber-100 mb-8 max-w-3xl mx-auto">
                Let us show you how HOSS can streamline your operations from day one! Sign up for a free, personalized demo with our team today.
              </p>
              <Link to="/demo">
                <Button size="lg" className="bg-white text-amber-700 hover:bg-slate-100 font-bold shadow-lg transform hover:scale-105">
                  SIGN UP FOR A FREE DEMO
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;