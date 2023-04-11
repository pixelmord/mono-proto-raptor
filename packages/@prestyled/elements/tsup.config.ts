import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  splitting: true,
  treeshake: true,
  entry: ['src/index.tsx'],
  format: ['cjs'],
  dts: true,
  minify: true,
  clean: true,
  sourcemap: true,
  external: ['react'],
  ...options,
}));
