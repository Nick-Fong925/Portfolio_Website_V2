"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        <div className="max-w-full sm:max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 break-words px-2">
            Get In Touch
          </h2>
          <div className="flex justify-center items-center">
            <Card className="p-4 sm:p-8 flex flex-col items-center justify-center bg-gradient-to-br from-accent/10 to-card border-accent/20 border-2 shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent text-center">
                Let&apos;s Connect!
              </h3>
              <p className="text-muted-foreground text-center mb-4 sm:mb-6 max-w-xs">
                I love meeting new people and collaborating on interesting
                projects. Feel free to reach out through any of the platforms
                below!
              </p>
              <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-6 justify-center">
                <a
                  href="mailto:nicholasfong1120@gmail.com"
                  aria-label="Email"
                  className="hover:scale-110 transition-transform"
                >
                  <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </a>
                <a
                  href="https://github.com/Nick-Fong925"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:scale-110 transition-transform"
                >
                  <Github className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nicholas-fong-1425b8221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </a>
              </div>
              <Button className="bg-accent hover:bg-accent/90 w-full text-base sm:text-lg py-2 sm:py-3" asChild>
                <a href="/resume/Nicholas_Fong_Resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
