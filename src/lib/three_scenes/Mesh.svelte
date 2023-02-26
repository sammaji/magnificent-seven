<script lang="ts">
	import { Group, Mesh } from '@threlte/core';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { MeshStandardMaterial, SphereGeometry, TextureLoader } from 'three';

	/* Object Properties */
	let SCALE = 1;
	let OBJ_SCALE = spring(SCALE);
	const MIN_CULLING_DIST = 0.01;
	const OBJECT_SEG_COUNT = 32;

	const textureLoader = new TextureLoader();
	let earthColorMap = textureLoader.load('/earth_base_color_min.jpg');
	let earthSpecMap = textureLoader.load('/earth_spec.jpg');
	let cloudsColorMap = textureLoader.load('/cloud_base_color_min.jpg');

	const loadHighResTextures = async () => {
		earthColorMap = textureLoader.load('/earth_base_color.jpg');
		cloudsColorMap = textureLoader.load('/cloud_base_color.jpg');
	};

	function zoomIn() {
		$OBJ_SCALE = 1.05;
	}
	function zoomOut() {
		$OBJ_SCALE = 1;
	}

	onMount(() => {
		loadHighResTextures();
	});

	export let meshRadius: number;
</script>

<Group scale={$OBJ_SCALE}>
	<Mesh
		position={{ y: 0.5 }}
		geometry={new SphereGeometry(meshRadius, OBJECT_SEG_COUNT, OBJECT_SEG_COUNT)}
		material={new MeshStandardMaterial({
			fog: true,
			aoMap: earthSpecMap,
			map: earthColorMap,
			aoMapIntensity: 0.25,
			roughnessMap: earthSpecMap
		})}
	/>
	<Mesh
		interactive
		on:pointerenter={zoomIn}
		on:pointerleave={zoomOut}
		position={{ y: 0.5 }}
		geometry={new SphereGeometry(meshRadius + MIN_CULLING_DIST, OBJECT_SEG_COUNT, OBJECT_SEG_COUNT)}
		material={new MeshStandardMaterial({
			roughness: 1,
			transparent: true,
			alphaMap: cloudsColorMap
		})}
	/>
</Group>
