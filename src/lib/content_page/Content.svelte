<script lang="ts">
	export let data: import('@data/content.data').ContentType;

	export let displayPage: number;
</script>

<div>
	{#if displayPage === 1}
		<span />
		<header>
			<h1>{data.pageOne.title}</h1>
			<p>{data.pageOne.description}</p>
		</header>
	{:else if (displayPage = 2)}
		<div class="header-sec">
			<h1>{data.pageTwo.title}</h1>
			<p>{data.pageTwo.description}</p>
		</div>
		<div class="header-sec">
			<h1>{data.pageThree.title}</h1>
			<p>{data.pageThree.description}</p>
		</div>
	{:else}{/if}
</div>

<style>
	div > span {
		background-color: rgba(0, 0, 0, 0.4);
		height: 100%;
		width: 100%;
	}
	div {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	header {
		color: black;
		padding: 2rem;
		width: 50%;
		position: absolute;
		top: 50%;
		left: 10%;
		transform: translate(0, -50%);
		font-family: 'Oswald', sans-serif;
		color: white;
		/* background-color: rgba(225, 225, 225, 0.3);
		backdrop-filter: blur(8px); */
	}

	header h1 {
		font-size: 4rem;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: 800;
		padding-bottom: 1rem;
		text-shadow: 4px 4px 32px rgba(0, 0, 0, 0.4);
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	header p {
		line-height: 2.4rem;
		font-family: 'poppins', sans-serif;
		font-size: 1.2rem;
		font-weight: 400;
		text-shadow: 4px 4px 16px rgba(0, 0, 0, 1);
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.header-sec {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.header-sec h1 {
		font-size: 4rem;
		margin-bottom: 1rem;
	}

	.header-sec p {
		margin-top: 1rem;
		font-weight: 600;
		font-size: 1rem;
		line-height: 2rem;
		text-align: justify;
		text-justify: inter-word;
	}

	.header-sec:first-child {
		margin-left: 10%;
		margin-right: 5%;
	}

	.header-sec:last-child {
		margin-right: 10%;
		margin-left: 5%;
	}
</style>
