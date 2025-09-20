"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = elementPosition - startPosition;
    const duration = 1500; // Increase this value for slower scroll (in milliseconds)
    let start: number;

    const animateScroll = (currentTime: number) => {
      if (!start) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function for smoother animation
      const easeInOutCubic = (progress: number) => {
        return progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      };

      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
    setIsMobileMenuOpen(false);
  };
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full px-2 sm:px-4 md:px-6 py-3 sm:py-4 max-w-full">
        <div className="flex items-center justify-between w-full max-w-full overflow-x-auto">
          <div className="text-lg sm:text-xl font-bold whitespace-nowrap">
            Nicholas Fong
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 sm:space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors font-bold"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-foreground hover:text-accent transition-colors font-bold"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-accent transition-colors font-bold"
            >
              Projects
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground hidden sm:inline-flex px-3 sm:px-5 text-sm sm:text-base"
            >
              Get In Touch
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground sm:hidden px-3 text-sm"
            >
              Contact
            </Button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-background/95 z-[100] flex flex-col items-center pt-24 px-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 bg-secondary rounded-lg transition-colors z-[101]"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col space-y-6 w-full max-w-xs mx-auto">
              <button
                onClick={() => scrollToSection("about")}
                className="w-full text-center text-lg font-bold text-foreground hover:text-accent transition-colors py-3 rounded"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="w-full text-center text-lg font-bold text-foreground hover:text-accent transition-colors py-3 rounded"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full text-center text-lg font-bold text-foreground hover:text-accent transition-colors py-3 rounded"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full text-center text-lg font-bold text-foreground hover:text-accent transition-colors py-3 rounded"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
