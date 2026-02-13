import { useTranslation } from '@/i18n/useTranslation';
import { Locale } from '@/i18n/translations';
import { Mail, Instagram, Linkedin } from 'lucide-react';

export const metadata = {
    title: 'Contact | Diletta Robuschi',
    description: 'Contact Diletta Robuschi',
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const { t } = useTranslation(locale as Locale);

    return (
        <div className="container mx-auto px-6 py-24 md:py-32 min-h-[80vh] flex items-center justify-center">
            <div className="max-w-3xl w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-6">
                        {t.contact.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        {t.contact.description}
                    </p>
                </div>

                {/* Glassmorphism Card */}
                <div className="relative group">
                    {/* Gradient background glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(181,151,117)] to-[rgb(181,151,117)]/50 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl"></div>

                    {/* Main card */}
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                        {/* Email section */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[rgb(181,151,117)]/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Mail className="w-8 h-8 text-[rgb(181,151,117)]" />
                            </div>

                            <a
                                href="mailto:info@dilettarobuschi.com"
                                className="block text-2xl md:text-3xl font-light hover:text-[rgb(181,151,117)] transition-all duration-300 group/email"
                            >
                                <span className="border-b-2 border-transparent group-hover/email:border-[rgb(181,151,117)] pb-1 transition-all duration-300">
                                    info@dilettarobuschi.com
                                </span>
                            </a>
                        </div>

                        {/* Divider */}
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto my-8"></div>

                        {/* Social Links */}
                        <div className="flex items-center justify-center gap-6">
                            <a
                                href="https://instagram.com/dilettarobuschi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/social flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[rgb(181,151,117)]/50 transition-all duration-300"
                            >
                                <Instagram className="w-5 h-5 text-gray-400 group-hover/social:text-[rgb(181,151,117)] transition-colors duration-300" />
                                <span className="text-sm uppercase tracking-wider text-gray-400 group-hover/social:text-white transition-colors duration-300">
                                    Instagram
                                </span>
                            </a>

                            <a
                                href="https://linkedin.com/in/dilettarobuschi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/social flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[rgb(181,151,117)]/50 transition-all duration-300"
                            >
                                <Linkedin className="w-5 h-5 text-gray-400 group-hover/social:text-[rgb(181,151,117)] transition-colors duration-300" />
                                <span className="text-sm uppercase tracking-wider text-gray-400 group-hover/social:text-white transition-colors duration-300">
                                    LinkedIn
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer note */}
                <p className="text-center text-sm text-gray-500 mt-8">
                    {locale === 'it'
                        ? 'Rispondo solitamente entro 24-48 ore'
                        : 'I usually respond within 24-48 hours'}
                </p>
            </div>
        </div>
    );
}
