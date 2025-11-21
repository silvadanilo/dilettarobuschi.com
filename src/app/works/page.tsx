import works from '@/data/works.json';
import WorkCard from '@/components/WorkCard';

export const metadata = {
    title: 'Works | Diletta Robuschi',
    description: 'Portfolio of works by Diletta Robuschi',
};

export default function WorksPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold uppercase tracking-widest mb-12">All Works</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {works.map((work) => (
                    <WorkCard key={work.id} work={work} />
                ))}
            </div>
        </div>
    );
}
