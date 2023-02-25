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
		<h1 bind:this={header_heading}>The <span>Magnificient</span> Seven</h1>
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
