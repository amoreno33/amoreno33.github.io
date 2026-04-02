import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    stack: z.array(z.string()),
    category: z.enum(['backend', 'llm', 'data-analysis', 'ml']),
    github: z.string().url(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['active', 'coming-soon']).default('active'),
  }),
});

export const collections = { posts, projects };
