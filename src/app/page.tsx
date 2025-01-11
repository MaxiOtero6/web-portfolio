import Image from "next/image";
import projects from "@/data/projects";
import ProjectCard from "@/components/projectCard";

export default function Home() {
	return (
		<div className="flex place-items-center flex-col pt-6 pb-6">
			<div className="w-4/6 space-y-6">
				{projects.map((p) => (
					<ProjectCard key={p.githubUrl} project={p} />
				))}
			</div>
		</div>
	);
}
