import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  href: string;
  techs: TechStackItem[];
}

export interface TechStackItem {
  name: string;
  iconPath: string;
  color: string;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface TechGridProps {
  technologies: TechStackItem[];
  className?: string;
}
export interface HeroSectionProps {
  title: string;
  description: string;
  blogText: string;
  aboutText: string;
}
export interface AboutSectionProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
}

export interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}
export interface BadgeProps {
  text: string;
}

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
export interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
}
export interface CardProps {
  children: ReactNode;
  className?: string;
}
export interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
}
