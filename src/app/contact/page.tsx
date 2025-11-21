export const metadata = {
    title: 'Contact | Diletta Robuschi',
    description: 'Contact Diletta Robuschi',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-3xl font-bold uppercase tracking-widest mb-8">Contact</h1>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                    For inquiries, collaborations, or just to say hello, please reach out via email.
                </p>

                <a
                    href="mailto:info@dilettarobuschi.com"
                    className="inline-block text-2xl md:text-3xl font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-black dark:border-white pb-2"
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
