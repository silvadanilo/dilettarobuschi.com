import Image from 'next/image';

export const metadata = {
    title: 'About | Diletta Robuschi',
    description: 'Biography of Diletta Robuschi',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold uppercase tracking-widest mb-8">About</h1>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="w-full md:w-1/3 aspect-[3/4] relative bg-gray-100 dark:bg-gray-900 overflow-hidden">
                        {/* Profile Image */}
                        <Image
                            src="https://files.supersite.aruba.it/media/18328_2e6b57b63b9cb03a2bdd23f439099ab7624f95e0.jpeg/v1/x_139,y_0,w_775,h_700,dpr_2/2e6b57b63b9cb03a2bdd23f439099ab7624f95e0.webp"
                            alt="Diletta Robuschi"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>

                    <div className="w-full md:w-2/3 space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                        <p>
                            Diletta Robuschi, born in Mirandola in 1998, is an Italian director and musicologist. Her artistic journey began with formal music education, studying oboe at the Conservatory of Parma before earning a degree in Musicology from the University of Pavia, where she specialized in musical dramaturgy.
                        </p>
                        <p>
                            She honed her theatrical skills through courses in directing, acting, and contemporary dance. Her early career in opera includes a stage direction internship at the Festival Verdi of Teatro Regio di Parma for "Un ballo in maschera" (2021) and working as an assistant director for "Scipione delle Spagne" at Teatro Malibran in Venice (2022). She is slated to be an assistant director for "Falstaff" at the Festival Verdi in 2025.
                        </p>
                        <p>
                            Her directorial debut came in 2023 with the short film "Il ballo delle ingrate - the body of emancipation", inspired by Monteverdi. In 2024, she debuted at the Monteverdi Festival in Cremona with "Voi d'Amor ribelle!", a multidisciplinary performance combining contemporary dance and ancient music.
                        </p>
                        <p>
                            Currently, she is pursuing a master's degree in Musicology at the University of Pavia and continues to explore contemporary dance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
