import { fail } from '@sveltejs/kit'
import { supabase } from '../utils/supabase'

export async function load() {
	const { data } = await supabase
		.from('aruarus')
		.select('*')
		.order('created_at', { ascending: false })

	return {
		aruarus: data || []
	}
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData()
		const json = Object.fromEntries(data.entries()) as {
			user_id: string
			quote: string
			author?: string
		}

		const { error } = await supabase.from('aruarus').insert({
			...json,
			likes: 0,
			created_at: ((new Date()).toISOString()).toLocaleString(),
		})

		if (error) {
			console.error(error)
			return fail(400, error)
		}
	}
}
