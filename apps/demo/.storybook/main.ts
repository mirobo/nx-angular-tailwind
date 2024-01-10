import type { StorybookConfig } from '@storybook/angular';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: ['../src/**.mdx','../src/app/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
  '@storybook/addon-essentials', 
  '@storybook/addon-interactions',
  '@storybook/addon-a11y',
  '@storybook/addon-designs',
  '@storybook/addon-themes',
  {
    name: '@storybook/addon-docs',
    options: {
      transcludeMarkdown: true,
      mdxPluginOptions: {
        mdxCompileOptions: {
          remarkPlugins: [remarkGfm]
        }
      }
    }
  }
],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: true
  },
  core: {
    disableTelemetry: true
  }
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
