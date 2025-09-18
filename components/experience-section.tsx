"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, X } from "lucide-react";

const experiences = [
	{
		title: "Data Engineer Co-op",
		company: "Royal Bank of Canada - Global Asset Management",
		location: "Vancouver, BC",
		period: "September 2025 - Present",
		description:
			"Contributing to the data insights team by developing data pipelines and architecting scalable data infrastructure using modern big data technologies.",
		achievements: [
			"Developed a comprehensive ETL testing library with synthetic data generation capabilities, incorporating Trino and S3 mocking for reliable test environments",
			"Engineered a containerized test harness solution using Docker to ensure scalability and consistent testing across different environments",
			"Implemented adaptable functional testing framework that reduced ETL testing time by 65% and improved test coverage by 40%",
			"Created reusable synthetic data generation patterns for complex financial datasets, enabling thorough testing of edge cases",
			"Eliminated the need for production deployments to test ETL jobs, enabling functional testing in isolated environments and saving nearly 2 hours per test cycle",
		],
		technologies: [
			"Kubernetes",
			"PySpark",
			"Trino",
			"Apache Hive",
			"Python",
			"Docker",
		],
		responsibilities: [
			"Design and maintain an adaptable ETL test harness library for functional testing of data pipelines",
			"Enable isolated, production-free ETL job testing to improve reliability and reduce test cycle time",
			"Develop synthetic data generation and mocking strategies for Trino and S3 to support robust test scenarios",
			"Engineer scalable, containerized testing environments using Docker for consistent results across teams",
			"Collaborate with investment and engineering teams to align data testing solutions with business requirements",
		],
	},
	{
		title: "QA Automation Engineer Co-op",
		company: "Royal Bank of Canada - Global Asset Management",
		location: "Vancouver, BC",
		period: "January 2025 - August 2025",
		description:
			"Led test automation initiatives and framework development to enhance software quality and team productivity across multiple technology stacks.",
		achievements: [
			"Accelerated regression testing by 87% through architecting parallel Playwright framework with Docker orchestration and Allure reporting, replacing legacy sequential framework",
			"Democratized test automation through keyword-driven framework POC, empowering non-technical QA team members to build automated tests using natural language keywords, increasing team velocity by 250%",
			"Improved system reliability and cut manual intervention by 60% by migrating legacy test scripts to Apache Airflow to automate backend workflows",
			"Reduced testing cycles by 70% and increased defect detection by 45% by engineering end-to-end Python/Selenium automation suites across database, API, and UI layers",
		],
		technologies: [
			"Python",
			"Selenium",
			"Playwright",
			"Docker",
			"Apache Airflow",
			"Allure",
		],
		responsibilities: [
			"Architect and implement automated testing frameworks using Python, Selenium, and Playwright",
			"Design and develop end-to-end testing solutions across database, API, and UI layers",
			"Migrate legacy systems to modern automation platforms and workflows",
			"Collaborate with QA teams to improve testing processes and methodologies",
			"Build and maintain CI/CD pipeline integrations with automated testing suites",
		],
	},
	{
		title: "Software Engineer Intern",
		company: "Binggrae",
		location: "Vancouver, BC",
		period: "June 2023 - January 2024",
		description:
			"Developed full-stack solutions and analytics dashboards to optimize business operations while implementing security best practices and performance enhancements.",
		achievements: [
			"Achieved cost saving of 20% by implementing an analytics dashboard to inform optimization strategies across departments using Socket.io, Recharts, and Node.js",
			"Addressed security concerns by encrypting and salting user information for a digital marketing campaign, ensuring robust data protection and compliance with privacy standards",
			"Improved initial page load times by 30% by implementing lazy loading and code-splitting",
			"Integrated SEO best practices into the website's structure, contributing to improved search engine visibility and a 40% increase in organic traffic",
		],
		technologies: [
			"Socket.io",
			"Recharts",
			"Node.js",
			"JavaScript",
			"React",
		],
		responsibilities: [
			"Develop analytics dashboards and real-time data visualization solutions",
			"Implement security measures including data encryption and user authentication",
			"Optimize website performance through code-splitting and lazy loading techniques",
			"Integrate SEO best practices to improve search engine visibility",
			"Collaborate with cross-departmental teams to identify optimization opportunities",
		],
	},
	{
		title: "Student Director of Technology",
		company: "University of British Columbia - Campus Ambassador Program",
		location: "Vancouver, BC",
		period: "May 2023 - September 2024",
		description:
			"Led technology initiatives and development projects for the Campus Ambassador Program, focusing on payment system integration and team efficiency optimization.",
		achievements: [
			"Integrated Stripe payment processing to eliminate cash payments and e-transfers, ensuring secure transactions and enhancing both security and ease of use for users",
			"Achieved weekly time savings of 10 engineering hours by employing project management tools including Jira to strategically organize objectives and oversee sprint cycles",
			"Reduced onboarding time by 50% by creating comprehensive documentation and training resources, enabling faster integration into ongoing projects",
		],
		technologies: [
			"React",
			"Node.js",
			"Stripe API",
			"JavaScript",
			"Jira",
		],
		responsibilities: [
			"Lead technology strategy and implementation for campus programs",
			"Integrate secure payment processing systems and APIs",
			"Manage development projects using agile methodologies and sprint cycles",
			"Create comprehensive documentation and training materials",
			"Coordinate with cross-functional teams to deliver technical solutions",
		],
	},
];

export function ExperienceSection() {
	const [selectedExperience, setSelectedExperience] = useState<
		(typeof experiences)[0] | null
	>(null);

	return (
		<section id="experience" className="py-20 bg-secondary/20 relative z-10">
			<div className="container mx-auto px-2 sm:px-4 md:px-6 flex flex-col items-center">
				<div className="w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
						Work Experience
					</h2>
					<div className="grid gap-6 sm:gap-8 justify-center">
						{experiences.map((exp, index) => (
							<Card
								key={index}
								className="p-4 sm:p-6 bg-card border-border cursor-pointer hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 mx-auto w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl"
								onClick={() => setSelectedExperience(exp)}
							>
								<div className="flex flex-col sm:flex-row sm:items-center gap-4">
									<div className="flex-1 min-w-0">
										<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
											<div className="min-w-0">
												<h3 className="text-lg sm:text-xl font-semibold text-accent truncate">
													{exp.title}
												</h3>
												<p className="text-base sm:text-lg font-medium truncate">
													{exp.company}
												</p>
											</div>
											<div className="flex flex-col sm:items-end text-sm text-muted-foreground mt-2 sm:mt-0 flex-shrink-0">
												<div className="flex items-center gap-1">
													<Calendar className="w-4 h-4" />
													{exp.period}
												</div>
												<div className="flex items-center gap-1 mt-1">
													<MapPin className="w-4 h-4" />
													{exp.location}
												</div>
											</div>
										</div>
										<p className="text-muted-foreground text-sm sm:text-base line-clamp-2">
											{exp.description}
										</p>
										<p className="text-accent text-sm mt-2 font-medium">
											Click to view details →
										</p>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</div>

			{selectedExperience && (
				<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out opacity-100">
					<div className="bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-in-out scale-100 opacity-100">
						<div className="sticky top-0 bg-card border-b border-border p-4 sm:p-6 flex items-center justify-between">
							<div className="flex items-center gap-4">
								<div>
									<h3 className="text-xl sm:text-2xl font-bold text-accent">
										{selectedExperience.title}
									</h3>
									<p className="text-lg font-medium">
										{selectedExperience.company}
									</p>
								</div>
							</div>
							<button
								onClick={() => setSelectedExperience(null)}
								className="p-2 hover:bg-secondary rounded-lg transition-colors"
							>
								<X className="w-5 h-5" />
							</button>
						</div>

						<div className="p-4 sm:p-6 space-y-6">
							<div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
								<div className="flex items-center gap-1">
									<Calendar className="w-4 h-4" />
									{selectedExperience.period}
								</div>
								<div className="flex items-center gap-1">
									<MapPin className="w-4 h-4" />
									{selectedExperience.location}
								</div>
							</div>

							<div>
								<h4 className="text-lg font-semibold mb-3">Overview</h4>
								<p className="text-muted-foreground leading-relaxed">
									{selectedExperience.description}
								</p>
							</div>

							<div>
								<h4 className="text-lg font-semibold mb-3">
									Key Responsibilities
								</h4>
								<ul className="space-y-2">
									{selectedExperience.responsibilities.map(
										(responsibility, i) => (
											<li key={i} className="flex items-start gap-2 text-sm">
												<span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
												{responsibility}
											</li>
										),
									)}
								</ul>
							</div>

							<div>
								<h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
								<ul className="space-y-2">
									{selectedExperience.achievements.map((achievement, i) => (
										<li key={i} className="flex items-start gap-2 text-sm">
											<span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
											{achievement}
										</li>
									))}
								</ul>
							</div>

							<div>
								<h4 className="text-lg font-semibold mb-3">
									Technologies Used
								</h4>
								<div className="flex flex-wrap gap-2">
									{selectedExperience.technologies.map((tech, i) => (
										<span
											key={i}
											className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
