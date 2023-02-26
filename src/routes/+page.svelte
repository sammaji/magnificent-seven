<script lang="ts">
	import { ROUTE_DATA } from './../data/routes.data';
	import Scene from '@lib/three_scenes/Scene.svelte';
	import gsap from 'gsap';

	let header: HTMLElement,
		header_heading: HTMLHeadElement,
		header_para: HTMLParagraphElement,
		header_btn: HTMLButtonElement;
	let main: HTMLElement, nav: HTMLElement, orderedList: HTMLElement;
	let listItems: HTMLElement[] = [];

	const toggleFullscreen = () => {
		const fullscreen_timeline = gsap.timeline({
			defaults: { x: '-200%', opacity: 1, duration: 0.4, ease: 'expo.out' }
		});

		fullscreen_timeline
			.to(header_heading, {})
			.to(header_para, {})
			.to(header_btn, {})
			.to([header_heading, header_para, header_btn], {
				display: 'none',
				duration: 1.6
			});
		gsap.to(header, {
			delay: 1.6,
			duration: 1,
			width: 0,
			padding: 0
		});
		gsap.to(main, { delay: 1.6, duration: 1, width: '100%' });

		gsap.to(nav, { delay: 1.6, duration: 0, display: 'flex' });
		gsap.to(orderedList, { delay: 2.6, duration: 0, display: 'flex' });
		gsap.from(nav, { delay: 1.6, duration: 1, xPercent: '200%' });

		const listTimeline = gsap.timeline({
			defaults: { xPercent: 200, duration: 0.2, opacity: 0 }
		});
		listTimeline.delay(2.6);
		listTimeline
			.from(listItems[0], {})
			.from(listItems[1], {})
			.from(listItems[2], {})
			.from(listItems[3], {})
			.from(listItems[4], {})
			.from(listItems[5], {})
			.from(listItems[6], {});
	};
</script>

<main bind:this={main}>
	<header bind:this={header} class="con-header">
		<h1 bind:this={header_heading}>The <span>Magnificent</span> Seven</h1>
		<p bind:this={header_para}>
			Explore the world's magnificent seven wonders, recognized for awe-inspiring design, scale, and
			technological sophistication - a testament to human ingenuity and the unrelenting pursuit of
			progress.
		</p>
		<button bind:this={header_btn} on:click={toggleFullscreen}><span>Explore</span></button>
	</header>
	<div class="con-canvas">
		<Scene />
	</div>
	<nav bind:this={nav}>
		<ol bind:this={orderedList}>
			{#each ROUTE_DATA as route_data}
				<li bind:this={listItems[route_data.index]}>
					<a href={route_data.route}>{route_data.title}</a>
				</li>
			{/each}
		</ol>
	</nav>
</main>

<style>
	* {
		/* --bgColor: #03041c; */
		--bgColor: linear-gradient(90deg, #03041c, #000);
	}
	main {
		/* background: var(--bgColor); */
		background-repeat: repeat;
		background-size: 600px;
		background-image: url("https://cdn.discordapp.com/attachments/1073240396467019796/1079288274536898600/image.png");
		overflow: hidden;
		display: flex;
	}
	.con-canvas {
		height: 100vh;
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	header {
		padding: 0 4rem;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
		width: 50%;
	}
	header > * {
		margin: 0.64rem 0;
		color: white;
	}
	header > h1 {
		font-size: 3rem;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		letter-spacing: 2px;
	}
	header > p {
		line-height: 2rem;
		font-size: 1.25rem;
		font-weight: 300;
		display: flex;
		justify-content: flex-end;
	}
	header > h1 span {
		font-weight: 900;
		font-size: 3rem;
		background: -webkit-linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	header > button {
		align-items: center;
		background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
		border: 0;
		border-radius: 0.25rem;
		box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
		box-sizing: border-box;
		color: #ffffff;
		display: flex;
		font-weight: bold;
		font-size: 2rem;
		justify-content: center;
		line-height: 0.77em;
		max-width: 100%;
		min-width: 200px;
		width: 35%;
		padding: 3px;
		margin-top: 1rem;
		text-decoration: none;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		white-space: nowrap;
		cursor: pointer;
	}
	button:active,
	header > button:hover {
		outline: 0;
	}
	header > button span {
		/* background-color: transparent; */
		background-color: #03041c;
		padding: 1rem 24px;
		border-radius: 6px;
		width: 100%;
		height: 100%;
		transition: 300ms;
	}
	header > button:hover span {
		background: none;
	}
	nav {
		display: none;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100vh;
	}
	nav ol {
		display: none;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
		width: 50%;
	}
	nav ol li {
		opacity: 1;
		display: list-item;
		list-style-position: inside;
		color: white;
		font-size: 1.2rem;
		font-family: 'poppins', sans-serif;
		text-decoration: none;
		letter-spacing: 2px;
		padding: 0.5rem 0;
	}
	nav a {
		color: white;
		font-size: 1.2rem;
		font-family: 'poppins', sans-serif;
		text-decoration: none;
		letter-spacing: 2px;
		/* font-weight: bold; */
	}
	nav a:hover {
		background: -webkit-linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	@media (min-width: 768px) {
		button {
			font-size: 24px;
			min-width: 224px;
		}
	}
</style>
