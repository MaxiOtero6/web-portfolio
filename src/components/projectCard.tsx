"use client";

import Project from "@/types/project";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import React from "react";
import { StackToImage } from "@/utils/stackToImage";
import githubLogo from "@/assets/images/github.png";
import styles from "@/styles/stackImage.module.css";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	const [expanded, setExpanded] = useState<boolean>(false);

	return (
		<div className="h-2/6 w-full bg-[rgb(78,76,76)] border-white border-[0.5px] rounded-md flex flex-col">
			<div>
				<div
					className={`p-2 flex flex-row place-content-between text-center items-center cursor-pointer ${
						expanded && "shadow-xl"
					}`}
					onClick={() => setExpanded(!expanded)}>
					<div className={"ml-2 mr-2 flex items-center"}>
						<a
							onClick={(e) => e.stopPropagation()}
							href={project.githubUrl}
							target="_blank"
							rel="noreferrer">
							<Image
								className="h-[15px] w-[15px] lg:h-[40px] lg:w-[40px] md:h-[30px] md:w-[30px] sm:h-[20px] sm:w-[20px]"
								src={githubLogo}
								alt="GitHub repository"
							/>
						</a>
						<label className="ml-2 cursor-pointer font-bold lg:text-xl md:text-lg sm:text-md xs:text-sm overflow-hidden whitespace-nowrap text-ellipsis">
							{project.name}
						</label>
						<div
							className={`flex flex-row ml-2 mt-2 mb-2 space-x-4 ${styles.stack}`}>
							{project.stack.map((tech) => StackToImage(tech))}
						</div>
					</div>

					{expanded ? <RemoveIcon /> : <AddIcon />}
				</div>
			</div>
			{expanded && (
				<div className="m-2 flex flex-row">
					<div>
						<label className="text-justify text-xs lg:text-lg md:text-md sm:text-sm">
							{project.description}
						</label>
						{project.repos && (
							<div className="flex place-items-center flex-col space-y-6 mt-6 w-full">
								{project.repos.map((repo) => (
									<ProjectCard
										key={repo.githubUrl}
										project={repo}
									/>
								))}
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
