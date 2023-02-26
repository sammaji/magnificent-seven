<script lang="ts">
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import Content from '@lib/content_page/Content.svelte';
	import { goto } from '$app/navigation';
	import type { IndexedContentType } from '@data/content.data';
	import { ROUTE_DATA } from '@data/routes.data';

	export let data: IndexedContentType;

	let container: HTMLElement;
	let images: HTMLDivElement[] = [];

	function animateImages() {
		gsap.registerPlugin(ScrollTrigger);
		const imagesTimeline = gsap.timeline({
			defaults: {
				ease: 'none'
			},
			scrollTrigger: {
				trigger: container,
				pin: true,
				start: 'top top',
				end: `+=${images.length * 100}%`,
				scrub: true
			}
		});
		images.forEach((image, index) => {
			if (index) {
				imagesTimeline.to(image, {
					clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
				});
			}
		});
	}

	function redirectToHome() {
		goto('/', { replaceState: true, invalidateAll: true, noScroll: true });
	}

	function redirectToNextPage() {
		if (data.index >= 0 && data.index <= 5) {
			goto(ROUTE_DATA[data.index + 1].route, {
				replaceState: true,
				invalidateAll: true,
				noScroll: false
			});
		} else if (data.index === 6) {
			goto(ROUTE_DATA[0].route, {
				replaceState: true,
				invalidateAll: true,
				noScroll: false
			});
		}
	}

	onMount(() => {
		animateImages();
	});
</script>

<main>
	<article bind:this={container}>
		<section>
			<div bind:this={images[0]} style={`background-image: url(${data.pageOne.url});`}>
				<Content {data} displayPage={1} />
			</div>
		</section>
		<section>
			<div
				bind:this={images[1]}
			>
				<Content {data} displayPage={2} />
			</div>
		</section>
		<!-- <section>
			<div bind:this={images[2]}>
				<Content data={data.pageThree} />
			</div>
		</section> -->
	</article>
	<div class="spacer">
		<h2 on:click={redirectToHome}>👈 <span>Home</span></h2>
		<h2 on:click={redirectToNextPage}><span>Next</span> 👉</h2>
	</div>
</main>

<style>
	article {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		position: relative;
	}

	article > section {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100vh;
	}

	section:first-child > div {
		clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
	}

	section > div {
		width: 100%;
		height: 100%;
		clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
		background-size: cover;
		background-position: center;
	}

	section:nth-child(2) > div {
		background-color: #03041c;
		color: white;
	}

	.spacer {
		height: 100vh;
		width: 100%;
		background: #03041c;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.spacer h2,
	.spacer h2 span {
		font-size: 4rem;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-weight: 900;
		color: white;
	}

	.spacer h2:hover span {
		background: -webkit-linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
