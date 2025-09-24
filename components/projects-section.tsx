import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
	{
		title: "Narrify",
		description:
			"Narrify is an automated platform that scrapes compelling Reddit stories and transforms them into ready-to-upload YouTube Shorts with AI-generated voiceovers and background visuals.",
		image: "/resources/project_logo/reddit.png",
		tech: ["Next.js", "FastAPI", "SQLite", "OpenAI TTS API", "TypeScript"],
		github: "https://github.com/Nick-Fong925/Narrify",
	},
	{
		title: "Daily Boost",
		description:
			"An innovative mobile app designed to motivate individuals to embrace an active and healthy lifestyle by leveraging the power of social media and community building.",
		image: "/resources/project_logo/DailyBoost.png",
		tech: ["React.js", "TailwindCSS", "Express.js", "MongoDB"],
		github: "https://github.com/myung03/produHacks",
	},
	{
		title: "FitFlow AI",
		description:
			"Created a fitness app using React and Go featuring health tracking, pose-based coaching, and OpenAI API integration for personalized recipes, improving user experience and promoting holistic wellness",
		image: "/resources/project_logo/fitflow.png",
		tech: [
			"React",
			"GoLang",
			"PostgreSQL",
			"Docker",
			"OpenAI API",
			"MediaPipe",
		],
		github: "https://github.com/Nick-Fong925/FitFlowAI",
	},
	{
		title: "Cypher",
		description:
			"An AI analysis model of UFC betting lines, automatically scraping data from various sources and using machine learning to predict fight outcomes while being automatically updated using Airflow.",
		image: "/resources/project_logo/ufc.png",
		tech: ["Next.js", "Pytorch", "Airflow", "AWS S3", "Django"],
		github: "https://github.com/Nick-Fong925/Cipher",
	},
];

export function ProjectsSection() {
	return (
		<section id="projects" className="py-20">
			<div className="container mx-auto px-4 flex flex-col items-center">
				<div className="max-w-6xl w-full mx-auto">
					<h2 className="text-4xl font-bold text-center mb-12">
						Featured Projects
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
						{projects.map((project, index) => (
							<Card
								key={index}
								className="overflow-hidden bg-card border-border group hover:border-accent/50 transition-colors mx-auto w-full max-w-md"
							>
								<div className="relative">
									<img
										src={project.image || "/placeholder.svg"}
										alt={project.title}
										className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2">
										{project.title}
									</h3>
									<p className="text-muted-foreground mb-4 text-sm">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.tech.map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 bg-accent/20 text-accent rounded text-xs"
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex gap-2">
										<Button variant="outline" size="sm" asChild>
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Github className="w-4 h-4 mr-2" />
												Code
											</a>
										</Button>
										<Button
											size="sm"
											className="bg-accent hover:bg-accent/90"
											asChild
										></Button>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
