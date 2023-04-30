<article>
	<blockquote>
		<p>{aruaru.quote}</p>

		{#if aruaru.author}
			<footer class="text-xs">—{aruaru.author}</footer>
		{/if}
	</blockquote>

	<fieldset>
		{#await supabase.auth.getUser()}
			<span>🩷 0</span>
		{:then { data: { user } }}
			{#if user}
				<button on:click={like}>🩷 {aruaru.likes}</button>
			{:else}
				<span>🩷 {aruaru.likes}</span>
			{/if}
		{/await}
	</fieldset>
</article>

<script lang="ts">
	import { supabase } from '$/utils/supabase'
	import { onMount } from 'svelte'

	export let aruaru: App.AruAru

	$: aruaru = aruaru

	async function like() {
		await supabase
			.from('aruarus')
			.update({ likes: aruaru.likes + 1 })
			.eq('id', aruaru.id)

		aruaru.likes = aruaru.likes + 1
	}

	onMount(() => {
		const subscription = supabase
			.channel('any')
			.on(
				'postgres_changes',
				{ event: 'UPDATE', schema: 'public', table: 'aruarus' },
				payload => {
					if (payload.new.id === aruaru.id) {
						aruaru.likes = payload.new.likes
					}
				}
			)

		return () => {
			subscription.unsubscribe()
		}
	})
</script>
