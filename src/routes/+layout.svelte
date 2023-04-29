<slot></slot>

<script>
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'
	import '../styles/app.css'

	inject({ mode: dev ? 'development' : 'production' })
</script>
