<script lang="ts">
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import Content from '@lib/content_page/Content.svelte';

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

	onMount(() => {
		animateImages();
	});

	export let data: any;
</script>

<article bind:this={container}>
	<section>
		<div bind:this={images[0]}>
			<Content data={data.pageOne} />
		</div>
	</section>
	<section>
		<div bind:this={images[1]}>
			<Content data={data.pageTwo} />
		</div>
	</section>
	<section>
		<div bind:this={images[2]}>
			<Content data={data.pageThree} />
		</div>
	</section>
</article>
<div class="spacer" />

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

	section:nth-child(1) > div {
		background-image: url(https://picsum.photos/1920/1080);
	}
	section:nth-child(2) > div {
		background-color: rebeccapurple;
	}
	section:nth-child(3) > div {
		background-image: url(https://picsum.photos/1920/1082);
	}

	.spacer {
		height: 100vh;
		width: 100%;
		background: #03041c;
	}
</style>
