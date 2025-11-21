import { useTranslation } from '@/i18n/useTranslation';
import { Locale } from '@/i18n/translations';

export const metadata = {
    title: 'Contact | Diletta Robuschi',
    description: 'Contact Diletta Robuschi',
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const { t } = useTranslation(locale as Locale);

    return (
        <div className="container mx-auto px-6 py-24 md:py-32">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-8">{t.contact.title}</h1>

                <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
                    {t.contact.description}
                </p>

                <a
                    href="mailto:info@dilettarobuschi.com"
                    className="inline-block text-2xl md:text-4xl font-light hover:text-gray-300 transition-colors border-b border-gray-700 pb-2"
                >
                    info@dilettarobuschi.com
                </a>

                <div className="mt-16 space-x-8">
                    {/* Social Links will be added when available */}
                </div>
            </div>
        </div>
    );
}
