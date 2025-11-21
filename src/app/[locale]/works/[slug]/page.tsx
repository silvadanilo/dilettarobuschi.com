import { getWorks, getWork } from '@/lib/works';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Lightbox from '@/components/Lightbox';
import { useTranslation } from '@/i18n/useTranslation';
import { Locale } from '@/i18n/translations';

export async function generateStaticParams() {
    const locales: Locale[] = ['it', 'en'];
    const params: { locale: Locale; slug: string }[] = [];
    const works = getWorks();

    locales.forEach(locale => {
        works.forEach(work => {
            params.push({ locale, slug: work.slug });
        });
    });

    return params;
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
    const { slug, locale } = await params;
    const { t } = useTranslation(locale as Locale);
    const work = getWork(slug);

    if (!work) {
        notFound();
        return null;
    }

    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-6 pt-32 pb-16">
                {/* Back Link */}
                <Link
                    href={`/${locale}/works`}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors mb-12 group"
                >
                    <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {t.works.backToWorks}
                </Link>

                <div className="max-w-6xl mx-auto">
                    {/* Title Section */}
                    <div className="mb-16 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            {work.title}
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-16 max-w-3xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                            {/* Main Description */}
                            <p className="text-xl text-gray-200 leading-relaxed mb-8 italic">
                                {work.description}
                            </p>

                            {/* Venue Information */}
                            {work.venue && (
                                <div className="mb-8 pb-8 border-b border-white/10">
                                    {work.venue.event && (
                                        <p className="text-lg text-gray-300 mb-2">
                                            <span className="text-gray-500 text-sm uppercase tracking-wider block mb-1">{t.works.event}</span>
                                            {work.venue.event}
                                        </p>
                                    )}
                                    {work.venue.name && (
                                        <p className="text-lg text-gray-300 mb-2">
                                            <span className="text-gray-500 text-sm uppercase tracking-wider block mb-1">{t.works.venue}</span>
                                            {work.venue.name}
                                        </p>
                                    )}
                                    {work.venue.location && (
                                        <p className="text-gray-400 text-sm">
                                            {work.venue.location}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Credits */}
                            {work.credits && work.credits.length > 0 && (
                                <div className="mb-8 pb-8 border-b border-white/10">
                                    <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-4">{t.works.credits}</h3>
                                    <div className="space-y-2">
                                        {work.credits.map((credit, index) => (
                                            <p key={index} className="text-gray-300">
                                                <span className="text-gray-500 text-sm uppercase tracking-wider">{credit.role}</span>
                                                <span className="ml-2 font-medium text-white">{credit.name}</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Duration */}
                            {work.duration && (
                                <div className="mb-8 pb-8 border-b border-white/10">
                                    <p className="text-gray-300">
                                        <span className="text-gray-500 text-sm uppercase tracking-wider">{t.works.duration}</span>
                                        <span className="ml-2 font-medium text-white">{work.duration}</span>
                                    </p>
                                </div>
                            )}

                            {/* Ensembles */}
                            {work.ensembles && work.ensembles.length > 0 && (
                                <div className="mb-8 pb-8 border-b border-white/10">
                                    <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-3">{t.works.ensemble}</h3>
                                    {work.ensembles.map((ensemble, index) => (
                                        <p key={index} className="text-white font-medium text-lg mb-2">
                                            {ensemble}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {/* External Links */}
                            {(work as any).links && (work as any).links.length > 0 && (
                                <div>
                                    <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-3">Link</h3>
                                    <div className="space-y-3">
                                        {(work as any).links.map((link: any, index: number) => (
                                            <a
                                                key={index}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group w-fit"
                                            >
                                                <span className="font-medium">{link.label}</span>
                                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Gallery Section */}
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 text-center">{t.works.gallery}</h2>
                        {work.media && work.media.length > 0 ? (
                            <Lightbox images={work.media} alt={work.title} />
                        ) : (
                            <div className="aspect-video bg-gray-900 flex items-center justify-center relative rounded-lg overflow-hidden">
                                <img
                                    src={work.thumbnail}
                                    alt={work.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
