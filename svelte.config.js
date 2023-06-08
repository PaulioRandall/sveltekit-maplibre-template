import adapter from '@sveltejs/adapter-auto'
import path from 'path'

export default {
	kit: {
		adapter: adapter(),
		alias: {
			$routes: path.resolve('./src/routes'),
			$state: path.resolve('./src/lib/state.js'),
			$util: path.resolve('./src/lib/util.js'),
		},
	},
}
