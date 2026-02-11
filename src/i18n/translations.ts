export const translations = {
    it: {
        nav: {
            works: 'Lavori',
            about: 'Chi sono',
            contact: 'Contatti',
        },
        home: {
            title: 'Diletta Robuschi',
            subtitle: 'Regista con sede in Italia. Storytelling visivo per spot pubblicitari, video musicali e film.',
            selectedWorks: 'Lavori Selezionati',
            viewAll: 'Vedi Tutti',
        },
        works: {
            title: 'Lavori',
            directorWorks: 'Lavori (Regista)',
            assistantDirectorWorks: 'Lavori (Aiuto Regista)',
            backToWorks: 'Torna ai Lavori',
            gallery: 'Galleria',
            event: 'Evento',
            venue: 'Venue',
            credits: 'Credits',
            ensemble: 'Ensemble',
            duration: 'Durata',
        },
        about: {
            title: 'Chi sono',
            biography: 'Biografia',
        },
        contact: {
            title: 'Contatti',
            getInTouch: 'Mettiamoci in contatto',
            email: 'Email',
            socialLinks: 'Link Social',
            description: 'Per richieste, collaborazioni o semplicemente per un saluto, scrivimi una email.',
        },
    },
    en: {
        nav: {
            works: 'Works',
            about: 'About',
            contact: 'Contact',
        },
        home: {
            title: 'Diletta Robuschi',
            subtitle: 'Director based in Italy. Visual storytelling for commercials, music videos, and film.',
            selectedWorks: 'Selected Works',
            viewAll: 'View All',
        },
        works: {
            title: 'Works',
            directorWorks: 'Works (Director)',
            assistantDirectorWorks: 'Works (Assistant Director)',
            backToWorks: 'Back to Works',
            gallery: 'Gallery',
            event: 'Event',
            venue: 'Venue',
            credits: 'Credits',
            ensemble: 'Ensemble',
            duration: 'Duration',
        },
        about: {
            title: 'About',
            biography: 'Biography',
        },
        contact: {
            title: 'Contact',
            getInTouch: 'Get in touch',
            email: 'Email',
            socialLinks: 'Social Links',
            description: 'For inquiries, collaborations, or just to say hello, please reach out via email.',
        },
    },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations.it;
