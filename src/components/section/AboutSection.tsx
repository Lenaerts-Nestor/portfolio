import React from "react";
import { LucideIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface AboutSectionProps {
    icon: LucideIcon;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
    icon,
    title,
    children,
    className = ""
}) => (
    <section className={`mb-12 ${className}`}>
        <SectionHeader icon={icon} title={title} />
        {children}
    </section>
);

export default AboutSection;