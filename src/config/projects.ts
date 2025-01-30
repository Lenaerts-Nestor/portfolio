import { TechStackItem } from "./techStack";

export interface Project {
  title: string;
  description: string;
  href: string;
  techs: TechStackItem[];
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "My professional portfolio showcasing projects and internship experiences.",
    href: "#",
    techs: [
      // Reference existing techStack items by name
      ...require("./techStack").techStack.filter((t: { name: string }) =>
        ["React", "TypeScript", "Tailwind CSS"].includes(t.name)
      ),
    ],
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack online shopping platform with payment integration. with nothing more lorem lorem ",
    href: "#",
    techs: [
      ...require("./techStack").techStack.filter((t: { name: string }) =>
        ["Node.js", "React", "MongoDB"].includes(t.name)
      ),
    ],
  },
];
