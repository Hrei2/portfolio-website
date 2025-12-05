import Image from 'next/image';
import Link from 'next/link';

export const MDXComponents = {
    h1: (props: any) => (
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-8 mb-4" {...props} />
    ),
    h2: (props: any) => (
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-6 mb-3" {...props} />
    ),
    h3: (props: any) => (
        <h3 className="text-2xl font bold text-gray-900 dark:text-white mt-4 mb-2" {...props} />
    ),
    p: (props: any) => (
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed mb-4" {...props} />
    ),
    ul: (props: any) => (
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300" {...props} />
    ),
    ol: (props: any) => (
        <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300" {...props} />
    ),
    li: (props: any) => (
        <li className="ml-4" {...props} />
    ),
    a: (props: any) => (
        <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />
    ),
    code: (props: any) => (
        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono" {...props} />
    ),
    pre: (props: any) => (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
    ),
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 dark:text-gray-300 my-4" {...props} />
    ),
    img: (props: any) => (
        <img className="rounded-lg my-4 mx-auto" {...props} />
    ),
    hr: () => (
        <hr className="my-8 border-gray-300 dark:border-gray-700" />
    ),
};