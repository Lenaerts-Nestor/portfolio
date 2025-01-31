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
  children: React.ReactNode;
}

export interface TechGridProps {
  technologies: TechStackItem[];
  className?: string;
}
