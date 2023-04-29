import { supabase } from '../utils/supabase'

export async function load() {
	const { data } = await supabase.from('aruarus').select('*')

	return {
		aruarus: data || []
	}
}
