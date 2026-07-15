"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { navigation, portfolioConfig } from "@/config/portfolio";
import { CommandPalette } from "@/components/command-palette";
import { motionTokens } from "@/config/motion";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const paletteButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setMenuOpen(false);
        setPaletteOpen(true);
      }
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === "Tab" && menuOpen) {
        const focusable = Array.from(headerRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [])
          .filter((element) => element.offsetParent !== null);
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const background = [document.querySelector("main"), document.querySelector("footer")]
      .filter(Boolean) as HTMLElement[];
    document.body.style.overflow = "hidden";
    background.forEach((element) => { element.inert = true; });
    requestAnimationFrame(() => headerRef.current?.querySelector<HTMLElement>("#mobile-navigation a[href]")?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((element) => { element.inert = false; });
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header ref={headerRef} className={`site-header ${scrolled || menuOpen ? "site-header-scrolled" : ""}`}>
        <div className="header-inner">
          <Link href="/" className="wordmark" aria-label={`${portfolioConfig.shortName}, home`}>
            <span className="wordmark-mark">LYR</span>
            <span>Yvan Ramirez</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    className="nav-indicator"
                    layoutId="primary-navigation-indicator"
                    transition={reduceMotion ? { duration: 0 } : motionTokens.spring.responsive}
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button ref={paletteButtonRef} className="command-trigger" onClick={() => { setMenuOpen(false); setPaletteOpen(true); }} aria-label="Open command palette">
              <Search size={16} aria-hidden="true" />
              <span>Navigate</span>
              <kbd>⌘ K</kbd>
            </button>
            <Link href="/projects" className="button button-small header-cta">Explore work</Link>
            <button
              ref={menuButtonRef}
              className="icon-button mobile-menu-button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-navigation"
              className="mobile-nav"
              aria-label="Mobile navigation"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : motionTokens.duration.fast }}
            >
              <div className="mobile-nav-inner">
                <span className="mobile-nav-label">Navigate</span>
                {navigation.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    <span>{item.label}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
                <p>{portfolioConfig.headline}</p>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <CommandPalette
        open={paletteOpen}
        onClose={() => {
          setPaletteOpen(false);
          requestAnimationFrame(() => paletteButtonRef.current?.focus());
        }}
        onNavigate={(href) => { setPaletteOpen(false); router.push(href); }}
      />
    </>
  );
}
