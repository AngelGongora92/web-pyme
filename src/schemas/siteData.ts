import { defineField, defineType } from 'sanity';

export const siteData = defineType({
  name: 'siteData',
  title: 'Datos del Sitio',
  type: 'document',
  groups: [
    { name: 'general', title: 'General' },
    { name: 'hero', title: 'Inicio (Hero)' },
    { name: 'services', title: 'Servicios' },
    { name: 'whyUs', title: 'Por qué elegirnos' },
    { name: 'gallery', title: 'Galería' },
    { name: 'testimonials', title: 'Testimonios' },
    { name: 'contact', title: 'Contacto y Horarios' },
    { name: 'branding', title: 'Colores y Estilos' },
  ],
  fields: [
    // GENERAL
    defineField({
      name: 'name',
      title: 'Nombre de la Empresa',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'description',
      title: 'Descripción (SEO y Pie de página)',
      type: 'text',
      group: 'general',
    }),
    defineField({
      name: 'demoMode',
      title: 'Modo Demo Activado',
      type: 'boolean',
      group: 'general',
      initialValue: false,
    }),
    
    // BRANDING & THEME
    defineField({
      name: 'themePreset',
      title: 'Tema (Plantilla visual base)',
      type: 'string',
      options: { list: ['modern', 'bold', 'warm'] },
      initialValue: 'modern',
      group: 'branding',
    }),
    defineField({
      name: 'theme',
      title: 'Colores de Marca',
      type: 'object',
      group: 'branding',
      fields: [
        { name: 'primary', type: 'string', title: 'Color Primario (Hex)' },
        { name: 'secondary', type: 'string', title: 'Color Secundario (Hex)' },
        { name: 'cta', type: 'string', title: 'Color Botón CTA (Hex)' },
        { name: 'neutral', type: 'string', title: 'Color Neutro/Fondo (Hex)' },
      ]
    }),
    defineField({
      name: 'images',
      title: 'Imágenes Globales',
      type: 'object',
      group: 'branding',
      fields: [
        { name: 'logo', type: 'image', title: 'Logo Principal' },
        { name: 'hero', type: 'image', title: 'Imagen Principal (Hero)' },
        { name: 'about', type: 'image', title: 'Imagen Nosotros / Adicional' },
      ]
    }),

    // SECTION TITLES
    defineField({
      name: 'sectionTitles',
      title: 'Títulos de las Secciones',
      type: 'object',
      group: 'general',
      fields: [
        { name: 'whyUs', type: 'string', title: 'Título "Por qué elegirnos"' },
        { name: 'services', type: 'string', title: 'Título "Servicios"' },
        { name: 'gallery', type: 'string', title: 'Título "Galería"' },
        { name: 'testimonials', type: 'string', title: 'Título "Testimonios"' },
        { name: 'location', type: 'string', title: 'Título "Visítanos"' },
        { name: 'faq', type: 'string', title: 'Título "FAQ"' },
      ]
    }),

    // HERO
    defineField({
      name: 'headline',
      title: 'Título Principal (Hero)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subtítulo',
      type: 'text',
      group: 'hero',
    }),
    defineField({
      name: 'promoBadge',
      title: 'Texto de Promoción (Ej. ¡Cotiza hoy!)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Texto del Botón CTA',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'whatsappDefaultMessage',
      title: 'Mensaje de WhatsApp por Defecto',
      type: 'text',
      group: 'hero',
    }),

    // SERVICES
    defineField({
      name: 'services',
      title: 'Lista de Servicios',
      type: 'array',
      group: 'services',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Título del Servicio' },
            { name: 'description', type: 'text', title: 'Descripción' },
            { name: 'icon', type: 'string', title: 'Ícono (Ej. Popcorn, Martini)' },
            { name: 'whatsappMessage', type: 'text', title: 'Mensaje WA' },
            { name: 'image', type: 'image', title: 'Foto del Servicio' },
          ]
        }
      ]
    }),

    // WHY US
    defineField({
      name: 'whyUs',
      title: 'Lista de Beneficios',
      type: 'array',
      group: 'whyUs',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Título' },
            { name: 'description', type: 'text', title: 'Descripción' },
          ]
        }
      ]
    }),
    defineField({
      name: 'trustBadges',
      title: 'Etiquetas de Confianza',
      type: 'array',
      group: 'whyUs',
      of: [{ type: 'string' }]
    }),

    // GALLERY
    defineField({
      name: 'gallery',
      title: 'Galería de Fotos',
      type: 'array',
      group: 'gallery',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', type: 'image', title: 'Foto' },
            { name: 'alt', type: 'string', title: 'Descripción (Alt Text)' },
          ]
        }
      ]
    }),

    // TESTIMONIALS
    defineField({
      name: 'testimonials',
      title: 'Testimonios',
      type: 'array',
      group: 'testimonials',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Nombre del Cliente' },
            { name: 'role', type: 'string', title: 'Puesto / Empresa' },
            { name: 'text', type: 'text', title: 'Testimonio' },
            { name: 'rating', type: 'number', title: 'Calificación (1-5)' },
            { name: 'avatar', type: 'image', title: 'Foto de Perfil (Opcional)' },
          ]
        }
      ]
    }),

    // FAQS
    defineField({
      name: 'faqs',
      title: 'Preguntas Frecuentes',
      type: 'array',
      group: 'contact',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', type: 'string', title: 'Pregunta' },
            { name: 'answer', type: 'text', title: 'Respuesta' },
          ]
        }
      ]
    }),

    // CONTACT
    defineField({
      name: 'contact',
      title: 'Datos de Contacto',
      type: 'object',
      group: 'contact',
      fields: [
        { name: 'phone', type: 'string', title: 'Teléfono (Formato Visual)' },
        { name: 'whatsapp', type: 'string', title: 'Número de WhatsApp (Solo números)' },
        { name: 'email', type: 'string', title: 'Correo Electrónico' },
        { name: 'address', type: 'string', title: 'Dirección (Texto)' },
        { name: 'mapsUrl', type: 'url', title: 'Link de Google Maps' },
        { name: 'showMap', type: 'boolean', title: '¿Mostrar Mapa en la web?' },
      ]
    }),

    // SOCIAL
    defineField({
      name: 'social',
      title: 'Redes Sociales',
      type: 'object',
      group: 'contact',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'tiktok', type: 'url', title: 'TikTok' },
      ]
    }),
  ],
});
