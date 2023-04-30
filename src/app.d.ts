// See https://kit.svelte.dev/docs/types#app
import type { Database } from './types/supabase'

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		type AruAru = Database['public']['Tables']['aruarus']['Row']
	}
}

export {}
