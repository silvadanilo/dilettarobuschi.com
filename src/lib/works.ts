import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Work {
    id: string;
    title: string;
    slug: string;
    thumbnail: string;
    directorRole: 'director' | 'assistant';
    description: string;
    duration?: string;
    venue?: {
        event?: string;
        name?: string;
        location?: string;
    };
    credits?: {
        role: string;
        name: string;
    }[];
    ensembles?: string[];
    links?: {
        label: string;
        url: string;
    }[];
    media?: string[];
}

const worksDirectory = path.join(process.cwd(), 'src/content/works');

export function getWorks(): Work[] {
    // Check if directory exists
    if (!fs.existsSync(worksDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(worksDirectory);
    const allWorksData = fileNames.map((fileName) => {
        // Remove ".mdoc" from file name to get slug
        const slug = fileName.replace(/\.mdoc$/, '');

        // Read markdown file as string
        const fullPath = path.join(worksDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents);

        // Combine the data with the id and contentHtml
        return {
            id: slug,
            slug: slug,
            title: data.title,
            thumbnail: data.thumbnail,
            directorRole: data.directorRole || 'director',
            description: content.trim(), // Use the markdown content as description
            duration: data.duration,
            venue: data.venue,
            credits: data.credits,
            ensembles: data.ensembles,
            links: data.links,
            media: data.media,
        } as Work;
    });

    // Sort works if needed (e.g. by date if we had one, or just keep file order/alphabetical)
    // For now, let's return them as is.
    return allWorksData;
}

export function getWork(slug: string): Work | undefined {
    const fullPath = path.join(worksDirectory, `${slug}.mdoc`);

    if (!fs.existsSync(fullPath)) {
        return undefined;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        id: slug,
        slug: slug,
        title: data.title,
        thumbnail: data.thumbnail,
        directorRole: data.directorRole || 'director',
        description: content.trim(),
        duration: data.duration,
        venue: data.venue,
        credits: data.credits,
        ensembles: data.ensembles,
        links: data.links,
        media: data.media,
    } as Work;
}
