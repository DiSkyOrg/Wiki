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
				graph: {
					enabled: true,
				},
			})],
			title: 'DiSky',
			description: 'Official documentation for DiSky - A powerful Skript addon for Discord bots',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/DiSkyOrg/DiSky' },
				{ icon: 'discord', label: 'Discord', href: 'https://disky.me/discord' }
			],
			customCss: [
				'./src/styles/global.css'
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'What is DiSky?', slug: 'getting-started/what-is-disky' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Your First Bot', slug: 'getting-started/your-first-bot' },
						{ label: 'Getting Help', slug: 'getting-started/getting-help' },
						{ label: 'FAQ', slug: 'getting-started/faq' },
					],
				},
				{
					label: 'Basics',
					items: [
						{ label: 'Bot Configuration', slug: 'basics/bot-configuration' },
						{ label: 'Gateway Intents', slug: 'basics/gateway-intents' },
						{ label: 'Cache Policy & Flags', slug: 'basics/cache-policy' },
						{ label: 'Presence & Status', slug: 'basics/presence-status' },
						{ label: 'Multiple Bots', slug: 'basics/multiple-bots' },
					],
				},
				{
					label: 'Guides',
					collapsed: false,
					items: [
						{
							label: 'Messages',
							collapsed: true,
							items: [
								{ label: 'Simple Messages', slug: 'guides/messages/simple-messages' },
								{ label: 'Advanced Messages', slug: 'guides/messages/advanced-messages' },
								{ label: 'Emojis', slug: 'guides/messages/emojis' },
								{ label: 'File Uploads', slug: 'guides/messages/file-uploads' },
								{ label: 'Webhooks', slug: 'guides/messages/webhooks' },
								{ label: 'Polls', slug: 'guides/messages/polls' },
								{ label: 'Message Wrapper', slug: 'guides/messages/message-wrapper' },
							],
						},
						{
							label: 'Interactions',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'guides/interactions/overview' },
								{ label: 'Components', slug: 'guides/interactions/components' },
								{ label: 'Slash Commands', slug: 'guides/interactions/slash-commands' },
								{ label: 'Modals', slug: 'guides/interactions/modals' },
								{ label: 'Select Menus', slug: 'guides/interactions/select-menus' },
							],
						},
						{
							label: 'Guild Features',
							collapsed: true,
							items: [
								{ label: 'Automod', slug: 'guides/guild/automod' },
								{ label: 'Forums', slug: 'guides/guild/forums' },
								{ label: 'Logs', slug: 'guides/guild/logs' },
								{ label: 'Welcome Screen', slug: 'guides/guild/welcome-screen' },
							],
						},
					],
				},
				{
					label: 'Concepts',
					items: [
						{ label: 'Data Structures', slug: 'concepts/data-structures' },
						{ label: 'Error Handling', slug: 'concepts/error-handling' },
						{ label: 'Asynchronous Operations', slug: 'concepts/async' },
						{ label: 'Rate Limits', slug: 'concepts/rate-limits' },
						{ label: 'Listen Once', slug: 'concepts/listen-once' },
					],
				},
				{
					label: 'Add-ons',
					collapsed: true,
					items: [
						{
							label: 'SkImage',
							collapsed: true,
							items: [
								{ label: 'Getting Started', slug: 'addons/skimage/getting-started' },
								{ label: 'Working with Images', slug: 'addons/skimage/images' },
								{ label: 'Image Effects', slug: 'addons/skimage/effects' },
								{ label: 'GIFs', slug: 'addons/skimage/gifs' },
								{ label: 'Graphics & Drawing', slug: 'addons/skimage/graphics' },
							],
						},
						{
							label: 'BooSK',
							collapsed: true,
							items: [
								{ label: 'Getting Started', slug: 'addons/boosk/getting-started' },
								{ label: 'Creating Books', slug: 'addons/boosk/creating-books' },
							],
						},
					],
				},
				{
					label: 'Examples',
					items: [
						{ label: 'Basic Examples', slug: 'examples/basic' },
						{ label: 'Component Examples', slug: 'examples/components' },
					],
				},
				{
					label: 'Migration Guides',
					collapsed: true,
					items: [
						{ label: 'v4.24', slug: 'migration/v4-24' },
						{ label: 'v4.25', slug: 'migration/v4-25' },
						{ label: 'v4.26', slug: 'migration/v4-26' },
					],
				},
			],
		}),
	],
});
