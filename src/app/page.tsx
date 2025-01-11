import projects from "@/data/projects";
import ProjectCard from "@/components/projectCard";
import Image from "next/image";
import linkedinLogo from "@/assets/images/linkedin.png";
import githubLogo from "@/assets/images/github.png";

export default function Home() {
	const linkedinLink =
		"https://www.linkedin.com/in/maximiliano-nicolas-otero-silvera-b223201b2";

	const githubLink = "https://github.com/MaxiOtero6";

	const aboutMe = `
		Hi!, I'm Maximiliano Nicolas Otero Silvera a software engineer from Argentina.
		I'm currently studying software engineering at Universidad de Buenos Aires (UBA).
		Here I list some of the projects i have worked on, feel free to check them out.
	`;

	return (
		<div className="flex place-items-center flex-col pt-6 pb-6">
			<div className="w-full bg-[rgb(159,159,159)] bg-opacity-50 p-6 rounded-md flex flex-col">
				<div className="flex flex-row place-items-center space-x-3">
					<label className="text-4xl font-bold">
						Maximiliano Nicolas Otero Silvera
					</label>
					<a href={linkedinLink}>
						<Image
							src={linkedinLogo}
							alt="LinkedIn"
							width={40}
							height={40}
						/>
					</a>
					<a href={githubLink}>
						<Image
							src={githubLogo}
							alt="LinkedIn"
							width={40}
							height={40}
						/>
					</a>
				</div>

				<div className="w-11/12 place-self-center p-2">
					<label className="text-lg text-justify font-normal">
						{aboutMe}
					</label>
				</div>
			</div>

			<div className="w-4/6 space-y-6 pt-6">
				{projects.map((p) => (
					<ProjectCard key={p.githubUrl} project={p} />
				))}
			</div>
		</div>
	);
}
