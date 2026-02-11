import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Locale } from '@/i18n/translations';

export interface HomeContent {
    heroImage: string;
    title: string;
    subtitle: string; // This will be the raw markdown content
}

export function getHomeContent(locale: Locale): HomeContent {
    const contentPath = path.join(process.cwd(), 'src', 'content', `home.${locale}.mdoc`);

    // Fallback to Italian if specific locale file doesn't exist
    const finalPath = fs.existsSync(contentPath)
        ? contentPath
        : path.join(process.cwd(), 'src', 'content', 'home.it.mdoc');

    const fileContent = fs.readFileSync(finalPath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
        heroImage: data.heroImage,
        title: data.title,
        subtitle: content,
    };
}
