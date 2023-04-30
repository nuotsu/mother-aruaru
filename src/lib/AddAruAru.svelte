<button on:click={() => dialog?.showModal()}>
	Add <ruby>AruAru<rt>あるある</rt></ruby>
</button>

<dialog class="backdrop:backdrop-blur-sm" bind:this={dialog}>
	<form method="post" action="/" class="grid" on:submit|preventDefault={submit}>
		<input id="user_id" name="user_id" value={user.id} type="hidden">

		<label>
			<textarea
				class:border-red-500={invalid}
				id="quote"
				name="quote"
				placeholder="〇〇しがち"
				required
			/>
		</label>

		<label>
			<input id="author" name="author" type="text" placeholder="ペンネーム">
		</label>

		<p class="flex flex-wrap items-end gap-4">
			<button type="submit">
				Submit <ruby>AruAru<rt>あるある</rt></ruby>
			</button>

			<button type="button" on:click={() => dialog?.close()}>
				Cancel
			</button>
		</p>
	</form>
</dialog>

<script lang="ts">
	import { supabase } from '$/utils/supabase'
	import type { User } from '@supabase/supabase-js'

	export let user: User

	let dialog: HTMLDialogElement | null = null
	let invalid = false

	async function submit(e: Event) {
		const form = e.target as HTMLFormElement

		if (!form.checkValidity()) return false

		const quotes = await supabase
			.from('aruarus')
			.select('quote')
			.then(({ data }) => data?.map(({ quote }) => quote) ?? [])

		const message = `以下の内容で投稿しますか？\n\n"${form.quote.value}"`

		if (quotes.includes(form.quote.value)) {
			invalid = true
			alert('すでに同じ内容の投稿があります')
			return false
		}

		if (confirm(message)) {
			invalid = true
			form.submit()
		}
	}
</script>
