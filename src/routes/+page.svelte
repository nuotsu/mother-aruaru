<h1>Mother <ruby>AruAru<rt>あるある</rt></ruby></h1>

{#each aruarus as aruaru}
	<AruAru {aruaru} />
{/each}

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
				redirectTo: PUBLIC_SITE_URL ?? 'http://localhost:5173/',
			}
		})
	}

	async function signOut() {
		const { error } = await supabase.auth.signOut()
		if (!error) location.reload()
	}
</script>
