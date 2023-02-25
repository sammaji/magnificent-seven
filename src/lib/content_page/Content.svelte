<script lang="ts">
	export let data: import('@data/content.data').ContentPageType;
</script>

<div>
	<header>
		<h1>{data.title}</h1>
		<p>{data.description}</p>
	</header>
</div>
