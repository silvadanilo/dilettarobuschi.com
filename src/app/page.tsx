import Link from 'next/link';
import works from '@/data/works.json';
import WorkCard from '@/components/WorkCard';

export default function Home() {
  const featuredWorks = works.slice(0, 3);

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <section className="h-[50vh] min-h-[400px] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-transparent via-gray-900/20 to-black">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Diletta Robuschi
        </h1>
        <p className="text-sm md:text-base uppercase tracking-widest text-gray-400 max-w-md">
          Director based in Italy. Visual storytelling for commercials, music videos, and film.
        </p>
      </section>

      {/* Featured Works */}
      <section className="container mx-auto px-6 -mt-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold uppercase tracking-widest">Selected Works</h2>
          <Link href="/works" className="text-xs uppercase tracking-widest border-b border-gray-600 pb-1 hover:border-white transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>
    </div>
  );
}
