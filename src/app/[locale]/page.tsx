import Image from 'next/image';
import Link from 'next/link';
import { getWorks } from '@/lib/works';
import WorkCard from '@/components/WorkCard';
import { useTranslation } from '@/i18n/useTranslation';
import { Locale } from '@/i18n/translations';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { t } = useTranslation(locale as Locale);
  const works = getWorks();
  const featuredWorks = works.slice(0, 3);

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://files.supersite.aruba.it/media/18328_2e6b57b63b9cb03a2bdd23f439099ab7624f95e0.jpeg/v1/w_1857,h_0,dpr_2/18328_2e6b57b63b9cb03a2bdd23f439099ab7624f95e0.webp"
            alt="Diletta Robuschi Hero"
            fill
            priority
            className="object-cover object-bottom"
          />
          {/* Gradient Overlay for readability - lighter on top */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]/90 z-10"></div>
        </div>

        <div className="relative z-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest mb-6 text-white drop-shadow-lg">
            {t.home.title}
          </h1>
          <p className="text-sm md:text-base uppercase tracking-widest text-gray-200 max-w-md leading-relaxed mx-auto drop-shadow-md">
            {t.home.subtitle}
          </p>
        </div>
      </section>

      {/* Featured Works */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xl font-bold uppercase tracking-widest">{t.home.selectedWorks}</h2>
          <Link href={`/${locale}/works`} className="text-xs uppercase tracking-widest border-b border-gray-600 pb-1 hover:border-white transition-colors">
            {t.home.viewAll}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <WorkCard key={work.id} work={work} locale={locale as Locale} />
          ))}
        </div>
      </section>
    </div>
  );
}
