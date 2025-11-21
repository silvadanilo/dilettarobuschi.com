import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
    content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    return (
        <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ children }) => (
                        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-6 mt-12 text-white">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-xl font-semibold uppercase tracking-wide mb-4 mt-8 text-gray-200">
                            {children}
                        </h3>
                    ),
                    p: ({ children }) => (
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            {children}
                        </p>
                    ),
                    strong: ({ children }) => (
                        <strong className="font-bold text-white">
                            {children}
                        </strong>
                    ),
                    em: ({ children }) => (
                        <em className="italic text-gray-400">
                            {children}
                        </em>
                    ),
                    ul: ({ children }) => (
                        <ul className="list-none space-y-3 mb-6 ml-0">
                            {children}
                        </ul>
                    ),
                    li: ({ children }) => (
                        <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-white mt-1.5">•</span>
                            <span>{children}</span>
                        </li>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-gray-600 pl-6 my-8 italic text-xl text-gray-400">
                            {children}
                        </blockquote>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
