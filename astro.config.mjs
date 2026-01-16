// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeObsidian({
				backlinks: false,
				graph: false,
				
			})],
			title: 'DiSky Wiki',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/DiSkyOrg/DiSky' },
				{ icon: 'seti:cake_php', label: 'Modrinth', href: 'https://modrinth.com/plugin/disky' },
				{ icon: 'discord', label: 'Discord', href: 'https://disky.me/discord' }
			],
            customCss: [
                './src/styles/global.css'
            ],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
