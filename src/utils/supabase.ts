
import { createClient } from '@supabase/supabase-js'
import { SUPABASE_KEY } from '$env/static/private'
import type { Database } from '$types/supabase'

export const supabase = createClient<Database>(
	'https://jmehehlcelpbkfzlmtox.supabase.co',
	SUPABASE_KEY
)
