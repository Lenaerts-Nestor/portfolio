// src/pages/about.tsx
import { useTranslation } from "next-i18next";
import { GraduationCap, Languages, BrainCircuit } from "lucide-react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose lg:prose-lg">
      {/* Introduction */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Nestor Lenaerts
        </h1>
        <h2 className="text-2xl font-semibold text-slate-800">
          {t("about.title")}
        </h2>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-8 h-8 text-indigo-600" />
          <h3 className="text-xl font-semibold text-slate-800">
            {t("about.educationTitle")}
          </h3>
        </div>
        <p className="text-slate-600 leading-relaxed mb-6">
          {t("about.educationText")}
        </p>
      </section>

      {/* Languages Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Languages className="w-8 h-8 text-indigo-600" />
          <h3 className="text-xl font-semibold text-slate-800">
            {t("about.languagesTitle")}
          </h3>
        </div>
        <p className="text-slate-600 leading-relaxed">
          {t("about.languagesText")}
        </p>
      </section>

      {/* AI Perspective Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <BrainCircuit className="w-8 h-8 text-indigo-600" />
          <h3 className="text-xl font-semibold text-slate-800">
            {t("about.aiTitle")}
          </h3>
        </div>

        <div className="space-y-8">
          <div className="border-l-4 border-indigo-100 pl-4">
            <h4 className="text-lg font-semibold mb-3 text-slate-800">
              {t("about.aiPhilosophy")}
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {t("about.aiPhilosophyText")}
            </p>
          </div>

          <div className="border-l-4 border-indigo-100 pl-4">
            <h4 className="text-lg font-semibold mb-3 text-slate-800">
              {t("about.aiApproach")}
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {t("about.aiApproachText")}
            </p>
          </div>

          <blockquote className="text-slate-600 italic border-l-4 border-indigo-600 pl-4 py-2">
            {t("about.aiExample")}
          </blockquote>
        </div>
      </section>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "nl", ["common"])),
  },
});
