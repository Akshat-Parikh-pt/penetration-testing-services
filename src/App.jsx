import React, { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import {
    Mail, Linkedin, Github, Menu, X, ShieldCheck, Download, Briefcase, ArrowDown,
    Shield, Search, UserCheck, Network, GraduationCap, Calendar, ArrowRight,
    CheckCircle, Link, Swords, Globe, Target, Box, BrainCircuit, Book,
    HeartHandshake, TrendingUp, Focus, ScanSearch, TestTube, FileText, Star, FileJson, FileSpreadsheet,
    Eye, EyeOff
} from 'lucide-react';

// --- FOR LOCAL DEVELOPMENT ---
// 1. Make sure your 'CRTA-Cert.jpg' file is in the 'src/assets' folder of your project.
// 2. Uncomment the line below to import your local image.
import crtaCertImage from './assets/CRTA-Cert.jpg';

// // NOTE: The local imports below are commented out for the preview environment.
// // When you run this project locally, you can uncomment them and remove the URLs.
import bashLogo from './assets/Bash.png';
import burpSuiteLogo from './assets/Burp Suite.png';
import kaliLinuxLogo from './assets/Kali Linux.png';
import metasploitLogo from './assets/Metasploit.png';
import nmapLogo from './assets/Nmap.png';
import owaspLogo from './assets/OWASP.png';
import owaspZapLogo from './assets/OWASPzap.png';
import pythonLogo from './assets/Python.png';
import nessusLogo from './assets/Tenable Nessus.png';
import wiresharkLogo from './assets/Wireshark.png';
import awsLogo from './assets/AWS.png';
import hashcatLogo from './assets/Hashcat.png';
import powershellLogo from './assets/PowerShell.png';


// --- FOR PREVIEW ENVIRONMENT ---
// These use online images as placeholders so the preview can run without errors.
// const crtaCertImage = "https://i.imgur.com/3aGfT5A.png";
// const bashLogo = "https://www.svgrepo.com/show/373434/bash.svg";
// const burpSuiteLogo = "https://cdn.worldvectorlogo.com/logos/burpsuite.svg";
// const kaliLinuxLogo = "https://www.kali.org/images/kali-logo.svg";
// const metasploitLogo = "https://www.metasploit.com/assets/images/framework_logo.svg";
// const nmapLogo = "https://cdn.worldvectorlogo.com/logos/nmap.svg";
// const owaspLogo = "https://owasp.org/assets/images/logo.svg";
// const owaspZapLogo = "https://www.zaproxy.org/images/zap-logo-256.png";
// const pythonLogo = "https://www.svgrepo.com/show/303208/python-logo.svg";
// const nessusLogo = "https://static.tenable.com/prod/images/tenable-nessus-logo.svg";
// const wiresharkLogo = "https://cdn.worldvectorlogo.com/logos/wireshark.svg";
// const awsLogo = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg";
// const hashcatLogo = "https://hashcat.net/img/logo.svg";
// const powershellLogo = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powershell.svg";


// New StarBorder Component
const StarBorder = ({  as: Component = 'div',  className = '',  color = 'white',  speed = '6s',  thickness = 1,  children,  ...rest}) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className="inner-content" style={{borderWidth: `${thickness}px`}}>{children}</div>
    </Component>
  );
};

// This component encapsulates all the styles from your original HTML file.
const GlobalStyles = () => (
    <style>{`
        :root {
            --dark-bg: #111319;
            --card-bg: #1A1D25;
            --card-bg-hover: #1f222a;
            --primary-green: #05C168;
            --light-green: #06D673;
            --dark-green-bg: rgba(5, 193, 104, 0.15);
            --text-primary: #EAECEE;
            --text-secondary: #AAB7C4;
            --border-color: rgba(5, 193, 104, 0.2);
            --glow-color: rgba(5, 193, 104, 0.6);
            --soft-glow-color: rgba(5, 193, 104, 0.2);
        }
        html {
            scroll-behavior: smooth;
        }
        .app-container {
            font-family: 'Inter', sans-serif;
            background-color: var(--dark-bg);
            color: var(--text-primary);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: hidden;
        }
        .accent-green { 
            color: var(--primary-green); 
            text-shadow: 0 0 8px var(--glow-color);
        }
        #header {
            background-color: var(--dark-bg);
            border-bottom: 1px solid var(--border-color);
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        #header nav {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }
        .nav-link { 
            position: relative; 
            padding: 0.75rem 1rem;
            font-size: 0.95rem;
            transition: color 0.3s, background-color 0.3s, box-shadow 0.3s;
        }
        .nav-link:not(.active-nav-button):hover { 
            color: var(--light-green); 
            background-color: var(--dark-green-bg);
        }
        .active-nav-button { 
            background-color: var(--dark-green-bg); 
            color: var(--primary-green) !important; 
            box-shadow: inset 0 0 15px -5px var(--soft-glow-color), 0 0 10px -5px var(--glow-color);
            border: 1px solid var(--border-color);
        }
        .btn { transition: all 0.3s ease-in-out; }
        .btn-primary { background-color: var(--primary-green); color: var(--dark-bg); font-weight: 600; text-shadow: none; }
        .btn-primary:hover { background-color: var(--light-green); transform: translateY(-2px); box-shadow: 0 4px 15px var(--soft-glow-color); }
        .btn-secondary { border: 1px solid var(--primary-green); color: var(--primary-green); font-weight: 500; }
        .btn-secondary:hover { background-color: var(--soft-glow-color); transform: translateY(-2px); }
        .styled-card, .certificate-card, .education-card, .methodology-card, .service-card {
            background-color: var(--card-bg);
            border: 1px solid #2c303a;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        .styled-card:hover, .certificate-card:hover, .education-card:hover, .methodology-card:hover {
            transform: translateY(-5px);
            border-color: var(--border-color);
            box-shadow: 0 0 15px -2px var(--glow-color);
        }
        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 18px -4px var(--glow-color);
            background-color: var(--card-bg-hover);
        }
        .styled-card::before {
            content: ""; position: absolute; top: 0; left: -100%;
            width: 100%; height: 100%;
            background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.05), transparent);
            transition: left 0.6s ease;
        }
        .styled-card:hover::before { left: 100%; }
        .reveal, .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            will-change: opacity, transform;
        }
        .reveal.visible, .fade-in-up.visible { opacity: 1; transform: translateY(0); }
        .delay-1 { transition-delay: 0.2s; }
        .delay-2 { transition-delay: 0.4s; }
        .delay-3 { transition-delay: 0.6s; }
        .delay-4 { transition-delay: 0.8s; }
        .delay-5 { transition-delay: 1.0s; }
        .delay-6 { transition-delay: 1.2s; }
        #notification-toast {
            position: fixed; bottom: 20px; left: 50%;
            transform: translate(-50%, 150%);
            transition: transform 0.5s ease-in-out;
            z-index: 10000;
        }
        #notification-toast.show { transform: translate(-50%, 0); }
        .achievement-badge {
            background-color: rgba(5, 193, 104, 0.1);
            color: var(--primary-green);
            border: 1px solid var(--border-color);
        }
        .thm-badge-iframe { width: 100%; height: 160px; border-radius: 0.5rem; overflow: hidden; }
        .footer-icon {
            display: inline-flex; align-items: center; justify-content: center;
            width: 40px; height: 40px; border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.05);
            color: var(--primary-green);
            transition: all 0.3s ease;
        }
        .footer-icon:hover {
            background-color: var(--primary-green);
            color: var(--dark-bg);
            box-shadow: 0 0 15px var(--glow-color);
            transform: scale(1.1);
        }
        .popular-badge {
            position: absolute;
            top: -1px;
            right: 20px;
            background-color: var(--primary-green);
            color: var(--dark-bg);
            padding: 4px 12px;
            border-radius: 0 0 8px 8px;
            font-size: 0.75rem;
            font-weight: 700;
            text-shadow: none;
            box-shadow: 0 4px 10px var(--soft-glow-color);
        }
        .service-card.popular {
            border-color: var(--primary-green);
            box-shadow: 0 0 15px -2px var(--glow-color);
            transform: scale(1.02);
        }
        .service-card-highlight {
            border-color: var(--primary-green);
            box-shadow: 0 0 10px -2px var(--soft-glow-color);
        }
        .cert-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10001;
            cursor: zoom-out;
            padding: 1rem;
            box-sizing: border-box;
        }
        .cert-modal-content {
            max-width: 90vw;
            max-height: 90vh;
        }
        .cert-modal-content img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        .process-step-content {
            position: relative;
        }
        .process-step-content::before {
            content: '';
            position: absolute;
            top: 0;
            height: 100%;
            width: 3px;
            background-color: var(--primary-green);
            box-shadow: 0 0 10px var(--glow-color);
        }
        .process-step-content.text-left::before {
            left: 0;
        }
        .process-step-content.text-right::before {
            right: 0;
        }

        #hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            opacity: 0.3;
        }
       
        @keyframes pulse-glow {
            0% {
                box-shadow: 0 0 4px var(--soft-glow-color), 0 0 8px var(--glow-color);
            }
            50% {
                box-shadow: 0 0 16px var(--soft-glow-color), 0 0 24px var(--glow-color);
            }
            100% {
                box-shadow: 0 0 4px var(--soft-glow-color), 0 0 8px var(--glow-color);
            }
        }
        .btn-primary-pulse {
            animation: pulse-glow 2.5s ease-in-out infinite;
        }
       
        .animated-border-box {
            border: 1px solid transparent;
            box-shadow: 0 0 0px transparent;
            transition: border-color 1s ease-out .6s, box-shadow 1s ease-out .6s;
        }

        .animated-border-box.visible {
            border-color: var(--border-color);
            animation: border-glow-breathing 4s ease-in-out infinite 1s;
        }

        @keyframes border-glow-breathing {
            0% { box-shadow: 0 0 8px var(--soft-glow-color); }
            50% { box-shadow: 0 0 20px var(--glow-color); }
            100% { box-shadow: 0 0 8px var(--soft-glow-color); }
        }

        /* StarBorder CSS */
        .star-border-container {
            display: inline-block;
            position: relative;
            border-radius: 0.5rem; /* Matched theme */
            overflow: hidden;
        }
        .border-gradient-bottom {
            position: absolute;
            width: 300%;
            height: 50%;
            opacity: 0.7;
            bottom: -12px;
            right: -250%;
            border-radius: 50%;
            animation: star-movement-bottom linear infinite alternate;
            z-index: 0;
        }
        .border-gradient-top {
            position: absolute;
            opacity: 0.7;
            width: 300%;
            height: 50%;
            top: -12px;
            left: -250%;
            border-radius: 50%;
            animation: star-movement-top linear infinite alternate;
            z-index: 0;
        }
        .inner-content {
            position: relative;
            border-style: solid;
            border-color: var(--border-color); /* Matched theme */
            background: var(--card-bg); /* Matched theme */
            color: white;
            font-size: 16px;
            text-align: center;
            padding: 0.75rem; /* Matched p-3 */
            border-radius: 0.5rem; /* Matched rounded-lg */
            z-index: 1;
        }
        @keyframes star-movement-bottom {
            0% {
                transform: translate(0%, 0%);
                opacity: 1;
            }
            100% {
                transform: translate(-100%, 0%);
                opacity: 0;
            }
        }
        @keyframes star-movement-top {
            0% {
                transform: translate(0%, 0%);
                opacity: 1;
            }
            100% {
                transform: translate(100%, 0%);
                opacity: 0;
            }
        }
       
        /* Logo Scroller Styles */
        .logo-scroller {
            padding: 2rem 0;
            overflow: hidden;
            position: relative;
            -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
            mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
        }
        .logo-scroller-inner {
            display: flex;
            gap: 3rem;
            width: max-content;
            animation: scroll 20s linear infinite;
        }
        .logo-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            padding: 10px;
            background-color: var(--card-bg);
            border: 1px solid #2c303a;
            border-radius: 0.75rem;
            box-sizing: border-box;
            transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .logo-item:hover {
            transform: scale(1.1);
            border-color: var(--border-color);
            box-shadow: 0 0 10px var(--soft-glow-color);
        }
        .logo-item img {
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
        }
        .logo-item .logo-text {
            color: var(--text-primary);
            font-weight: 600;
            font-size: 1.2rem;
            font-family: 'Inter', sans-serif;
        }
       

        @keyframes scroll {
            to {
                transform: translateX(-50%);
            }
        }


        @media (max-width: 768px) {
            .md\\:order-first {
                order: 0 !important;
            }
             .process-step-content::before {
                display: none;
            }
        }
    `}</style>
);

// ElectricBorder Component (Tailwind Version)
// CREDIT// Component inspired by @BalintFerenczy on X// https://codepen.io/BalintFerenczy/pen/KwdoyEN
function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  let h = hex.replace('#', '');
  if (h.length === 3) {
    h = h
      .split('')
      .map(c => c + c)
      .join('');
  }
  const int = parseInt(h, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const ElectricBorder = ({ children, color = '#5227FF', speed = 1, chaos = 1, thickness = 2, className, style }) => {
  const rawId = useId().replace(/[:]/g, '');
  const filterId = `turbulent-displace-${rawId}`;
  const svgRef = useRef(null);
  const rootRef = useRef(null);
  const strokeRef = useRef(null);

  const updateAnim = () => {
    const svg = svgRef.current;
    const host = rootRef.current;
    if (!svg || !host) return;
    if (strokeRef.current) {
      strokeRef.current.style.filter = `url(#${filterId})`;
    }
    const width = Math.max(1, Math.round(host.clientWidth || host.getBoundingClientRect().width || 0));
    const height = Math.max(1, Math.round(host.clientHeight || host.getBoundingClientRect().height || 0));
    const dyAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dy"]'));
    if (dyAnims.length >= 2) {
      dyAnims[0].setAttribute('values', `${height}; 0`);
      dyAnims[1].setAttribute('values', `0; -${height}`);
    }
    const dxAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dx"]'));
    if (dxAnims.length >= 2) {
      dxAnims[0].setAttribute('values', `${width}; 0`);
      dxAnims[1].setAttribute('values', `0; -${width}`);
    }
    const baseDur = 6;
    const dur = Math.max(0.001, baseDur / (speed || 1));
    [...dyAnims, ...dxAnims].forEach(a => a.setAttribute('dur', `${dur}s`));
    const disp = svg.querySelector('feDisplacementMap');
    if (disp) disp.setAttribute('scale', String(30 * (chaos || 1)));
    const filterEl = svg.querySelector(`#${CSS.escape(filterId)}`);
    if (filterEl) {
      filterEl.setAttribute('x', '-200%');
      filterEl.setAttribute('y', '-200%');
      filterEl.setAttribute('width', '500%');
      filterEl.setAttribute('height', '500%');
    }
    requestAnimationFrame(() => {
      [...dyAnims, ...dxAnims].forEach(a => {
        if (typeof a.beginElement === 'function') {
          try {
            a.beginElement();
          } catch {
            console.warn('ElectricBorder: beginElement failed');
          }
        }
      });
    });
  };

  useEffect(() => {
    updateAnim();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, chaos]);

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const ro = new ResizeObserver(() => updateAnim());
    ro.observe(rootRef.current);
    updateAnim();
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inheritRadius = {
    borderRadius: style?.borderRadius ?? 'inherit'
  };
  const strokeStyle = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: 'solid',
    borderColor: color
  };
  const glow1Style = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: 'solid',
    borderColor: hexToRgba(color, 0.6),
    filter: `blur(${0.5 + thickness * 0.25}px)`,
    opacity: 0.5
  };
  const glow2Style = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: 'solid',
    borderColor: color,
    filter: `blur(${2 + thickness * 0.5}px)`,
    opacity: 0.5
  };
  const bgGlowStyle = {
    ...inheritRadius,
    transform: 'scale(1.08)',
    filter: 'blur(32px)',
    opacity: 0.3,
    zIndex: -1,
    background: `linear-gradient(-30deg, ${hexToRgba(color, 0.8)}, transparent, ${color})`
  };

  return (
    <div ref={rootRef} className={'relative isolate ' + (className ?? '')} style={style}>
      <svg
        ref={svgRef}
        className="fixed -left-[10000px] -top-[10000px] w-[10px] h-[10px] opacity-[0.001] pointer-events-none"
        aria-hidden
        focusable="false"
      >
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>
            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>
      {/* This div contains the content passed into the component */}
      <div className="relative" style={inheritRadius}>
        {children}
      </div>
      {/* This div contains the border and glow effects. By placing it after the children in the code, we ensure it renders on top. */}
      <div className="absolute inset-0 pointer-events-none" style={inheritRadius}>
        <div ref={strokeRef} className="absolute inset-0 box-border" style={strokeStyle} />
        <div className="absolute inset-0 box-border" style={glow1Style} />
        <div className="absolute inset-0 box-border" style={glow2Style} />
        <div className="absolute inset-0" style={bgGlowStyle} />
      </div>
    </div>
  );
};

export default function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('home');
    const [showToast, setShowToast] = useState(false);
    const [isCertZoomed, setIsCertZoomed] = useState(false);
    const [coveredDetailsVisible, setCoveredDetailsVisible] = useState(false);
    const canvasRef = useRef(null);
   
    const sectionRefs = {
        home: useRef(null),
        services: useRef(null),
        process: useRef(null),
        experience: useRef(null),
        certifications: useRef(null),
        achievements: useRef(null),
        contact: useRef(null),
    };

    useEffect(() => {
        const tailwindScript = document.createElement('script');
        tailwindScript.src = 'https://cdn.tailwindcss.com';
        document.head.appendChild(tailwindScript);
       
        const fontLinkPreconnect1 = document.createElement('link');
        fontLinkPreconnect1.rel = 'preconnect';
        fontLinkPreconnect1.href = 'https://fonts.googleapis.com';
        const fontLinkPreconnect2 = document.createElement('link');
        fontLinkPreconnect2.rel = 'preconnect';
        fontLinkPreconnect2.href = 'https://fonts.gstatic.com';
        fontLinkPreconnect2.crossOrigin = "true";
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLinkPreconnect1);
        document.head.appendChild(fontLinkPreconnect2);
        document.head.appendChild(fontLink);
        return () => {
            document.head.removeChild(tailwindScript);
            document.head.removeChild(fontLinkPreconnect1);
            document.head.removeChild(fontLinkPreconnect2);
            document.head.removeChild(fontLink);
        };
    }, []);

    useEffect(() => {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.1 });
   
        const heroElements = document.querySelectorAll('#hero-content .reveal');
        const timer = setTimeout(() => {
            heroElements.forEach(el => el.classList.add('visible'));
        }, 100);

        const allRevealElements = document.querySelectorAll('.reveal');
        allRevealElements.forEach(el => revealObserver.observe(el));
   
        return () => {
            clearTimeout(timer);
            allRevealElements.forEach(el => revealObserver.unobserve(el));
        };
    }, []);


    useEffect(() => {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveNav(entry.target.id);
                }
            });
        }, { 
            rootMargin: "0px 0px -80% 0px"
        });
        const refs = Object.values(sectionRefs);
        refs.forEach(ref => { if (ref.current) navObserver.observe(ref.current); });
        return () => { refs.forEach(ref => { if (ref.current) navObserver.unobserve(ref.current); }); };
    }, [sectionRefs]);

     useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let particlesArray = [];
        const numberOfParticles = (canvas.height * canvas.width) / 9000;

        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = 'rgba(5, 193, 104, 0.5)';
                ctx.fill();
            }
            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        function init() {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * .2) - .1;
                let directionY = (Math.random() * .2) - .1;
                let color = 'rgba(5, 193, 104, 0.8)';
                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                        ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(5, 193, 104, ${opacityValue})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
        }

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            setActiveNav(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        e.target.reset();
    };
   
    const navItems = ['home', 'services', 'process', 'experience', 'certifications', 'achievements', 'contact'];

    const logos = [
        { name: 'Burp Suite', src: burpSuiteLogo },
        { name: 'Wireshark', src: wiresharkLogo },
        { name: 'Metasploit', src: metasploitLogo },
        { name: 'Nmap', src: nmapLogo },
        { name: 'Kali Linux', src: kaliLinuxLogo },
        { name: 'Tenable Nessus', src: nessusLogo },
        { name: 'OWASP', src: owaspLogo },
        { name: 'OWASP ZAP', src: owaspZapLogo },
        { name: 'Python', src: pythonLogo },
        { name: 'Bash', src: bashLogo },
        { name: 'Hashcat', src: hashcatLogo },
        { name: 'AWS', src: awsLogo },
        { name: 'PowerShell', src: powershellLogo },
    ];
    const duplicatedLogos = [...logos, ...logos];

    return (
        <div className="app-container">
            <GlobalStyles />
            <header id="header" className="fixed top-0 left-0 right-0 z-50">
                <nav className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#home" onClick={(e) => handleNavLinkClick(e, 'home')} className="text-2xl font-bold accent-green">Akshat Parikh</a>
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map(item => (
                            <a key={item} href={`#${item}`} onClick={(e) => handleNavLinkClick(e, item)} className={`nav-link rounded-md capitalize ${activeNav === item ? 'active-nav-button' : ''}`}>
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="mailto:akshatparikh.pt@gmail.com" className="text-[var(--primary-green)] hover:text-[var(--light-green)] transition-colors duration-300" aria-label="Email"><Mail className="w-6 h-6" /></a>
                        <a href="https://www.linkedin.com/in/akshatparikh1010/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-green)] hover:text-[var(--light-green)] transition-colors duration-300" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></a>
                        <a href="https://github.com/akshatparikh1010" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-green)] hover:text-[var(--light-green)] transition-colors duration-300" aria-label="GitHub"><Github className="w-6 h-6" /></a>
                    </div>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-400 hover:text-white" aria-label="Open menu">
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </nav>
            </header>

            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden fixed top-0 left-0 w-full h-full bg-[var(--dark-bg)] z-40 pt-20`}>
                <div className="container mx-auto px-6 py-4 flex flex-col items-center space-y-4">
                    {navItems.map(item => (
                        <a key={item} href={`#${item}`} onClick={(e) => handleNavLinkClick(e, item)} className="text-lg text-[var(--text-primary)] hover:text-[var(--primary-green)] capitalize">
                            {item}
                        </a>
                    ))}
                </div>
            </div>

            <main>
                <section id="home" ref={sectionRefs.home} className="min-h-screen flex flex-col items-center justify-start px-6 relative overflow-hidden">
                    <canvas id="hero-bg" ref={canvasRef}></canvas>
                    <div className="flex-grow flex flex-col justify-center items-center pt-20 pb-6 relative z-10 w-full">
                        <div id="hero-content" className="w-full max-w-screen-2xl mx-auto px-4">
                            <div className="grid md:grid-cols-5 gap-8 items-center">
                                <div className="md:col-span-3 text-center md:text-left">
                                    <h1 className="text-5xl md:text-7xl font-bold fade-in-up reveal"><span className="accent-green">Akshat Parikh</span></h1>
                                    <p className="mt-4 text-xl md:text-2xl text-text-secondary fade-in-up reveal delay-1">1+ years of experience as a Penetration Tester and Cybersecurity Specialist</p>
                                    <p className="mt-6 text-text-secondary md:text-lg fade-in-up reveal delay-2">A cybersecurity professional with over a year of hands-on experience in penetration testing, and vulnerability assessment. I specialize in identifying and exploiting security flaws in web applications, networks, and systems to help organizations strengthen their digital defenses. With a strong foundation in offensive security methodologies and a deep understanding of modern threat landscapes, I deliver comprehensive security assessments that go beyond automated scans. </p>
                                </div>
                                <div className="hidden md:col-span-2 md:flex justify-end p-4">
                                    <div className="flex flex-col items-center gap-4 reveal delay-3">
                                        <div className="w-full max-w-xs">
                                            <StarBorder color="var(--primary-green)" speed="3s" thickness={3}>
                                                <h3 className="font-bold text-center accent-green" style={{ fontSize: '17px' }}>Secure Your Business Today</h3>
                                            </StarBorder>
                                        </div>
                                        <div className="w-60 h-auto">
                                            <div className="tech-viz">
                                                <svg className="w-full h-full" viewBox="0 0 200 250" style={{ transform: "perspective(1000px)" }}>
                                                    <defs>
                                                        <filter id="glow-shield" x="-50%" y="-50%" width="200%" height="200%">
                                                            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                                                            <feMerge>
                                                                <feMergeNode in="coloredBlur"/>
                                                                <feMergeNode in="SourceGraphic"/>
                                                            </feMerge>
                                                        </filter>
                                                        <style>
                                                            {`
                                                                .shield-path-anim { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: draw-shield-anim 2s ease-out forwards 0.5s; }
                                                                .lock-anim { opacity: 0; transform-origin: center; animation: appear-lock-anim 0.5s ease-out forwards 2.5s, lock-rotate-anim 8s linear infinite; }
                                                                .scan-line-anim { opacity: 0; animation: scan-effect-anim 3s ease-in-out infinite 2.8s; }
                                                                @keyframes draw-shield-anim { to { stroke-dashoffset: 0; } }
                                                                @keyframes appear-lock-anim { 0% { opacity: 0; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1); } }
                                                                @keyframes lock-rotate-anim { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg); } }
                                                                @keyframes scan-effect-anim { 0% { transform: translateY(-100px); opacity: 0; } 25% { opacity: 0.7; } 50% { transform: translateY(100px); opacity: 0; } 75% { opacity: 0.7; } 100% { transform: translateY(-100px); opacity: 0; } }
                                                            `}
                                                        </style>
                                                    </defs>
                                                    <g style={{ filter: 'url(#glow-shield)' }}>
                                                        <path className="shield-path-anim" d="M100 10 L190 50 V 140 C 190 180, 150 220, 100 240 C 50 220, 10 180, 10 140 V 50 Z" stroke="var(--primary-green)" strokeWidth="5" fill="rgba(5, 193, 104, 0.1)"/>
                                                        <rect className="scan-line-anim" x="30" y="125" width="140" height="3" fill="var(--light-green)" />
                                                        <g className="lock-anim" fill="none" stroke="var(--light-green)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                                                            <rect x="78" y="115" width="44" height="34" rx="7" />
                                                            <path d="M88 115 V 98 C 88 85, 112 85, 112 98 V 115" />
                                                            <circle cx="100" cy="132" r="4" fill="var(--light-green)" stroke="none"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto fade-in-up reveal delay-3">
                            <div className="text-center"><p className="text-3xl font-bold accent-green">1+</p><p className="text-text-secondary">Years Experience</p></div>
                            <div className="text-center"><p className="text-3xl font-bold accent-green">Top 0.1%</p><p className="text-text-secondary">TryHackMe Rank</p></div>
                            <div className="text-center"><p className="text-3xl font-bold accent-green">Pro Hacker</p><p className="text-text-secondary">HackTheBox Rank</p></div>
                        </div>
                       
                        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 fade-in-up reveal delay-4 w-full">
                            <a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')} className="btn btn-secondary px-6 py-2.5 rounded-lg flex items-center justify-center space-x-2 w-full sm:w-auto"><Briefcase className="w-4 h-4" /><span>View Services</span></a>
                            <a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')} className="btn btn-primary btn-primary-pulse px-6 py-2.5 rounded-lg flex items-center justify-center space-x-2 w-full sm:w-auto"><ShieldCheck className="w-4 h-4" /><span>Get a Free Consultation</span></a>
                            <a href="./akshat_parikh_resume.pdf" download className="btn btn-secondary px-6 py-2.5 rounded-lg flex items-center justify-center space-x-2 w-full sm:w-auto"><Download className="w-4 h-4" /><span>Download Resume</span></a>
                        </div>
                    </div>
                    <div className="pb-4 relative z-10 mt-auto">
                        <a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')} aria-label="Scroll down">
                            <ArrowDown className="w-6 h-6 animate-bounce text-text-secondary" />
                        </a>
                    </div>
                </section>
               
                <section id="services" ref={sectionRefs.services} className="py-24 w-full">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12 reveal">
                            <h2 className="text-4xl font-bold">Penetration Testing <span className="accent-green">Services</span></h2>
                            <p className="mt-4 max-w-2xl mx-auto text-text-secondary">Three tiers of professional testing services designed to fit your security needs and budget.</p>
                        </div>

                        <div className="text-center mb-8">
                            <button 
                                onClick={() => setCoveredDetailsVisible(!coveredDetailsVisible)}
                                className="btn btn-secondary px-6 py-2 rounded-lg flex items-center justify-center space-x-2 mx-auto"
                            >
                                {coveredDetailsVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                <span>{coveredDetailsVisible ? 'Hide Coverage Details' : 'Show Full Coverage Details'}</span>
                            </button>
                        </div>

                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                            <div className="service-card service-card-highlight p-8 rounded-lg reveal h-full flex flex-col">
                                 <StarBorder color="var(--primary-green)" speed="4s" thickness={1} className="mb-4">
                                    <h3 className="text-xl font-bold accent-green">Vulnerability Assessment</h3>
                                </StarBorder>
                                <p className="text-text-secondary mb-6 text-sm">Get a fast and affordable scan of your website's security. This scan is the perfect starting point to identify the most common and critical security gaps before they become major problems. Ideal for new businesses or as a regular security check-up.</p>
                                <div className="flex flex-col flex-grow">
                                    <div>
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2"><ScanSearch className="w-5 h-5 accent-green" />What's Covered:</h4>
                                        <ul className="space-y-2 text-sm text-text-secondary pl-2">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Automated Security Scan</strong>
                                                    {coveredDetailsVisible && <span className="text-text-secondary opacity-90 transition-opacity duration-300">: Automated security scans of web applications, find common misconfigurations and known software vulnerabilities.</span>}
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Manual review</strong>
                                                    {coveredDetailsVisible && <span className="text-text-secondary opacity-90 transition-opacity duration-300">: Light manual review for misconfigurations or overlooked issues</span>}
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Manual Verification</strong>
                                                    {coveredDetailsVisible && <span className="text-text-secondary opacity-90 transition-opacity duration-300">: I manually validate the most critical findings to ensure the report is accurate and free of false positives.</span>}
                                                </span>
                                            </li>
                                             <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Analysis of outdated software</strong>
                                                    {coveredDetailsVisible && <span className="text-text-secondary opacity-90 transition-opacity duration-300">, exposed admin panels, and other common threats</span>}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr className="my-4 border-t-2 border-[var(--primary-green)] opacity-50" style={{boxShadow: '0 0 8px var(--glow-color)'}} />
                                    <div className="mb-4">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2"><FileText className="w-5 h-5 accent-green" />What you get</h4>
                                        <ul className="space-y-2 text-sm text-text-secondary pl-2">
                                            <li className="flex items-start">
                                                <ShieldCheck className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Clear and actionable report</strong>: Highlights the most critical issues with risk ratings
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <ShieldCheck className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Actionable First Steps</strong>: Clear guidance on the most important issues your team needs to fix first to see immediate security improvement.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <ShieldCheck className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Fast turnaround</strong>: Receive your report within 2–3 days
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-auto">
                                        <hr className="mb-4 border-t-2 border-[var(--primary-green)] opacity-50" style={{boxShadow: '0 0 8px var(--glow-color)'}} />
                                        <p className="text-sm text-text-secondary">
                                            <span className="font-bold accent-green">Perfect for:</span> Small businesses or startups looking to safeguard their website at an affordable cost.
                                        </p>
                                    </div>
                                </div>
                            </div>
                           <div className="service-card p-8 rounded-lg reveal h-full flex flex-col popular">
                                <div className="popular-badge flex items-center gap-1"><Star className="w-3 h-3"/> POPULAR</div>
                                 <StarBorder color="var(--primary-green)" speed="4s" thickness={1} className="mb-4">
                                    <h3 className="text-xl font-bold accent-green">Web Application Penetration Testing</h3>
                                 </StarBorder>
                                <p className="text-text-secondary mb-6 text-sm">Your website is the heart of your online business. From customer accounts to payment systems, it's crucial to ensure it's secure. This involves simulating real-world attacks to identify weaknesses in your site or app. It goes beyond automated tools to uncover vulnerabilities that can lead to data breaches or compromised systems.</p>
                                <div className="flex flex-col flex-grow">
                                    <div>
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2"><ScanSearch className="w-5 h-5 accent-green" />What’s Covered:</h4>
                                        <ul className="space-y-2 text-sm text-text-secondary pl-2">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">In-Depth Manual Testing</strong>
                                                    {coveredDetailsVisible && <span className="text-text-secondary opacity-90 transition-opacity duration-300">: Full vulnerability assessment plus in-depth manual penetration testing</span>}
                                                </span>
                                            </li>
                                             <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Real-World Attack Scenarios</strong>
                                                    {coveredDetailsVisible && <span className="text-text-secondary opacity-90 transition-opacity duration-300">: Simulating how a real hacker would try to steal customer data, compromise user accounts, or gain admin access.</span>}
                                                </span>
                                            </li>
                                             <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Authentication & Session Security</strong>
                                                    {coveredDetailsVisible && <span className="text-text-secondary opacity-90 transition-opacity duration-300">: Testing of authentication mechanisms, user roles, session management, and data handling</span>}
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Common Vulnerability Checks</strong>
                                                    {coveredDetailsVisible && <span className="text-text-secondary opacity-90 transition-opacity duration-300">: Identifying critical vulnerabilities like SQL Injection, Cross-Site Scripting (XSS), and Broken Access Control</span>}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr className="my-4 border-t-2 border-[var(--primary-green)] opacity-50" style={{boxShadow: '0 0 8px var(--glow-color)'}} />
                                    <div className="mb-4">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2"><FileText className="w-5 h-5 accent-green" />What you get</h4>
                                        <ul className="space-y-2 text-sm text-text-secondary pl-2">
                                            <li className="flex items-start">
                                                <ShieldCheck className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Comprehensive Technical Report</strong>: A detailed report with technical findings and detailed remediation steps
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <ShieldCheck className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Risk-level assessments</strong>: Understanding of which vulnerabilities are most critical and need immediate attention
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <ShieldCheck className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Optional retesting</strong>: after fixes to ensure issues are resolved
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-auto">
                                        <hr className="mb-4 border-t-2 border-[var(--primary-green)] opacity-50" style={{boxShadow: '0 0 8px var(--glow-color)'}} />
                                        <p className="text-sm text-text-secondary">
                                            <span className="font-bold accent-green">Perfect for:</span> E-commerce sites, SaaS products, and any business handling sensitive customer information.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-card service-card-highlight p-8 rounded-lg reveal h-full flex flex-col">
                                <StarBorder color="var(--primary-green)" speed="4s" thickness={1} className="mb-4">
                                    <h3 className="text-xl font-bold accent-green">Network Penetration Testing</h3>
                                </StarBorder>
                                <p className="text-text-secondary mb-6 text-sm">Secure the foundation of your digital operations. I will test your company's internal and external networks (like your servers, cloud infrastructure, and office Wi-Fi) to find weak points that an attacker could use to compromise your entire business</p>
                                <div className="flex flex-col flex-grow">
                                    <div>
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2"><ScanSearch className="w-5 h-5 accent-green" />What’s Covered:</h4>
                                        <ul className="space-y-2 text-sm text-text-secondary pl-2">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">External Network Testing</strong>
                                                    {coveredDetailsVisible && <span className="text-text-secondary opacity-90 transition-opacity duration-300">: I'll scan your internet-facing systems to identify exposed services, weak firewall rules, and open ports that are visible to attackers online.</span>}
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Internal Network Testing</strong>
                                                    {coveredDetailsVisible && <span className="text-text-secondary opacity-90 transition-opacity duration-300">: Looking for weak passwords, unpatched systems, and ways an attacker could move from one machine to another.</span>}
                                                </span>
                                            </li>
                                             <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Vulnerability & Misconfiguration Discovery</strong>
                                                    {coveredDetailsVisible && <span className="text-text-secondary opacity-90 transition-opacity duration-300">: Identifying out-of-date software and system misconfigurations.</span>}
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Network Analysis</strong>
                                                    {coveredDetailsVisible && <span className="text-text-secondary opacity-90 transition-opacity duration-300">: A detailed review of how data flows within your network to identify potential weak points or insecure paths that could be exploited by attackers.</span>}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr className="my-4 border-t-2 border-[var(--primary-green)] opacity-50" style={{boxShadow: '0 0 8px var(--glow-color)'}} />
                                    <div className="mb-4">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2"><FileText className="w-5 h-5 accent-green" />What You Get:</h4>
                                        <ul className="space-y-2 text-sm text-text-secondary pl-2">
                                            <li className="flex items-start">
                                                <ShieldCheck className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Network Security Architecture Report</strong>: A clear overview of your network's security posture and where the key weaknesses lie.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <ShieldCheck className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Prioritized Vulnerability List</strong>: Details on all misconfigurations, vulnerable services, and weak credentials found, ranked by risk.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <ShieldCheck className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" />
                                                <span>
                                                    <strong className="text-white">Post-fix retesting (optional)</strong>: To confirm all issues have been resolved
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-auto">
                                        <hr className="mb-4 border-t-2 border-[var(--primary-green)] opacity-50" style={{boxShadow: '0 0 8px var(--glow-color)'}} />
                                        <p className="text-sm text-text-secondary">
                                            <span className="font-bold accent-green">Perfect for:</span> Businesses with a physical office, cloud infrastructure (AWS, etc.), or those looking to scale their operations securely.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="mt-16">
                            <div className="text-center mb-12 reveal">
                                <h3 className="text-3xl font-bold"><span className="accent-green">Technologies</span> and <span className="accent-green">Tools</span></h3>
                            </div>
                             <div className="logo-scroller">
                                <div className="logo-scroller-inner">
                                    {duplicatedLogos.map((logo, index) => (
                                        <div key={index} className="logo-item" title={logo.name}>
                                            {logo.type === 'text' ? (
                                                <span className="logo-text">{logo.name}</span>
                                            ) : (
                                                <img src={logo.src} alt={logo.name} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 items-center mt-16">
                            <div className="styled-card p-8 rounded-lg text-center reveal">
                                <h3 className="text-2xl font-bold accent-green">RISK-FREE GUARANTEE</h3>
                                <p className="text-text-secondary mt-4 text-lg">I'm confident in my ability to find vulnerabilities that matter. That's why I offer a simple guarantee:</p>
                                <p className="mt-4 text-xl font-bold text-white">No Vulnerability, No Fee.</p>
                                <p className="text-text-secondary mt-2">If I can't find any critical security flaws on your website, you don't pay.</p>
                            </div>
                             <div className="text-center reveal">
                                <h3 className="text-xl font-bold mb-4">Download My Service Brochure</h3>
                                <p className="text-text-secondary mb-6">Get a detailed overview of my services, methodology, and what you can expect when working with me.</p>
                                <a href="#" className="btn btn-primary px-6 py-2.5 rounded-lg flex items-center justify-center space-x-2 max-w-xs mx-auto"><Download className="w-4 h-4" /><span>Download Brochure</span></a>
                            </div>
                        </div>
                    </div>
                </section>
               
                <section id="process" ref={sectionRefs.process} className="py-24 w-full">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20 reveal">
                            <h2 className="text-4xl font-bold">My <span className="accent-green">Process</span></h2>
                            <p className="mt-4 max-w-2xl mx-auto text-text-secondary">A transparent, four-step process designed to deliver clear, actionable results, ensuring you understand every stage of the engagement.</p>
                        </div>
                       
                        <div className="relative">
                            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-[var(--primary-green)] opacity-20 z-10"></div>
                           
                            <div className="grid md:grid-cols-2 gap-16 items-center mb-24 relative reveal z-20">
                                <div className="process-step-content text-left text-center md:text-left pl-12">
                                    <h3 className="text-2xl font-bold mb-3"><span className="accent-green">1.</span> Scoping & Reconnaissance</h3>
                                    <ul className="space-y-2 text-text-secondary list-disc list-inside md:list-none">
                                        <li>Define targets and understand business goals in collaboration with you.</li>
                                        <li>Perform passive and active intelligence gathering to map the attack surface.</li>
                                        <li>Identify technologies, personnel, and potential points of entry.</li>
                                        <li>Establish clear rules of engagement and communication channels.</li>
                                    </ul>
                                </div>
                                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-0.5 bg-[var(--primary-green)] shadow-[0_0_10px_var(--glow-color)]"></div>
                                <div className="flex items-center justify-center p-4">
                                    <svg viewBox="0 0 200 200" className="w-full max-w-sm">
                                        <circle cx="100" cy="100" r="80" stroke="var(--primary-green)" strokeWidth="1" fill="none" opacity="0.2"/>
                                        <circle cx="100" cy="100" r="60" stroke="var(--primary-green)" strokeWidth="1" fill="none" opacity="0.4"/>
                                        <circle cx="100" cy="100" r="40" stroke="var(--primary-green)" strokeWidth="1" fill="none" opacity="0.6"/>
                                        <path d="M100 20 L100 0 M20 100 L0 100 M180 100 L200 100 M100 180 L100 200" stroke="var(--primary-green)" strokeWidth="1" opacity="0.4"/>
                                        <circle cx="100" cy="100" r="4" fill="var(--light-green)" />
                                        <circle cx="150" cy="50" r="4" fill="var(--light-green)" />
                                        <circle cx="40" cy="70" r="4" fill="var(--light-green)" />
                                        <circle cx="130" cy="150" r="4" fill="var(--light-green)" />
                                        <text x="145" y="45" textAnchor="end" fill="var(--text-secondary)" fontSize="8">Open Port: XX</text>
                                        <text x="5" y="60" fill="var(--text-secondary)" fontSize="8">inscope.target.com</text>
                                        <text x="135" y="160" fill="var(--text-secondary)" fontSize="8">CMS Platform</text>
                                        <text x="105" y="105" fill="var(--text-secondary)" fontSize="8">192.168.1.1</text>
                                    </svg>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-16 items-center mb-24 relative reveal z-20">
                                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-0.5 bg-[var(--primary-green)] shadow-[0_0_10px_var(--glow-color)]"></div>
                                <div className="flex items-center justify-center p-4 md:order-first">
                                    <svg viewBox="0 0 200 200" className="w-full max-w-sm">
                                        <path d="M 20,80 L 180,80 M 20,120 L 180,120 M 80,20 L 80,180 M 120,20 L 120,180" stroke="var(--primary-green)" strokeWidth="1" opacity="0.2"/>
                                        <rect x="20" y="20" width="160" height="160" rx="10" stroke="var(--primary-green)" strokeWidth="1.5" fill="none" opacity="0.5"/>
                                        <path d="M 90,90 L 110,110 M 90,110 L 110,90" stroke="var(--light-green)" strokeWidth="4" strokeLinecap="round"/>
                                        <text x="30" y="40" fill="var(--text-secondary)" fontSize="8">Scanning...</text>
                                        <rect x="30" y="50" width="140" height="10" fill="var(--primary-green)" opacity="0.2"/>
                                        <rect x="30" y="50" width="90" height="10" fill="var(--primary-green)" />
                                        <text x="100" y="170" textAnchor="middle" fill="var(--primary-green)" fontSize="10" fontWeight="bold">OWASP Top 10</text>
                                    </svg>
                                </div>
                                <div className="process-step-content text-right text-center md:text-right pr-12">
                                    <h3 className="text-2xl font-bold mb-3"><span className="accent-green">2.</span> Vulnerability Detection</h3>
                                    <ul className="space-y-2 text-text-secondary list-disc list-inside md:list-none">
                                        <li>Combine automated scanning with deep manual testing techniques.</li>
                                        <li>Analyze web applications for OWASP Top 10 and other known vulnerabilities.</li>
                                        <li>Assess network configurations, services, and access controls for weaknesses.</li>
                                        <li>Review source code and system architecture for underlying security flaws.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-16 items-center mb-24 relative reveal z-20">
                                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-0.5 bg-[var(--primary-green)] shadow-[0_0_10px_var(--glow-color)]"></div>
                                <div className="process-step-content text-left text-center md:text-left pl-12">
                                    <h3 className="text-2xl font-bold mb-3"><span className="accent-green">3.</span> Exploitation & Analysis</h3>
                                    <ul className="space-y-2 text-text-secondary list-disc list-inside md:list-none">
                                        <li>Safely confirm the impact of discovered vulnerabilities with PoCs.</li>
                                        <li>Attempt to escalate privileges and move laterally within the network.</li>
                                        <li>Identify the potential business impact of a successful breach.</li>
                                        <li>Chain together multiple low-impact vulnerabilities to create high-risk scenarios.</li>
                                    </ul>
                                </div>
                                <div className="flex items-center justify-center p-4">
                                <svg viewBox="0 0 200 200" className="w-full max-w-sm">
                                    <circle cx="100" cy="100" r="80" stroke="var(--primary-green)" strokeWidth="1.5" fill="none" opacity="0.3"/>
                                    <path d="M100,70 L100,110" stroke="var(--light-green)" strokeWidth="4" strokeLinecap="round"/>
                                    <path d="M100,130 L100,132" stroke="var(--light-green)" strokeWidth="4" strokeLinecap="round"/>
                                    <text x="60" y="60" fill="var(--text-secondary)" fontSize="10">CVE-2025-XXXX</text>
                                </svg>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-16 items-center relative reveal z-20">
                                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-0.5 bg-[var(--primary-green)] shadow-[0_0_10px_var(--glow-color)]"></div>
                                <div className="flex items-center justify-center p-4 md:order-first">
                                    <svg viewBox="0 0 200 200" className="w-full max-w-sm">
                                        <rect x="30" y="30" width="140" height="140" rx="5" stroke="var(--primary-green)" strokeWidth="1.5" fill="none" opacity="0.4"/>
                                        <path d="M50 60 L 150 60 M50 80 L 150 80 M50 100 L 100 100 M50 120 L 150 120 M50 140 L 120 140" stroke="var(--primary-green)" strokeWidth="1" opacity="0.3" />
                                        <text x="100" y="55" textAnchor="middle" fill="var(--primary-green)" fontSize="20" fontWeight="bold">Report</text>
                                        <path d="M50 160 L 150 160" stroke="var(--primary-green)" strokeWidth="2" opacity="0.8" />
                                    </svg>
                                </div>
                                <div className="process-step-content text-right text-center md:text-right pr-12">
                                    <h3 className="text-2xl font-bold mb-3"><span className="accent-green">4.</span> Reporting & Consultation</h3>
                                    <p className="text-text-secondary mb-6">The engagement concludes with a comprehensive report written for both technical teams and management. It details all findings, provides clear risk analysis, and offers actionable steps for remediation. I also provide consultation to ensure your team understands and can implement the fixes.</p>
                                    <div className="flex flex-col items-center md:items-end">
                                        <p className="font-semibold mb-4">Available in Multiple Formats:</p>
                                        <div className="flex space-x-4">
                                            <div className="text-center">
                                                <FileText className="w-10 h-10 text-primary-green mx-auto"/>
                                                <p className="text-sm mt-1">PDF</p>
                                            </div>
                                            <div className="text-center">
                                                <FileSpreadsheet className="w-10 h-10 text-primary-green mx-auto"/>
                                                <p className="text-sm mt-1">CSV</p>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-primary px-6 py-2.5 rounded-lg flex items-center justify-center space-x-2 mt-6"><Download className="w-4 h-4" /><span>Download Sample Report</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="experience" ref={sectionRefs.experience} className="py-24 w-full">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12 reveal"><h2 className="text-4xl font-bold">Experience <span className="accent-green">& Education</span></h2><p className="mt-4 max-w-2xl mx-auto text-text-secondary">A track record of successful security assessments and continuous learning in cybersecurity.</p></div>
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-8">
                                <div className="styled-card p-8 rounded-lg reveal"><div className="flex flex-col sm:flex-row justify-between items-start mb-2"><div><h3 className="text-xl font-bold">Penetration Tester</h3><p className="accent-green font-medium">Opal Omniventures Pvt. Ltd.</p></div><p className="text-sm text-text-secondary whitespace-nowrap mt-2 sm:mt-0">July 2023 - March 2024</p></div><p className="text-text-secondary mb-4">Leading comprehensive security assessments and collaborating with external partners on penetration testing engagements.</p><p className="font-semibold mb-2">Key Achievements:</p><ul className="space-y-2 text-sm text-text-secondary"><li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" /><span>Collaborated with external partners on security initiatives for joint penetration testing engagements.</span></li><li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" /><span>Executed targeted phishing simulations to test employee susceptibility and improve security awareness.</span></li><li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" /><span>Performed advanced web application penetration testing using Burp Suite, OWASP ZAP, and Nessus.</span></li></ul></div>
                                <div className="styled-card p-8 rounded-lg reveal"><div className="flex flex-col sm:flex-row justify-between items-start mb-2"><div><h3 className="text-xl font-bold">Penetration Tester</h3><p className="accent-green font-medium">MCS Ventures</p></div><p className="text-sm text-text-secondary whitespace-nowrap mt-2 sm:mt-0">Jan 2023 - July 2023</p></div><p className="text-text-secondary mb-4">Specialized in vulnerability assessments and manual penetration testing on web applications and network systems.</p><p className="font-semibold mb-2">Key Achievements:</p><ul className="space-y-2 text-sm text-text-secondary"><li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" /><span>Conducted comprehensive vulnerability assessments on web applications and network systems.</span></li><li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 mt-1 accent-green flex-shrink-0" /><span>Executed manual penetration tests using OWASP ZAP, Burp Suite, and Nessus.</span></li></ul></div>
                            </div>
                            <div className="space-y-8">
                                <div className="reveal">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><GraduationCap className="w-8 h-8 accent-green" />Education</h3>
                                    <div className="space-y-6">
                                        <div className="education-card p-6 rounded-lg"><h4 className="font-bold text-lg">Bachelor's in ICT Engineering</h4><p className="text-sm accent-green">LJIET</p><div className="text-sm text-text-secondary mt-2 space-y-1"><p className="flex items-center gap-2"><Calendar className="w-4 h-4" />2021 - 2024</p><p className="flex items-center gap-2"><span className="font-semibold accent-green">Grade:</span> 7.87 CGPA</p></div><ul className="text-sm text-text-secondary mt-3 space-y-1 list-disc list-inside"><li>Strong foundation in cybersecurity concepts</li><li>Networking and system administration</li><li>Software development and programming</li></ul></div>
                                        <div className="education-card p-6 rounded-lg"><h4 className="font-bold text-lg">Diploma in Computer Engineering</h4><p className="text-sm accent-green">RCTI</p><div className="text-sm text-text-secondary mt-2 space-y-1"><p className="flex items-center gap-2"><Calendar className="w-4 h-4" />2018 - 2021</p><p className="flex items-center gap-2"><span className="font-semibold accent-green">Grade:</span> 7.88 CGPA</p></div><ul className="text-sm text-text-secondary mt-3 space-y-1 list-disc list-inside"><li>Computer systems fundamentals</li><li>Network protocols and security</li><li>Programming and database management</li></ul></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               
                <section id="certifications" ref={sectionRefs.certifications} className="py-24 w-full">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12 reveal"><h2 className="text-4xl font-bold"><span className="accent-green">Certification</span> & Learning</h2></div>
                        <div
                            className="mb-16 reveal max-w-5xl mx-auto"
                        >
                           <ElectricBorder
                                className="mb-16 reveal max-w-5xl mx-auto"
                                color="var(--primary-green)"
                                speed={1}
                                chaos={0.5}
                                thickness={2}
                                style={{ borderRadius: '0.5rem' }}
                            >
                            <div className="styled-card rounded-lg">
                                <div className="p-8">
                                    <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
                                        <div className="md:col-span-1">
                                            <img 
                                                src={crtaCertImage} 
                                                alt="CRTA Certification" 
                                                className="w-full rounded-md shadow-lg cursor-zoom-in transition-transform duration-300 hover:scale-105"
                                                onClick={() => setIsCertZoomed(true)}
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center md:col-span-1">
                                            <div>
                                                <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start gap-2">CRTA <CheckCircle className="w-6 h-6 accent-green" /></h3>
                                                <p className="font-semibold accent-green">Certified Red Team Analyst</p>
                                                <p className="text-sm text-text-secondary mt-1">CyberWarfare Labs • Achieved 7/7/2025</p>
                                            </div>
                                            <div className="border-t border-gray-700 my-4"></div>
                                            <div>
                                                <p className="text-sm text-text-secondary">Certificate ID: <span className="font-mono text-text-primary block">CRTA-686clcfed42955efb469828b</span></p>
                                                <div className="mt-4">
                                                    <h4 className="font-semibold mb-2">Key Skills:</h4>
                                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                                        <span className="bg-gray-800 text-xs font-medium px-3 py-1 rounded-full">Red Teaming</span>
                                                        <span className="bg-gray-800 text-xs font-medium px-3 py-1 rounded-full">Adversary Simulation</span>
                                                        <span className="bg-gray-800 text-xs font-medium px-3 py-1 rounded-full">Lateral Movement</span>
                                                        <span className="bg-gray-800 text-xs font-medium px-3 py-1 rounded-full">Persistence</span>
                                                        <span className="bg-gray-800 text-xs font-medium px-3 py-1 rounded-full">MITRE ATT&CK</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           </ElectricBorder>
                        </div>
                        <div className="reveal">
                            <h3 className="text-2xl font-bold text-center mb-8">Other Learning Paths & Certificates</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="certificate-card p-6 rounded-lg text-center flex flex-col items-center justify-center"><ShieldCheck className="w-10 h-10 accent-green mb-3" /><h4 className="text-lg font-bold mb-2">CompTIA PenTest+ (THM)</h4><p className="text-sm text-text-secondary">Covers planning, scoping, and vulnerability assessment.</p></div>
                                <div className="certificate-card p-6 rounded-lg text-center flex flex-col items-center justify-center"><UserCheck className="w-10 h-10 accent-green mb-3" /><h4 className="text-lg font-bold mb-2">Jr Penetration Tester</h4><p className="text-sm text-text-secondary">Fundamental penetration testing skills and methodologies.</p></div>
                                <div className="certificate-card p-6 rounded-lg text-center flex flex-col items-center justify-center"><Swords className="w-10 h-10 accent-green mb-3" /><h4 className="text-lg font-bold mb-2">Red Teaming Path</h4><p className="text-sm text-text-secondary">Advanced adversarial simulation and offensive security tactics.</p></div>
                                <div className="certificate-card p-6 rounded-lg text-center flex flex-col items-center justify-center"><Globe className="w-10 h-10 accent-green mb-3" /><h4 className="text-lg font-bold mb-2">Web Application Security</h4><p className="text-sm text-text-secondary">Focuses on securing web apps and find key vulnerabilities.</p></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="achievements" ref={sectionRefs.achievements} className="py-24 w-full">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12 reveal"><h2 className="text-4xl font-bold">Notable <span className="accent-green">Achievements</span></h2><p className="mt-4 max-w-2xl mx-auto text-text-secondary">Recognition and accomplishments in cybersecurity competitions and professional development.</p></div>
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            <div className="styled-card p-8 rounded-lg reveal flex flex-col space-y-6"><div className="flex justify-between items-start"><div className="flex items-center space-x-4"><Target className="w-10 h-10 accent-green" /><div><h3 className="text-xl font-bold">TryHackMe</h3><p className="text-sm text-text-secondary">Known as <span className="accent-green font-semibold">SN1PER</span></p></div></div><span className="achievement-badge text-xs font-semibold px-3 py-1 rounded-full">Top 0.1%</span></div><p className="text-text-secondary">Elite ranking among global cybersecurity enthusiasts, actively participating in CTFs and learning paths.</p><div className="thm-badge-iframe"><iframe title="TryHackMe Profile Badge" src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3454390" style={{width: '100%', height: '100%', border: 'none'}}></iframe></div><div className="grid grid-cols-3 gap-4 text-center border-t border-gray-700 pt-4"><div><p className="text-2xl font-bold accent-green">Top 0.1%</p><p className="text-xs text-text-secondary">Global Rank</p></div><div><p className="text-2xl font-bold accent-green">300+</p><p className="text-xs text-text-secondary">Day Streaks</p></div><div><p className="text-2xl font-bold accent-green">200+</p><p className="text-xs text-text-secondary">CTF Challenges</p></div></div></div>
                            <div className="styled-card p-8 rounded-lg reveal flex flex-col space-y-6"><div className="flex justify-between items-start"><div className="flex items-center space-x-4"><Box className="w-10 h-10 accent-green" /><div><h3 className="text-xl font-bold">HackTheBox</h3><p className="text-sm text-text-secondary">Known as <span className="accent-green font-semibold">SN1PERZ</span></p></div></div><span className="achievement-badge text-xs font-semibold px-3 py-1 rounded-full">Pro Hacker</span></div><p className="text-text-secondary">Achieved Pro Hacker rank, consistently performing at a high level in seasonal competitive hacking challenges.</p><div className="flex-grow flex flex-col justify-center space-y-4 border-t border-b border-gray-700 py-6"><div className="flex justify-around text-center"><div><p className="text-text-secondary text-sm">Current Rank</p><p className="text-2xl font-bold accent-green">Pro Hacker</p></div><div><p className="text-text-secondary text-sm">Season Rank</p><p className="text-2xl font-bold accent-green">HOLO</p></div></div></div><div className="text-center pt-4"><p className="text-xs text-text-secondary">Profile ID</p><p className="font-mono text-lg accent-green">475852</p></div></div>
                        </div>
                    </div>
                </section>

                <section id="contact" ref={sectionRefs.contact} className="py-24 w-full">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12 reveal"><h2 className="text-4xl font-bold">Ready to Secure <span className="accent-green">Your Business?</span></h2><p className="mt-4 max-w-2xl mx-auto text-text-secondary">Let's talk. Contact me today for a free, no-obligation consultation to discuss your security needs.</p></div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="styled-card p-8 rounded-lg reveal"><h3 className="text-xl font-bold mb-4">Connect With Me</h3><p className="text-text-secondary mb-6">Multiple ways to reach out and connect professionally.</p><div className="space-y-6"><div className="flex items-center space-x-4"><div className="bg-dark-bg border border-gray-700 p-3 rounded-lg"><Mail className="w-6 h-6 accent-green" /></div><div><h4 className="font-semibold">Email</h4><a href="mailto:akshatparikh.pt@gmail.com" className="text-text-secondary hover:text-white text-sm">akshatparikh.pt@gmail.com</a></div></div><div className="flex items-center space-x-4"><div className="bg-dark-bg border border-gray-700 p-3 rounded-lg"><Linkedin className="w-6 h-6 accent-green" /></div><div><h4 className="font-semibold">LinkedIn</h4><a href="https://www.linkedin.com/in/akshatparikh1010/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white text-sm">linkedin.com/in/akshatparikh1010</a></div></div><div className="flex items-center space-x-4"><div className="bg-dark-bg border border-gray-700 p-3 rounded-lg"><Target className="w-6 h-6 accent-green" /></div><div><h4 className="font-semibold">TryHackMe</h4><a href="https://tryhackme.com/p/SN1PER" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white text-sm">tryhackme.com/p/SN1PER</a></div></div><div className="flex items-center space-x-4"><div className="bg-dark-bg border border-gray-700 p-3 rounded-lg"><Box className="w-6 h-6 accent-green" /></div><div><h4 className="font-semibold">HackTheBox</h4><a href="https://app.hackthebox.com/users/475852" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white text-sm">app.hackthebox.com/users/SN1PERZ</a></div></div></div></div>
                            <div className="styled-card p-8 rounded-lg reveal"><h3 className="text-xl font-bold mb-4">Send a Message for a Free Consultation</h3><form onSubmit={handleContactSubmit} className="space-y-4"><div className="grid sm:grid-cols-2 gap-4"><div><label htmlFor="name" className="text-sm font-medium sr-only">Name</label><input type="text" id="name" name="name" placeholder="Name *" required className="mt-1 w-full bg-dark-bg border border-gray-700 rounded-lg px-3 py-2 focus:ring-1 focus:ring-primary-green focus:outline-none" /></div><div><label htmlFor="email" className="text-sm font-medium sr-only">Email</label><input type="email" id="email" name="email" placeholder="Email *" required className="mt-1 w-full bg-dark-bg border border-gray-700 rounded-lg px-3 py-2 focus:ring-1 focus:ring-primary-green focus:outline-none" /></div></div><div><label htmlFor="message" className="text-sm font-medium sr-only">Message</label><textarea id="message" name="message" rows="4" placeholder="Message *" required className="mt-1 w-full bg-dark-bg border border-gray-700 rounded-lg px-3 py-2 focus:ring-1 focus:ring-primary-green focus:outline-none"></textarea></div><button type="submit" className="btn btn-primary w-full py-2.5 rounded-lg">Send Message</button></form><div className="mt-4 text-center text-text-secondary text-sm"><p className="font-semibold accent-green">&lt; 12hrs</p><p>Average Response Time</p></div></div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="w-full bg-card-bg border-t border-gray-800 mt-12">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
                        <div className="md:col-span-1"><h3 className="text-xl font-bold accent-green">SN1PER</h3><p className="text-sm text-text-secondary mt-4">Professional penetration tester specializing in web application security. Committed to ethical hacking and helping organizations strengthen their cybersecurity posture.</p><div className="mt-6 flex gap-4 justify-center md:justify-start"><a href="./akshat_parikh_resume.pdf" download className="btn btn-secondary px-4 py-2 rounded-lg flex items-center space-x-2 text-sm"><Download className="w-4 h-4" /><span>Download Resume</span></a><a href="#" className="btn btn-secondary px-4 py-2 rounded-lg flex items-center space-x-2 text-sm"><Book className="w-4 h-4" /><span>Service Brochure</span></a></div></div>
                        <div><h3 className="text-lg font-bold">Quick Links</h3><div className="grid grid-cols-2 gap-2 mt-4 text-sm"><ul className="space-y-2"><li><a href="#home" onClick={(e) => handleNavLinkClick(e, 'home')} className="text-text-secondary hover:text-white">Home</a></li><li><a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')} className="text-text-secondary hover:text-white">Services</a></li><li><a href="#process" onClick={(e) => handleNavLinkClick(e, 'process')} className="text-text-secondary hover:text-white">Process</a></li><li><a href="#experience" onClick={(e) => handleNavLinkClick(e, 'experience')} className="text-text-secondary hover:text-white">Experience</a></li></ul><ul className="space-y-2"><li><a href="#certifications" onClick={(e) => handleNavLinkClick(e, 'certifications')} className="text-text-secondary hover:text-white">Certifications</a></li><li><a href="#achievements" onClick={(e) => handleNavLinkClick(e, 'achievements')} className="text-text-secondary hover:text-white">Achievements</a></li><li><a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')} className="text-text-secondary hover:text-white">Contact</a></li></ul></div></div>
                        <div><h3 className="text-lg font-bold">Connect</h3><div className="flex space-x-3 mt-4 justify-center md:justify-start"><a href="mailto:akshatparikh.pt@gmail.com" className="footer-icon" aria-label="Email"><Mail className="w-5 h-5" /></a><a href="https://www.linkedin.com/in/akshatparikh1010/" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a><a href="https://github.com/akshatparikh1010" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="GitHub"><Github className="w-5 h-5" /></a><a href="https://tryhackme.com/p/SN1PER" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="TryHackMe"><Target className="w-5 h-5" /></a><a href="https://app.hackthebox.com/users/475852" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="HackTheBox"><Box className="w-5 h-5" /></a></div><div className="mt-6 text-sm space-y-2"><p className="text-text-secondary">TryHackMe: <span className="accent-green font-semibold">Top 0.1%</span></p><p className="text-text-secondary">HackTheBox: <span className="accent-green font-semibold">Pro Hacker</span></p></div></div>
                    </div>
                    <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left"><p className="text-sm text-text-secondary">&copy; 2025 SN1PER. All Rights Reserved. Built with security in mind.</p><p className="text-sm text-text-secondary mt-2 md:mt-0">"Breaking things to make them safer"</p></div>
                </div>
            </footer>
           
            {isCertZoomed && (
                <div className="cert-modal-overlay" onClick={() => setIsCertZoomed(false)}>
                    <div className="cert-modal-content">
                        <img src={crtaCertImage} alt="CRTA Certification - Zoomed" />
                    </div>
                </div>
            )}

            <div id="notification-toast" className={`bg-primary-green text-dark-bg font-semibold px-6 py-3 rounded-lg shadow-lg ${showToast ? 'show' : ''}`}>Message sent successfully!</div>
        </div>
    );
}

