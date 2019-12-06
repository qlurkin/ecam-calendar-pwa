import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

console.log(babel.generated)

export default [
	{
		input: 'app.js',
		output: {
			file: 'dist-rollup/bundle.js',
			format: 'iife'
		},
		plugins: [ 
			resolve(),
			commonjs(),
			babel.generated({
				minified: true,
				compact: true
			})
		]
	}
]