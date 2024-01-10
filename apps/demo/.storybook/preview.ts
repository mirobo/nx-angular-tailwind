import { Preview, AngularRenderer } from '@storybook/angular';
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
    decorators: [
        withThemeByClassName<AngularRenderer>({
            themes: {
                light: "light",
                dark: "dark",
            },
            defaultTheme: "light",
        }),

    ],
    parameters: {
        a11y: {},
        backgrounds: {
            default: 'Dark',
            values: [
                {
                    name: 'Light',
                    value: '#fff',
                },
                {
                    name: 'Dark',
                    value: '#00292e',
                }
            ],
        },
        themes: {
            default: 'Dark',
            target: 'root',
            list: [
                { name: 'Light', class: 'light', color: '#eef6f6' },
                { name: 'Dark', class: 'dark', color: '#001b1f' }
            ]
        },
        docs: {
            story: {
                inline: true
            }
        },
        viewMode: 'docs',
        options: {
            storySort: {
                method: 'alphabetical',
                order: ['About', 'Docs', ['Guidelines', 'Materials', 'Formly', 'Validators', 'WCMS'], 'Components', '*']
            }
        }
    }
};

export default preview;