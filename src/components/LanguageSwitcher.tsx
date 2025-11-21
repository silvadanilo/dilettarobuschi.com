'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Locale } from '@/i18n/translations';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
    const pathname = usePathname();
    const router = useRouter();

    const switchLocale = (newLocale: Locale) => {
        // Remove current locale from pathname
        const pathWithoutLocale = pathname.replace(/^\/(it|en)/, '');
        // Add new locale
        const newPath = `/${newLocale}${pathWithoutLocale || ''}`;
        router.push(newPath);
    };

    return (
        <div className="flex items-center gap-2 text-sm">
            <button
                onClick={() => switchLocale('it')}
                className={`uppercase tracking-wider transition-colors ${currentLocale === 'it'
                        ? 'text-white font-medium'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
            >
                IT
            </button>
            <span className="text-gray-600">|</span>
            <button
                onClick={() => switchLocale('en')}
                className={`uppercase tracking-wider transition-colors ${currentLocale === 'en'
                        ? 'text-white font-medium'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
            >
                EN
            </button>
        </div>
    );
}
