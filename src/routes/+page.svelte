<h1>Mother AruAru</h1>

{#each aruarus as { quote, author }}
	<blockquote>
		<p>{quote}</p>
		{#if author}
			<footer>—{author}</footer>
		{/if}
	</blockquote>
{/each}

<script lang="ts">
	export let data

	const { aruarus } = data
</script>
