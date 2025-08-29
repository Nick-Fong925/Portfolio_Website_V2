"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export function HeroSection() {

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

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent leading-tight">
            Aspiring Engineer
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
             Passionate about bridging the gap between technology and business by building scalable solutions that make
            a difference. I craft modern web applications with clean code and exceptional user
            experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">

              <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 w-full sm:w-auto"
            >
            View My Work
            </Button>

            <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="flex-1 sm:flex-none bg-transparent"
              >
                <a
                  href="https://github.com/Nick-Fong925"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">GitHub</span>
                  <span className="sm:hidden">Git</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="flex-1 sm:flex-none bg-transparent"
              >
                <a
                  href="https://www.linkedin.com/in/nicholas-fong-1425b8221/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">LinkedIn</span>
                  <span className="sm:hidden">In</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-accent" />
      </div>
    </section>
  );
}
}
