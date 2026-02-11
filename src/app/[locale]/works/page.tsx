import { getWorks } from '@/lib/works';
import WorkCard from '@/components/WorkCard';
import { useTranslation } from '@/i18n/useTranslation';
import { Locale } from '@/i18n/translations';

export const metadata = {
    title: 'Works | Diletta Robuschi',
    description: 'Portfolio of works by Diletta Robuschi',
};

export default async function WorksPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const { t } = useTranslation(locale as Locale);
    const works = getWorks();

    // Split works by director role
    const directorWorks = works.filter(w => w.directorRole === 'director');
    const assistantWorks = works.filter(w => w.directorRole === 'assistant');

    return (
        <div className="container mx-auto px-6 pt-32 pb-12">
            <h1 className="text-3xl font-bold uppercase tracking-widest mb-12">{t.works.title}</h1>

            {/* Director Works Section */}
            {directorWorks.length > 0 && (
                <div className="mb-16">
                    <h2 className="text-xl font-bold uppercase tracking-widest mb-8 text-gray-400">
                        {t.works.directorWorks}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {directorWorks.map((work) => (
                            <WorkCard key={work.id} work={work} locale={locale as Locale} />
                        ))}
                    </div>
                </div>
            )}

            {/* Assistant Director Works Section */}
            {assistantWorks.length > 0 && (
                <div>
                    <h2 className="text-xl font-bold uppercase tracking-widest mb-8 text-gray-400">
                        {t.works.assistantDirectorWorks}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {assistantWorks.map((work) => (
                            <WorkCard key={work.id} work={work} locale={locale as Locale} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
