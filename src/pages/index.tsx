import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { techStack } from "@/config/techStack";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { projects } from "@/config/projects";
import TechGrid from "@/components/TechGrid";
import InfoCard from "@/components/cards/InfoCard";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{`WPL Portfolio - ${t("navigation.home")}`}</title>
        <meta name="description" content={t("home.description")} />
      </Head>

      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t("home.welcome")}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("home.description").replace("'", "&apos;")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              {t("home.readBlog")}
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 border-2 border-indigo-500 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              {t("home.aboutMe")}
            </Link>
          </div>
        </section>

        {/* Technologies Section */}
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
          {t("home.technologies")}
          <span className="absolute left-0 right-0 -bottom-4 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto max-w-6xl"></span>
        </h2>
        <TechGrid technologies={techStack} className="mb-12" />

        {/* Projects Section */}
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
          {t("home.technologies")}
          <span className="absolute left-0 right-0 -bottom-4 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto max-w-6xl"></span>
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <InfoCard key={project.title} project={project} />
          ))}
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
            {t("home.experienceTitle")}
            <span className="absolute left-0 right-0 -bottom-4 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto max-w-6xl"></span>
          </h2>
          <section className="space-y-6 mb-12 max-w-3xl mx-auto">
            {/* Beego Experience */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {t("home.positions.ictConsultant")}
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    {t("home.companies.beego")}
                  </p>
                </div>
                <span className="text-sm text-slate-500">
                  {t("home.experienceDates.beego")}
                </span>
              </div>
              <p className="mt-2 text-slate-600">
                {t("home.locations.remote")}
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {t("home.experienceDescriptions.beego")}
              </p>
            </div>

            {/* Digipolis Experience */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {t("home.positions.ictSupport")}
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    {t("home.companies.digipolis")}
                  </p>
                </div>
                <span className="text-sm text-slate-500">
                  {t("home.experienceDates.digipolis")}
                </span>
              </div>
              <p className="mt-2 text-slate-600">
                {t("home.locations.antwerp")}
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {t("home.experienceDescriptions.digipolis")}
              </p>
            </div>
          </section>
        </section>

        {/* Core Skills Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
            {t("home.coreSkillsTitle")}
            <span className="absolute left-0 right-0 -bottom-4 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto max-w-6xl"></span>
          </h2>
          <section className="mb-12 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {t("home.skills", { returnObjects: true }).map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <span className="text-indigo-600 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
            {t("home.educationTitle")}
            <span className="absolute left-0 right-0 -bottom-4 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto max-w-6xl"></span>
          </h2>
          <section className="mb-12 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {t("home.education.degree")}
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    {t("home.education.school")}
                  </p>
                </div>
                <span className="text-sm text-slate-500">
                  {t("home.education.duration")}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-slate-600">{t("home.education.courses")}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                    {t("home.education.courseList.web")}
                  </span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                    {t("home.education.courseList.systems")}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
