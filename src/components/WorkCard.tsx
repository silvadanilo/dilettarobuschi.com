import Link from 'next/link';
import Image from 'next/image';

interface WorkProps {
    id: string;
    title: string;
    slug: string;
    thumbnail: string;
}

export default function WorkCard({ work }: { work: WorkProps }) {
    return (
        <Link href={`/works/${work.slug}`} className="group block">
            <div className="relative aspect-video overflow-hidden bg-gray-900 mb-4 rounded-lg">
                <Image
                    src={work.thumbnail}
                    alt={work.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-sm font-medium uppercase tracking-wide group-hover:text-gray-400 transition-colors">
                {work.title}
            </h3>
        </Link>
    );
}
