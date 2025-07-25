import Project from "@/types/project";

const projects: Project[] = [
	{
		name: "Distributed movies pipeline",
		description: `
			This project consists of a movie pipeline that ingests, processes, and analyzes movie data from kaggle dataset "The Movies Dataset".\n
			It simulates a fictional scenario in which we build a distributed system to process the data.\n
			This distributed system must be scalable, highly available, fault-tolerant and serve multiple clients simultaneously.\n
			It process five fixed queries and return the results to the client (the client must periodically poll the server for results until all are obtained).
		`,
		stack: ["Go", "Python", "Protobuf", "RabbitMQ", "Docker"],
		githubUrl: "https://github.com/MaxiOtero6/TP-Distribuidos",
	},
	{
		name: "TwitSnap - X (Twitter) clone",
		description: `
            This project is a clone of X (Twitter) with a mobile application and a backoffice that consume a microservices architecture.
            Below i list the repositories i worked on, to see the whole project click on the Github icon!
        `,

		stack: ["React", "NodeJS", "Python", "Docker"],
		githubUrl: "https://github.com/Twit-Snap",
		repos: [
			{
				name: "Documentation",
				description: `
                    User manual and services explained in more depth 
                `,

				stack: [],
				githubUrl:
					"https://twit-snap.github.io/twitsnap-documentation/",
			},
			{
				name: "Mobile app",
				description: `
                    Mobile application developed using React native with Expo, designed to run on an Android system.
                `,

				stack: ["React", "Expo", "Typescript"],
				githubUrl: "https://github.com/Twit-Snap/twitsnap",
			},
			{
				name: "BackOffice",
				description: `
                    A backoffice to manage users and their twits.
                `,

				stack: ["React", "NextJS", "Typescript"],
				githubUrl: "https://github.com/Twit-Snap/twitsnap-backoffice",
			},
			{
				name: "Users service",
				description: `
                    This service authenticates and manages users. 
                `,

				stack: ["NodeJS", "Express", "Typescript", "PostgreSQL"],
				githubUrl: "https://github.com/Twit-Snap/users_service",
			},
			{
				name: "Tweets / Posts (Twits) service",
				description: `
                    This service manage twits and their interactions such as likes, retwits, bookmarks, etc.
                `,

				stack: ["NodeJS", "Express", "Typescript", "MongoDB"],
				githubUrl: "https://github.com/Twit-Snap/twits_service_public",
			},
			{
				name: "Message service",
				description: `
                    This service allows an authenticated user to send a direct message to another user, saving the chats and messages to a Firebase real-time database.
                `,

				stack: ["Python", "FastAPI"],
				githubUrl: "https://github.com/Twit-Snap/message-service",
			},
		],
	},
	{
		name: "Distributed Uber-like app with high concurrency",
		description: `
            This project is a very simplified version of Uber in Rust using Actix for Actors support and Tokio for asynchronous functionality support with a main focus on leader selection, deadlock avoidance, and synchronization.
            `,

		stack: ["Rust"],
		githubUrl: "https://github.com/MaxiOtero6/2024-2c-tp2-concurrente",
	},
	{
		name: "Worms Armageddon",
		description: `
            This project is a replica of Worms Armageddon in C++11 using SDLpp, QT and Box2D libraries, designed to run on Linux / Unix systems with a main focus on TCP sockets and threads. 
            `,

		stack: ["Cpp"],
		githubUrl: "https://github.com/MaxiOtero6/TPG-Taller-Worms2D",
	},
	{
		name: "Turn-based tower defense",
		description: `
            This project is a turn-based tower defense game in Java using JavaFX library with a main focus on OOP, MVC and design patterns.
            Both the code and documentation are in Spanish.
            `,

		stack: ["Java"],
		githubUrl: "https://github.com/MaxiOtero6/algo3_tp2_towerDefense",
	},
];

export default projects;
