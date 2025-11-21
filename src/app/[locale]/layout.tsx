import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/translations';

export async function generateStaticParams() {
    return [{ locale: 'it' }, { locale: 'en' }];
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return (
        <>
            <Header locale={locale as Locale} />
            <main>{children}</main>
            <Footer locale={locale as Locale} />
        </>
    );
}
