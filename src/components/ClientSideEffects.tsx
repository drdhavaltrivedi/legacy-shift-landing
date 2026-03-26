'use client';

import { useEffect, useRef } from 'react';

export default function ClientSideEffects() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── THEME TOGGLE ──
    const btn = document.querySelector('.theme-toggle');
    const storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', storedTheme);

    const toggleTheme = () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    };
    btn?.addEventListener('click', toggleTheme);

    // ── CUSTOM CURSOR ──
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${clientX}px`;
        ringRef.current.style.top = `${clientY}px`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${clientX}px`;
        glowRef.current.style.top = `${clientY}px`;
      }

      // Cursor Trail
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = `${clientX}px`;
      trail.style.top = `${clientY}px`;
      document.body.appendChild(trail);
      
      trail.animate([
        { opacity: 0.5, transform: 'translate(-50%, -50%) scale(1)' },
        { opacity: 0, transform: 'translate(-50%, -50%) scale(0.1)' }
      ], { duration: 600, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' });
      
      setTimeout(() => trail.remove(), 600);
    };

    const handleHover = (isHovering: boolean) => {
      dotRef.current?.classList.toggle('hovering', isHovering);
      ringRef.current?.classList.toggle('hovering', isHovering);
    };

    window.addEventListener('mousemove', moveCursor);
    const interactiveElements = document.querySelectorAll('a, button, .btn-primary, .btn-secondary, .nav-cta');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => handleHover(true));
      el.addEventListener('mouseleave', () => handleHover(false));
    });

    // ── SCROLL ANIMATIONS ──
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.15 });

    const animatedElements = document.querySelectorAll('.pain-card, .result-card, .section-title, .hero h1, .hero-sub, .hero-actions, .hero-proof');
    animatedElements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(40px)';
      htmlEl.style.transition = 'opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
      
      const isGrid = el.parentElement?.className.includes('grid') || el.parentElement?.className.includes('container');
      const delay = isGrid ? (i % 4) * 0.15 : 0;
      htmlEl.style.transitionDelay = `${delay}s`;
      observer.observe(el);
    });

    // ── TIMELINE & NAV PROGRESS ──
    const stepsContainer = document.querySelector('.steps-container') as HTMLElement;
    const navProgress = document.querySelector('.nav-scroll-progress') as HTMLElement;
    const stepRows = document.querySelectorAll('.step-row');
    
    const handleScroll = () => {
      // Nav Progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (navProgress) navProgress.style.width = scrolled + "%";

      // Timeline Active State
      stepRows.forEach(row => {
        const rect = row.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.6;
        if (rect.top < triggerPoint && rect.bottom > 200) {
          row.classList.add('active');
        } else {
          row.classList.remove('active');
        }
      });

      // Timeline Line
      if (stepsContainer) {
        const rect = stepsContainer.getBoundingClientRect();
        const windowH = window.innerHeight;
        if (rect.top < windowH && rect.bottom > 0) {
          const progress = (windowH - rect.top) / (rect.height + windowH * 0.4);
          const tHeight = Math.min(100, Math.max(0, progress * 100));
          const styleId = 'timeline-style';
          let style = document.getElementById(styleId);
          if (!style) {
            style = document.createElement('style');
            style.id = styleId;
            document.head.appendChild(style);
          }
          style.innerHTML = `.steps-container::before { height: ${tHeight}% !important; }`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // ── CLICK RIPPLE ──
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.className = 'click-ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      
      ripple.animate([
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 0.8 },
        { transform: 'translate(-50%, -50%) scale(2)', opacity: 0 }
      ], { duration: 800, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' });
      
      setTimeout(() => ripple.remove(), 800);
    };
    window.addEventListener('click', handleClick);

    // ── MAGNETIC BUTTONS ──
    interactiveElements.forEach(btn => {
      const moveBtn = (e: any) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        (btn as HTMLElement).style.transform = `translate(${x * 0.25}px, ${y * 0.35}px) scale(1.05)`;
      };
      
      const resetBtn = () => {
        (btn as HTMLElement).style.transform = '';
      };
      
      btn.addEventListener('mousemove', moveBtn);
      btn.addEventListener('mouseleave', resetBtn);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
      btn?.removeEventListener('click', toggleTheme);
    };

  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
      <div ref={glowRef} className="cursor-glow"></div>
    </>
  );
}
