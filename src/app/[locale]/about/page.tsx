import Image from 'next/image';
import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { Locale } from '@/i18n/translations';
import { useTranslation } from '@/i18n/useTranslation';

export const metadata = {
    title: 'About | Diletta Robuschi',
    description: 'Biography of Diletta Robuschi',
};

function getAboutContent(locale: Locale) {
    const contentPath = join(process.cwd(), 'src', 'content', `about.${locale}.md`);
    const fileContent = readFileSync(contentPath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
        image: data.image as string,
        content,
    };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const { t } = useTranslation(locale as Locale);
    const { image, content } = getAboutContent(locale as Locale);

    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-6 pt-32 pb-16">
                <div className="max-w-6xl mx-auto">
                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
                        {/* Image Column - Takes 2 columns */}
                        <div className="lg:col-span-2">
                            <div className="sticky top-24">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                                    <Image
                                        src={image}
                                        alt="Diletta Robuschi"
                                        fill
                                        className="object-cover object-center"
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                </div>
                            </div>
                        </div>

                        {/* Content Column - Takes 3 columns */}
                        <div className="lg:col-span-3">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                                <MarkdownRenderer content={content} />
                            </div>
                        </div>
                    </div>

                    {/* Instructions for editing (visible only in development) */}
                    {process.env.NODE_ENV === 'development' && (
                        <div className="max-w-4xl mx-auto p-6 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                            <p className="text-sm text-blue-300 mb-2">
                                <strong>📝 Per modificare questa pagina:</strong>
                            </p>
                            <ol className="text-sm text-blue-200 space-y-1 ml-4 list-decimal">
                                <li>Apri il file: <code className="bg-blue-950/50 px-2 py-0.5 rounded">src/content/about.{locale}.md</code></li>
                                <li>Modifica il testo usando la sintassi Markdown</li>
                                <li>Per cambiare l'immagine, modifica l'URL nella sezione <code className="bg-blue-950/50 px-2 py-0.5 rounded">image:</code> in alto</li>
                                <li>Salva il file - le modifiche appariranno automaticamente!</li>
                            </ol>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
