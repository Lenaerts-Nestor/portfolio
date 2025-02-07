// src/pages/about.tsx
import { useTranslation } from "next-i18next";
import {
  GraduationCap,
  Languages,
  BrainCircuit,
  Target,
  BookOpen,
} from "lucide-react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose lg:prose-lg">
      {/* Introduction */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] tracking-normal py-1">
          Nestor Lenaerts
        </h1>
        <h2 className="text-2xl font-semibold text-slate-800 leading-[1.4]">
          {t("about.title")}
        </h2>
      </section>

      {/* Goals Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-8 h-8 text-indigo-600" />
          <h3 className="text-xl font-semibold text-slate-800">
            {t("about.goalsTitle")}
          </h3>
        </div>
        <p className="text-slate-600 leading-relaxed mb-6">
          {t("about.goalsText")}
        </p>
        <div className="border-l-4 border-indigo-100 pl-4">
          <p className="text-slate-600 italic">{t("about.goalsPhilosophy")}</p>
        </div>
      </section>

      {/* Methods Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          <h3 className="text-xl font-semibold text-slate-800">
            {t("about.methodsTitle")}
          </h3>
        </div>
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-100 pl-4">
            <h4 className="text-lg font-semibold mb-3 text-slate-800">
              {t("about.methodsApproach")}
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {t("about.methodsText1")}
            </p>
          </div>

          <div className="border-l-4 border-indigo-100 pl-4">
            <h4 className="text-lg font-semibold mb-3 text-slate-800">
              {t("about.methodsLearning")}
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {t("about.methodsText2")}
            </p>
          </div>
        </div>
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
