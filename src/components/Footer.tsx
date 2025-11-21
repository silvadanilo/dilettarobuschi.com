export default function Footer() {
    return (
        <footer className="py-8 border-t border-gray-100 dark:border-gray-800 mt-auto">
            <div className="container mx-auto px-6 text-center text-xs text-gray-500 uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Diletta Robuschi. All rights reserved.
            </div>
        </footer>
    );
}
