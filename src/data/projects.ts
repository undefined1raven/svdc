import type { Component, ComponentProps } from 'svelte';
import CodeBracketDeco from '../routes/deco/CodeBracketDeco.svelte';
import ArcV1Logo from '../routes/deco/ArcV1Logo.svelte';
import ArcV2Logo from '../routes/deco/arcV2Logo.svelte';
import EagleLogo from '../routes/deco/EagleLogo.svelte';
import LifeWireLogo from '../routes/deco/LifeWireLogo.svelte';
import GallekLogo from '../routes/deco/GallekLogo.svelte';
import RingRelayDeco from '../routes/deco/RingRelayDeco.svelte';
import DronebuzzLogo from '../routes/deco/DronebuzzLogo.svelte';

interface IProject {
	name: string;
	description: string;
	logo: Component;
	logoProps: ComponentProps<any>;
	longDescription?: string;
	sourceCode: null | string;
	startDate: string;
	endDate: null | string;
	labels: string[];
	status:
		| { label: string; color: string; textColor: string }
		| { label: string; color: string; textColor: string }
		| { label: string; color: string; textColor: string };
	documentationLink: null | string;
	techStack: {
		type: string;
		description: string;
		tech: { logoUrl: string | null; name: string; url: string | null }[];
	}[];
	liveDeployment: null | string;
}

function getProjects(): IProject[] {
	const underDev = { label: 'Under Development', color: 'purple', textColor: 'purpleText' };
	const concluded = { label: 'Concluded', color: 'green', textColor: 'greenText' };
	const activeMaintanance = {
		label: 'Active Maintenance',
		color: 'deepBlue',
		textColor: 'deepBlueText'
	};

	return [
		{
			name: 'Arc V1',
			description: `I built the first version of Arc trying to get visibility into how I'm spending all of my time. It soon grew to something much more capable with features like day planning, a personal diary, and in-depth stats about all the data collected over time. To protect the data, everything is E2E encrypted by using the Subtle Crypto API.`,
			logo: ArcV1Logo,
			logoProps: { classNames: 'w-12 h-12 rounded-full' },
			startDate: '2021-01-01',
			endDate: null,
			status: activeMaintanance,
			labels: [
				'Svelte',
				'Cryptography',
				'MySQL',
				'Disfy',
				'Firebase RTDB',
				'Key Based Auth',
				'Serverless Rest API',
				'& more'
			],
			sourceCode: 'https://github.com/undefined1raven/arc',
			documentationLink: 'x',
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment: 'https://ankaryn.online'
		},
		{
			name: 'Arc V2',
			description: `After using the first version of Arc everyday for around 7 months, I realized the potential of a native application that would adhere to the same principles as the first version. The entire UI and UX is redesigned for an even better experience. Significant architectural changes have also been made to improve performance.`,
			logo: ArcV2Logo,
			logoProps: { classNames: 'w-12 h-12 rounded-full' },
			startDate: '2021-01-01',
			endDate: null,
			status: underDev,
			labels: [
				'React Native',
				'TypeScript',
				'Disfy',
				'SQLite',
				'Serverless API',
				'Expo',
				'Firebase RTDB',
				'Cryptography'
			],
			sourceCode: 'https://github.com/undefined1raven/arc_v2',
			documentationLink: null,
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment:
				'https://drive.google.com/file/d/1B4Iwmg0uuGwPFZ9khcBZ5l2iO9E8PfjY/view?usp=sharing'
		},
		{
			name: 'Eagle',
			description: `Project Eagle is my on-going effort of building an UAV quad that can be controlled remotely since the UAV is connected to the cellular network. I'm using what I learned from the last test flight to refine the hardware and flight control software. The end goal is to have the ability to perform fully autonomous missions.`,
			logo: EagleLogo,
			logoProps: { classNames: 'w-12 h-12 rounded-full' },
			startDate: '2021-01-01',
			endDate: null,
			status: underDev,
			labels: [
				'Svelte',
				'Javascript',
				'MQTT',
				'Firebase RTDB',
				'PCB Design',
				'C++',
				'Hardware integration'
			],
			sourceCode: '',
			documentationLink: 'x',
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment: ''
		},
		{
			name: 'LifeWire',
			description:
				'LifeWire was a startup I was working on toghether with a friend I made trought the YC co-founder matching platform. The goal was to create a simulated AI powered workspace environment that was aimed at university students to help them experience a variety of work environments and to help them find the best fit for them.',
			logo: LifeWireLogo,
			logoProps: { classNames: 'w-12 h-12 rounded-full' },
			startDate: '2021-01-01',
			endDate: null,
			status: concluded,
			labels: [
				'Svelte',
				'Javascript',
				'LLM prompting',
				'LLM Function Calling',
				'MySQL',
				'Firebase RTDB',
				'Disfy'
			],
			sourceCode: '',
			documentationLink: '',
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment: ''
		},
		{
			name: 'Gallek',
			description:
				'Gallek was inspired by the virtual photography collection made by one of my favorite designers - Ash Thorp. I wanted something similar that me and my friends could use to share our favorite photos and to create a common gallery with them. The web app uses passkeys to create new accounts and to authenticate for a secure passowrd-free experience.',
			logo: GallekLogo,
			logoProps: { classNames: 'w-12 h-12' },
			startDate: '2021-01-01',
			endDate: null,
			labels: ['Passkeys', 'Svelte', 'Javascript', 'Firebase RTDB', 'Supabase', 'Disfy'],
			sourceCode: 'https://github.com/undefined1raven/gallek',
			documentationLink: '',
			status: activeMaintanance,
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment: 'https://gallek.pics/'
		},
		{
			name: 'Ring Relay',
			description:
				'The Ring Relay is an end-to-end encrypted messaging app that I built to learn more about how cryptography can be used to secure real-world applications. The app uses the Subtle Crypto API to handle the public key pairs used at the core of the app. It also has features like security logs and notifying users when the public key of their contact changes.',
			logo: RingRelayDeco,
			logoProps: { classNames: 'w-12 h-12 rounded-full' },
			startDate: '2021-01-01',
			endDate: null,
			status: concluded,
			labels: ['React', 'Javascript', 'Cryptography', 'Firebase RTDB', 'MySQL'],
			sourceCode: 'https://github.com/undefined1raven/Ring-Relay',
			documentationLink:
				'https://github.com/undefined1raven/Ring-Relay/blob/fe790f5f916ef166e50f2ca2855b71fec96cd78b/docs/Ring-Relay%20Documentation.pdf/?raw=true',
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment: ''
		},
		{
			name: 'Dronebuzz',
			description: `Dronebuzz is a mobile game where you're a controlling a drone and you have to survive as long as possible enemy drones while completing configurable objectives. The web app is using a custom map made with MapTiles.`,
			logo: DronebuzzLogo,
			logoProps: { classNames: 'w-12 h-12 rounded-full' },
			startDate: '2021-01-01',
			endDate: null,
			status: concluded,
			labels: ['Leaflet', 'Svelte', 'Javascript', 'MapTiler'],
			sourceCode: 'https://github.com/undefined1raven/DroneBuzz',
			documentationLink: '',
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment: 'https://dronebuzz.vercel.app/'
		}
	];
}

export { getProjects };
export type { IProject };
