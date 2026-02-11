import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: process.env.NODE_ENV === 'production'
        ? {
            kind: 'github',
            repo: 'silvadanilo/dilettarobuschi.com',
        }
        : {
            kind: 'local',
        },
    singletons: {
        homeIt: singleton({
            label: 'Home (Italian)',
            path: 'src/content/home.it',
            format: { contentField: 'subtitle' },
            schema: {
                heroImage: fields.text({ label: 'Hero Image URL' }),
                title: fields.text({ label: 'Main Title' }),
                subtitle: fields.document({
                    label: 'Subtitle / Description',
                    formatting: true,
                    links: true,
                }),
            },
        }),
        homeEn: singleton({
            label: 'Home (English)',
            path: 'src/content/home.en',
            format: { contentField: 'subtitle' },
            schema: {
                heroImage: fields.text({ label: 'Hero Image URL' }),
                title: fields.text({ label: 'Main Title' }),
                subtitle: fields.document({
                    label: 'Subtitle / Description',
                    formatting: true,
                    links: true,
                }),
            },
        }),
        aboutIt: singleton({
            label: 'About (Italian)',
            path: 'src/content/about.it',
            format: { contentField: 'content' },
            schema: {
                image: fields.text({ label: 'Image URL' }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: true,
                }),
            },
        }),
        aboutEn: singleton({
            label: 'About (English)',
            path: 'src/content/about.en',
            format: { contentField: 'content' },
            schema: {
                image: fields.text({ label: 'Image URL' }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: true,
                }),
            },
        }),
    },
    collections: {
        works: collection({
            label: 'Works',
            slugField: 'title',
            path: 'src/content/works/*',
            format: { contentField: 'description' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                thumbnail: fields.text({ label: 'Thumbnail URL' }),
                description: fields.document({
                    label: 'Description',
                    formatting: true,
                    links: true,
                }),
                duration: fields.text({ label: 'Duration' }),
                venue: fields.object({
                    event: fields.text({ label: 'Event' }),
                    name: fields.text({ label: 'Venue Name' }),
                    location: fields.text({ label: 'Location' }),
                }),
                credits: fields.array(
                    fields.object({
                        role: fields.text({ label: 'Role' }),
                        name: fields.text({ label: 'Name' }),
                    }),
                    { label: 'Credits', itemLabel: props => `${props.fields.role.value}: ${props.fields.name.value}` }
                ),
                ensembles: fields.array(fields.text({ label: 'Ensemble Name' }), { label: 'Ensembles' }),
                links: fields.array(
                    fields.object({
                        label: fields.text({ label: 'Label' }),
                        url: fields.text({ label: 'URL' }),
                    }),
                    { label: 'External Links', itemLabel: props => props.fields.label.value }
                ),
                media: fields.array(
                    fields.text({ label: 'Image URL' }),
                    { label: 'Media Gallery' }
                ),
            },
        }),
    },
});
