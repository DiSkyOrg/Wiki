// src/pages/search-index.json.ts
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const docs = await getCollection('docs');

  const entries = docs.map(d => ({
    title: d.data.title,
    url: `/${d.id.replace(/\.(md|mdx)$/, '')}/`,
    description: d.data.description ?? '',
    body: (d.body ?? '').replace(/```[\s\S]*?```/g, '').replace(/[#*`\[\]]/g, '').slice(0, 5000),
  }));

  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json' },
  });
};