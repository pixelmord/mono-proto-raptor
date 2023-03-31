const path = require('path');
import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    'storybook-addon-tailwind',
  ],
  framework: '@storybook/react-vite',
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    // },
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: {
        ...config.define,
        'process.env': {},
      },
      resolve: {
        alias: [
          {
            find: '@prestyled/elements',
            replacement: path.resolve(__dirname, '../../../packages/@prestyled/elements/'),
          },
          {
            find: '@prestyled/data-table',
            replacement: path.resolve(__dirname, '../../../packages/@prestyled/data-table/'),
          },
        ],
      },
    };
  },
};
export default config;
