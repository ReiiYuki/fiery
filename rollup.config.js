import typescript from 'rollup-plugin-typescript'

export default {
  input: './src/index.tsx',
  output: {
    file: 'umd/fiery.js',
    format: 'umd',
    name: 'fiery',
    exports: 'named',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      firebase: 'firebase'
    }
  },
  plugins: [typescript()],
  external: ['react', 'react-dom', 'firebase']
}
