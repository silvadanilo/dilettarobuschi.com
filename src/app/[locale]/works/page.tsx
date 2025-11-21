import works from '@/data/works.json';
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

    return (
        <div className="container mx-auto px-6 pt-32 pb-12">
            <h1 className="text-3xl font-bold uppercase tracking-widest mb-12">{t.works.title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {works.map((work) => (
                    <WorkCard key={work.id} work={work} locale={locale as Locale} />
                ))}
            </div>
        </div>
    );
}
