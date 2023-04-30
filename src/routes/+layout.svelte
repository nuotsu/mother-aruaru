<header class="sticky top-0 py-4 bg-pink-50/80 backdrop-blur text-center">
	<h1>
		Mother <ruby>AruAru<rt>あるある</rt></ruby>
	</h1>
</header>

<slot></slot>

<script>
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'
	import '../styles/app.css'

	inject({ mode: dev ? 'development' : 'production' })
</script>
