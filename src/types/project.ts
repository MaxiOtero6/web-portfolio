export default interface Project {
	name: string;
	description: string;
	githubUrl?: string;
	stack: string[];
	repos?: Project[];
}
