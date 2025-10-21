import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string().nullable().transform(val => val ?? ''),
    tags: z.array(z.string()).nullable().transform(val => val ?? []),
  }),
});

export const collections = { blog };
