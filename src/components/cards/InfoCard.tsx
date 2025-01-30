// src/components/InfoCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/config/projects";
import { useTranslation } from "next-i18next";
import { Briefcase } from "lucide-react";

export default function InfoCard({ project }: { project: Project }) {
  const { t } = useTranslation("common");

  return (
    <Link
      href={project.href}
      className="group flex flex-1 h-full transform transition-all duration-300 hover:scale-[1.02] hover:z-10"
    >
      <div className="w-full h-full bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md flex flex-col">
        {/* Main Content */}
        <div className="flex flex-col items-center text-center mb-4">
          <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Briefcase size={24} />
          </div>

          <h3 className="text-xl font-semibold mb-2 text-slate-800">
            {project.title}
          </h3>

          <p className="text-slate-600 line-clamp-3 flex-grow">
            {project.description}
          </p>
        </div>

        {/* Always Visible Tech Footer */}
        <div className="border-t border-slate-100 pt-4 mt-auto">
          <h4 className="text-sm font-medium text-slate-500 mb-2">
            <span className="text-indigo-600">#</span> {t("techUsed")}
          </h4>

          <div className="flex flex-wrap justify-center gap-2">
            {project.techs.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center px-2 py-1 rounded-md bg-opacity-10"
                style={{
                  backgroundColor: `${tech.color.replace("text-", "")}1a`,
                }}
              >
                <div className="relative w-4 h-4 mr-1">
                  <Image
                    src={tech.iconPath}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className={`text-xs ${tech.color}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
