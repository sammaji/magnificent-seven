<script>
	import { Canvas } from '@threlte/core';
	import RenderPreset from './RenderPreset.svelte';
	import Mesh from './Mesh.svelte';
</script>

<Canvas>
	<RenderPreset hasOrbitControls={true} hasDynamicLighting={true} />
	<Mesh meshRadius={2.8} />
</Canvas>
