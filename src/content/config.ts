import { defineCollection, z } from 'astro:content';

const proyectos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    ubicacion: z.string(),
    anio: z.number(),
    categoria: z.string(),
    imagen: z.string(),
    imagenAlt: z.string(),
    resumen: z.string(),
    destacado: z.boolean().default(false),
  }),
});

const articulos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    categoria: z.string(),
    fecha: z.date(),
    autor: z.string(),
    imagen: z.string(),
    imagenAlt: z.string(),
    resumen: z.string(),
    destacado: z.boolean().default(false),
  }),
});

export const collections = { proyectos, articulos };
