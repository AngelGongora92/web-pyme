import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SiteData, Service, GalleryImage, Testimonial } from '../types/site';

const client = createClient({
  projectId: '9eo6e4fi',
  dataset: 'production',
  useCdn: true, // CDN para que sea rapidísimo en producción
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source).url();
}

export async function getSiteData(): Promise<SiteData> {
  // Aquí leemos la variable de entorno que Vercel le inyectará a cada cliente.
  // Si no existe (ej. en desarrollo local), usamos el ID de tu cliente por defecto.
  const clientId = import.meta.env.PUBLIC_SANITY_ID || 'fbR5KZ7Ph36YOkZb9iJ7FC';

  try {
    // Ya no buscamos "el primero que haya", buscamos EXCLUSIVAMENTE el ID de este cliente
    const query = `*[_type == "siteData" && _id == $clientId][0]`;
    const sanityData = await client.fetch(query, { clientId });

    if (!sanityData) {
      throw new Error(`No se encontró el cliente con ID: ${clientId} en Sanity.`);
    }

    // Mapeamos la data de Sanity a nuestra interfaz SiteData de TypeScript
    return {
      demoMode: import.meta.env.PUBLIC_DEMO_MODE === 'true',
      name: sanityData.name || 'Sin Título',
      description: sanityData.description || '',
      headline: sanityData.headline || '',
      subheadline: sanityData.subheadline || '',
      promoBadge: sanityData.promoBadge || '',
      
      sectionTitles: sanityData.sectionTitles || {},
      themePreset: sanityData.themePreset || 'modern',
      theme: sanityData.theme || {},
      contact: sanityData.contact || {},
      schedule: sanityData.schedule || { showIndicator: false, summary: [], hours: {} },
      social: sanityData.social || {},
      faqs: sanityData.faqs || [],
      whyUs: sanityData.whyUs || [],
      trustBadges: sanityData.trustBadges || [],
      
      hero: sanityData.heroCtaText ? {
        ctaText: sanityData.heroCtaText,
        whatsappDefaultMessage: sanityData.whatsappDefaultMessage || 'Hola'
      } : {},

      images: {
        logo: sanityData.images?.logo ? urlFor(sanityData.images.logo) : '',
        hero: sanityData.images?.hero ? urlFor(sanityData.images.hero) : '',
        about: sanityData.images?.about ? urlFor(sanityData.images.about) : '',
      },
      
      services: sanityData.services ? sanityData.services.map((s: any) => ({
        ...s,
        image: s.image ? urlFor(s.image) : ''
      })) as Service[] : [],
      
      gallery: sanityData.gallery ? sanityData.gallery.map((g: any) => ({
        ...g,
        src: g.image ? urlFor(g.image) : ''
      })) as GalleryImage[] : [],
      
      testimonials: sanityData.testimonials ? sanityData.testimonials.map((t: any) => ({
        ...t,
        avatar: t.avatar ? urlFor(t.avatar) : undefined
      })) as Testimonial[] : [],
    } as SiteData;
    
  } catch (error) {
    console.error("⚠️ ERROR FATAL: No se pudo obtener la información de Sanity.", error);
    throw error; // Forzamos el error para que Vercel cancele la construcción si falla
  }
}
