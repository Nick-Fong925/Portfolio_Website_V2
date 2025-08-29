import { Card } from "@/components/ui/card";
import { Code, Palette, Zap, Rocket } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 pt-32 bg-secondary/20 z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a fifth-year Business and Computer Science student at UBC
                who believes the best engineers are built through diverse
                experiences, not just code. Currently tackling data engineering
                challenges @ RBC, I've previously worn multiple hats, from QA
                automation engineer to software engineer @ Binggrae, each role
                adding new tools to my problem-solving arsenal.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Ready to bring fresh perspectives and hungry curiosity to your
                next challenge.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "AWS",
                  "Playwright",
                  "CI/CD",
                  "Java",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:bg-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/resources/headshot/nicholas_fong_headshot.webp"
                alt="Profile"
                className="rounded-lg shadow-2xl w-72 h-96 object-cover mx-auto"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center bg-card border-border group">
              <Code className="w-12 h-12 text-accent mx-auto mb-4 transform transition-all duration-200 group-hover:-translate-y-1 group-hover:scale-110" />
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-muted-foreground">
                I prioritize code clarity, comprehensive testing, and
                documentation that actually helps.
              </p>
            </Card>
            <Card className="p-6 text-center bg-card border-border group">
              <Rocket className="w-12 h-12 text-accent mx-auto mb-4 transform transition-all duration-200 group-hover:-translate-y-1 group-hover:scale-110" />
              <h3 className="text-xl font-semibold mb-2">Cross-Functional</h3>
              <p className="text-muted-foreground">
                I excel at translating technical complexity into business impact
                and turning vague requirements into solid technical
                specifications.
              </p>
            </Card>
            <Card className="p-6 text-center bg-card border-border group">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4 transform transition-all duration-200 group-hover:-translate-y-1 group-hover:scale-110" />
              <h3 className="text-xl font-semibold mb-2">
                Ship-First Mentality
              </h3>
              <p className="text-muted-foreground">
                I balance technical excellence with pragmatic delivery, knowing
                when to optimize and when to iterate.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
