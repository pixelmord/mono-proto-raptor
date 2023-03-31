import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ['src/**/*.tsx'],
  format: ['esm'],
  dts: true,
  minify: true,
  clean: true,
  external: ['react'],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  ...options,
}));
