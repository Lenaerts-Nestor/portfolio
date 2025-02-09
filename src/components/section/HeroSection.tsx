import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '../Button';

interface HeroSectionProps {
    title: string;
    description: string;
    blogText: string;
    aboutText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    blogText,
    aboutText,
}) => (
    <section className="text-center py-16 md:py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {title}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 shadow-lg">
                <Link href="/blog" className="flex items-center gap-2">
                    {blogText}
                    <ArrowRight size={20} />
                </Link>
            </Button>
            <Button className="border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50">
                <Link href="/about" className="flex items-center gap-2">
                    {aboutText}
                </Link>
            </Button>
        </div>
    </section>
);

export default HeroSection;