<div class="flex flex-wrap justify-center items-end gap-4 my-2">
	{#await supabase.auth.getUser()}
		Loading...
	{:then { data: { user }}}
		{#if user}
			<AddAruAru {user} />
			<button on:click={signOut}>Sign out ({user.email})</button>
		{:else}
			<button on:click={signInWithGoogle}>Sign in (Google)</button>
		{/if}
	{/await}
</div>

<div class="grid gap-4 items-stretch px-4">
	{#each aruarus as aruaru}
		<AruAru {aruaru} className="flex flex-col justify-center" />
	{/each}
</div>

<style>
	.grid {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
</style>

<script lang="ts">
	import AruAru from '$/lib/AruAru.svelte'
	import AddAruAru from '$/lib/AddAruAru.svelte'
	import { supabase } from '$/utils/supabase'
	import { PUBLIC_SITE_URL } from '$env/static/public'

	export let data

	const { aruarus } = data

	async function signInWithGoogle() {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: PUBLIC_SITE_URL ?? undefined,
			}
		})
	}

	async function signOut() {
		const { error } = await supabase.auth.signOut()
		if (!error) location.reload()
	}
</script>
