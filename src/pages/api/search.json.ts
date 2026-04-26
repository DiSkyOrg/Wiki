// src/pages/api/search.json.ts
import { getCollection } from 'astro:content';
import MiniSearch from 'minisearch';
import type { APIRoute } from 'astro';

export const prerender = false;

// Index construit une seule fois au démarrage du worker
let searchIndex: MiniSearch | null = null;
let docsById: Map<string, { title: string; url: string; excerpt: string; body: string }> = new Map();

async function getIndex() {
  if (searchIndex) return searchIndex;

  const docs = await getCollection('docs');
  const items = docs.map((d, i) => {
    const id = String(i);
    const url = `/${d.slug}/`;
    const body = d.body ?? '';
    docsById.set(id, {
      title: d.data.title,
      url,
      excerpt: d.data.description ?? body.slice(0, 200),
      body,
    });
    return { id, title: d.data.title, body };
  });

  const mini = new MiniSearch({
    fields: ['title', 'body'],
    storeFields: ['title'],
    searchOptions: {
      boost: { title: 3 },
      fuzzy: 0.2,
      prefix: true,
    },
  });
  mini.addAll(items);
  searchIndex = mini;
  return mini;
}

function makeExcerpt(body: string, query: string, len = 200): string {
  const lower = body.toLowerCase();
  const term = query.toLowerCase().split(/\s+/).find(t => lower.includes(t));
  if (!term) return body.slice(0, len);
  const idx = lower.indexOf(term);
  const start = Math.max(0, idx - 60);
  return (start > 0 ? '…' : '') + body.slice(start, start + len).replace(/\s+/g, ' ').trim() + '…';
}

export const GET: APIRoute = async ({ url }) => {
  const q = url.searchParams.get('q')?.trim() ?? '';
  const limit = Math.min(Number(url.searchParams.get('limit') ?? 5), 10);

  if (!q) {
    return new Response(JSON.stringify({ results: [] }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const index = await getIndex();
  const hits = index.search(q).slice(0, limit);

  const results = hits.map(h => {
    const doc = docsById.get(h.id as string)!;
    return {
      title: doc.title,
      url: doc.url,
      excerpt: makeExcerpt(doc.body, q),
      score: Math.round(h.score * 100) / 100,
    };
  });

  return new Response(JSON.stringify({ query: q, results }), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
  });
};