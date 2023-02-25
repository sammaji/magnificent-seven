<script lang="ts">
	import type * as THREE from 'three';
	import {
		AmbientLight,
		DirectionalLight,
		OrbitControls,
		PerspectiveCamera,
		type Position
	} from '@threlte/core';
	import { onMount } from 'svelte';

	/* VIEWPORT SETTINGS */
	const CAMERA_POSITION: Position = { x: 10, y: 10, z: 10 };
	const CAMERA_FIELD_OF_VIEW: number = 24;
	const IS_ZOOMING: boolean = false;
	const IS_PANNING: boolean = false;
	const ROTATION_SPEED: number = 1;

	/* LIGHTING SETTINGS */
	const AMBIENT_LIGHT_INTENSITY: number = 0.025;
	const DIRECTIONAL_INTENSITY: number = 1;

	/* BINDINGS */
	let perspectiveCamera: THREE.PerspectiveCamera;
	let directionalLight: THREE.DirectionalLight;

	export let hasOrbitControls: boolean;
	export let hasDynamicLighting: boolean;

	function enableDynamicLighting(hasDynamicLighting: boolean) {
		if (!hasDynamicLighting) return;
		const SPOTLIGHT_OFFSET = 10;
		directionalLight?.position.set(
			perspectiveCamera?.position.x + SPOTLIGHT_OFFSET,
			perspectiveCamera?.position.y + SPOTLIGHT_OFFSET,
			perspectiveCamera?.position.z + SPOTLIGHT_OFFSET
		);
		perspectiveCamera?.updateProjectionMatrix();
		requestAnimationFrame(() => enableDynamicLighting(hasDynamicLighting));
	}

	onMount(() => {
		enableDynamicLighting(hasDynamicLighting)
	})
</script>

<PerspectiveCamera
	position={CAMERA_POSITION}
	fov={CAMERA_FIELD_OF_VIEW}
	useCamera={true}
	bind:camera={perspectiveCamera}
>
	{#if hasOrbitControls}
		<OrbitControls
			enableZoom={IS_ZOOMING}
			enablePan={IS_PANNING}
			target={{ y: 0.5 }}
			autoRotate={true}
			autoRotateSpeed={ROTATION_SPEED}
		/>
	{/if}
</PerspectiveCamera>

<AmbientLight intensity={AMBIENT_LIGHT_INTENSITY} />

<DirectionalLight
	intensity={DIRECTIONAL_INTENSITY}
	position={{ x: 10, y: 10, z: 10 }}
	bind:light={directionalLight}
/>
