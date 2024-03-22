import fs from 'node:fs'
import mdx from '@astrojs/mdx'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import swup from '@swup/astro'
import Compress from 'astro-compress'
import astroExpressiveCode, { ExpressiveCodeTheme } from 'astro-expressive-code'
import icon from 'astro-icon'
import { defineConfig, passthroughImageService } from 'astro/config'
import Color from 'colorjs.io'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import remarkMath from 'remark-math'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'

// Load your saved theme JSONC file here and create a theme from it
const jsoncString = fs.readFileSync(
  new URL('./github-dark.jsonc', import.meta.url),
  'utf-8',
)
const githubDark = ExpressiveCodeTheme.fromJSONString(jsoncString)

const oklchToHex = str => {
  const DEFAULT_HUE = 250
  const regex = /-?\d+(\.\d+)?/g
  const matches = str.string.match(regex)
  const lch = [matches[0], matches[1], DEFAULT_HUE]
  return new Color('oklch', lch).to('srgb').toString({
    format: 'hex',
  })
}

// https://astro.build/config
export default defineConfig({
  site: 'https://bearkern.github.io/',
  integrations: [
    tailwind(),
    swup({
      theme: false,
      animationClass: 'transition-',
      containers: ['main'],
      smoothScrolling: true,
      cache: true,
      preload: true,
      accessibility: true,
      globalInstance: true,
    }),
    icon({
      include: {
        'material-symbols': ['*'],
        'fa6-brands': ['*'],
        'fa6-regular': ['*'],
        'fa6-solid': ['*'],
      },
    }),
    Compress({
      Image: false,
    }),
    svelte(),
    astroExpressiveCode({
      themes: [githubDark],
      plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
      styleOverrides: {
        // You can optionally override the plugin's default styles here
        collapsibleSections: {
          closedBackgroundColor: '#35465b7a',
          closedTextColor: '#888',
          openBackgroundColor: '#35465b7a',
        },
      },
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkReadingTime],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor'],
          },
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['anchor-icon'],
              'data-pagefind-ignore': true,
            },
            children: [
              {
                type: 'text',
                value: '#',
              },
            ],
          },
        },
      ],
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          define: {
            oklchToHex: oklchToHex,
          },
        },
      },
    },
  },
  image: {
    service: passthroughImageService(),
  },
})
