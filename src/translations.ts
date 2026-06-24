export type Translations = typeof translations.es;

export const translations = {
  es: {
    loading: {
      title: 'SCC Trading SRL',
      subtitle: 'Excelencia en Exportación de Legumbres',
    },
    header: {
      brand: 'SCC Trading SRL',
      nav: {
        inicio: 'Inicio',
        about: 'Quiénes Somos',
        products: 'Productos',
        gallery: 'Galería',
        contact: 'Contacto',
      },
    },
    hero: {
      overline: 'SCC TRADING SRL',
      title: 'Excelencia en Exportación de Legumbres',
      subtitle: 'Conectamos la mejor calidad de Sudamérica con el mercado internacional.',
      cta: 'Explorar Productos',
    },
    about: {
      overline: 'SOBRE NOSOTROS',
      title: 'Quiénes Somos',
      p1: 'En SCC Trading SRL somos especialistas en la exportación de legumbres, granos y especialidades agrícolas. Trabajamos de cerca con los productores para garantizar que los mejores productos de Sudamérica lleguen a mercados de alta demanda en Asia, Medio Oriente y Europa.',
      p2: 'Nos destacamos por nuestra calidad, transparencia y compromiso a largo plazo con nuestros clientes, asegurando logística eficiente, estrictos controles de calidad y un servicio personalizado.',
      badge: '+15 Años de Experiencia',
      tags: ['Calidad Garantizada', 'Logística Global', 'Soporte 24/7'],
    },
    stats: {
      years: 'Años de Experiencia',
      countries: 'Países Exportados',
      tons: 'Ton. Exportadas/año',
      clients: 'Clientes Satisfechos',
    },
    products: {
      overline: 'CATÁLOGO',
      title: 'Nuestros Productos',
      origin: 'Producción Argentina',
      originBadge: '100% Argentino',
      items: [
        {
          name: 'Green Peas',
          category: 'Arvejas Verdes',
          description: 'Arvejas verdes de alta calidad, seleccionadas bajo estrictos estándares de producción y control.',
          info: 'Granos uniformes de color verde intenso, con excelente valor nutricional. Ideales para consumo humano y procesamiento industrial.',
        },
        {
          name: 'DRKB Beans',
          category: 'Poroto Colorado Dark',
          description: 'Porotos riñón rojo oscuro de calidad premium, reconocidos por su uniformidad, tamaño y color característico.',
          info: 'Cultivados en las mejores regiones agrícolas. Aptos para la industria alimentaria, conservera y mercados de exportación.',
        },
        {
          name: 'Green Mung Beans',
          category: 'Poroto Mungo Verde',
          description: 'Porotos mung verdes seleccionados cuidadosamente para garantizar pureza, calidad y excelente rendimiento.',
          info: 'Granos pequeños de color verde intenso, apreciados por su alto valor nutricional y versatilidad. Ideales para brotes, sopas, harinas y alimentos saludables.',
        },
        {
          name: 'Cranberry Beans',
          category: 'Poroto Cranberry',
          description: 'Porotos cranberry de excelente calidad, seleccionados por su sabor, textura y atractiva presentación.',
          info: 'Granos de tamaño mediano con su característica coloración crema y vetas rojizas. Ideales para mercados gourmet, exportación y aplicaciones culinarias de alta calidad.',
        },
      ],
    },
    gallery: {
      overline: 'NUESTRO TRABAJO',
      title: 'Galería',
      detailLabel: 'Ficha técnica',
      specLabel: 'Especificaciones',
      images: [
        {
          title: 'Popcorn',
          details: [
            { label: 'Período de cosecha', value: 'Febrero / Marzo' },
            { label: 'Expansión', value: '38/40, 40/42, 42/44' },
            { label: 'K - 10', value: '55-65, 65-75, 75-85' },
            { label: 'Humedad máx.', value: '14,50%' },
          ],
        },
        {
          title: 'Girasol Confitero',
          details: [
            { label: 'Período de cosecha', value: 'Marzo / Abril' },
            { label: 'Tamaño', value: '16/64, 20/64, 22/64, 24/64' },
          ],
        },
        {
          title: 'Alubia',
          details: [
            { label: 'Período de cosecha', value: 'Junio / Julio' },
            { label: 'Material extraño máx.', value: '1%' },
            { label: 'Granos manchados máx.', value: '1%' },
            { label: 'Granos ligeramente manchados máx.', value: '3%' },
          ],
        },
        {
          title: 'Poroto Colorado Dark',
          details: [
            { label: 'Período de cosecha', value: 'Junio / Julio' },
            { label: 'Material extraño máx.', value: '1%' },
            { label: 'Granos manchados máx.', value: '1%' },
            { label: 'Granos ligeramente manchados máx.', value: '3%' },
          ],
        },
        {
          title: 'Poroto Negro',
          details: [
            { label: 'Período de cosecha', value: 'Junio / Julio' },
            { label: 'Material extraño máx.', value: '1%' },
            { label: 'Granos manchados máx.', value: '1%' },
            { label: 'Granos ligeramente manchados máx.', value: '3%' },
          ],
        },
        {
          title: 'Poroto Mung Verde',
          details: [
            { label: 'Período de cosecha', value: 'Marzo / Abril' },
            { label: 'Material extraño máx.', value: '1%' },
            { label: 'Dañados máx.', value: '3%' },
          ],
        },
        {
          title: 'Garbanzo',
          details: [
            { label: 'Período de cosecha', value: 'Noviembre / Diciembre' },
            { label: 'Variedad', value: 'Kabuli' },
            { label: 'Tamaño', value: '7mm, 8mm, 9mm, partido' },
            { label: 'Material extraño máx.', value: '1%' },
            { label: 'Dañados máx.', value: '3%' },
            { label: 'Verdes máx.', value: '3%' },
          ],
        },
        {
          title: 'Arveja',
          details: [
            { label: 'Período de cosecha', value: 'Noviembre / Diciembre' },
            { label: 'Variedad', value: 'Verde, amarilla, entera y partida' },
            { label: 'Tamaño', value: '4 a 7 mm' },
            { label: 'Blanqueado máx.', value: '3/6%' },
            { label: 'Material extraño máx.', value: '1%' },
            { label: 'Grano partido máx.', value: '3%' },
          ],
        },
      ],
    },
    contact: {
      overline: 'COMUNÍCATE',
      title: 'Contacto',
      subtitle: 'Estamos para ayudarte',
      description: 'Estamos listos para atender sus consultas comerciales y proveerle las mejores legumbres del mercado.',
      info: {
        location: 'Buenos Aires, Argentina',
        email: 'executiondesk@scct.com.ar',
        phone: '+54 9 1155790550 - (Tomas Rosner)',
        phone2: '+54 91158737974 - (Jorge Zocca)',
      },
      form: {
        name: 'Nombre',
        company: 'Empresa',
        email: 'Email',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
      },
    },
    footer: {
      description: 'Especialistas en la exportación de legumbres y granos de alta calidad. Conectamos Sudamérica con el mundo con excelencia y compromiso.',
      navTitle: 'Navegación',
      contactTitle: 'Contacto',
      rights: 'Todos los derechos reservados.',
      designed: 'Diseñado con excelencia',
    },
  },
  en: {
    loading: {
      title: 'SCC Trading SRL',
      subtitle: 'Excellence in Legume Export',
    },
    header: {
      brand: 'SCC Trading SRL',
      nav: {
        inicio: 'Home',
        about: 'About Us',
        products: 'Products',
        gallery: 'Gallery',
        contact: 'Contact',
      },
    },
    hero: {
      overline: 'SCC TRADING SRL',
      title: 'Excellence in Legume Export',
      subtitle: 'We connect the best quality from South America with the international market.',
      cta: 'Explore Products',
    },
    about: {
      overline: 'ABOUT US',
      title: 'Who We Are',
      p1: 'At SCC Trading SRL we are specialists in the export of legumes, grains and agricultural specialties. We work closely with producers to ensure that the best products from South America reach high-demand markets in Asia, the Middle East and Europe.',
      p2: 'We stand out for our quality, transparency and long-term commitment to our clients, ensuring efficient logistics, strict quality controls and personalized service.',
      badge: '+15 Years of Experience',
      tags: ['Guaranteed Quality', 'Global Logistics', '24/7 Support'],
    },
    stats: {
      years: 'Years of Experience',
      countries: 'Countries Exported',
      tons: 'Tons Exported/year',
      clients: 'Satisfied Clients',
    },
    products: {
      overline: 'CATALOG',
      title: 'Our Products',
      origin: 'Argentine Production',
      originBadge: '100% Argentine',
      items: [
        {
          name: 'Green Peas',
          category: 'Green Peas',
          description: 'High-quality green peas selected under strict production and quality control standards.',
          info: 'Uniform grains with an intense green color and excellent nutritional value. Ideal for human consumption and industrial processing.',
        },
        {
          name: 'DRKB Beans',
          category: 'Dark Red Kidney Beans',
          description: 'Premium dark red kidney beans recognized for their uniformity, size, and characteristic color.',
          info: 'Cultivated in the finest agricultural regions. Suitable for food processing, canning industries, and export markets.',
        },
        {
          name: 'Green Mung Beans',
          category: 'Green Mung Beans',
          description: 'Carefully selected green mung beans that ensure purity, quality, and excellent yield.',
          info: 'Small green grains valued for their high nutritional content and versatility. Ideal for sprouts, soups, flours, and healthy food products.',
        },
        {
          name: 'Cranberry Beans',
          category: 'Cranberry Beans',
          description: 'Premium cranberry beans selected for their flavor, texture, and attractive appearance.',
          info: 'Medium-sized beans with their distinctive cream-colored background and red mottled pattern. Ideal for gourmet markets, export, and high-quality culinary applications.',
        },
      ],
    },
    gallery: {
      overline: 'OUR WORK',
      title: 'Gallery',
      detailLabel: 'Product sheet',
      specLabel: 'Specifications',
      images: [
        {
          title: 'Popcorn',
          details: [
            { label: 'Harvest period', value: 'February / March' },
            { label: 'Expansion', value: '38/40, 40/42, 42/44' },
            { label: 'K - 10', value: '55-65, 65-75, 75-85' },
            { label: 'Humidity max.', value: '14.50%' },
          ],
        },
        {
          title: 'Confectionery Sunflower',
          details: [
            { label: 'Harvest period', value: 'March / April' },
            { label: 'Size', value: '16/64, 20/64, 22/64, 24/64' },
          ],
        },
        {
          title: 'Alubia Beans',
          details: [
            { label: 'Harvest period', value: 'June / July' },
            { label: 'Foreign material max.', value: '1%' },
            { label: 'Stained grains max.', value: '1%' },
            { label: 'Slightly stained grains max.', value: '3%' },
          ],
        },
        {
          title: 'DRKB Beans',
          details: [
            { label: 'Harvest period', value: 'June / July' },
            { label: 'Foreign material max.', value: '1%' },
            { label: 'Stained grains max.', value: '1%' },
            { label: 'Slightly stained grains max.', value: '3%' },
          ],
        },
        {
          title: 'Black Bean',
          details: [
            { label: 'Harvest period', value: 'June / July' },
            { label: 'Foreign material max.', value: '1%' },
            { label: 'Stained grains max.', value: '1%' },
            { label: 'Slightly stained grains max.', value: '3%' },
          ],
        },
        {
          title: 'Green Mung Beans',
          details: [
            { label: 'Harvest period', value: 'March / April' },
            { label: 'Foreign material max.', value: '1%' },
            { label: 'Damaged beans max.', value: '3%' },
          ],
        },
        {
          title: 'Chickpeas',
          details: [
            { label: 'Harvest period', value: 'November / December' },
            { label: 'Variety', value: 'Kabuli' },
            { label: 'Size', value: '7mm, 8mm, 9mm, split' },
            { label: 'Foreign material max.', value: '1%' },
            { label: 'Damaged beans max.', value: '3%' },
            { label: 'Green beans max.', value: '3%' },
          ],
        },
        {
          title: 'Peas',
          details: [
            { label: 'Harvest period', value: 'November / December' },
            { label: 'Variety', value: 'Green, yellow, whole and split' },
            { label: 'Size', value: '4 to 7 mm' },
            { label: 'Whitening max.', value: '3/6%' },
            { label: 'Foreign material max.', value: '1%' },
            { label: 'Split grain max.', value: '3%' },
          ],
        },
      ],
    },
    contact: {
      overline: 'GET IN TOUCH',
      title: 'Contact',
      subtitle: 'We are here to help you',
      description: 'We are ready to answer your business inquiries and provide you with the best legumes on the market.',
      info: {
        location: 'Buenos Aires, Argentina',
        email: 'executiondesk@scct.com.ar',
        phone: '+54 9 1155790550 - (Tomas Rosner)',
        phone2: '+54 91158737974 - (Jorge Zocca)',

      },
      form: {
        name: 'Name',
        company: 'Company',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
      },
    },
    footer: {
      description: 'Specialists in the export of high-quality legumes and grains. We connect South America with the world with excellence and commitment.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      rights: 'All rights reserved.',
      designed: 'Designed with excellence',
    },
  },
};
