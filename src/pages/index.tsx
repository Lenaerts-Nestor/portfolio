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

        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
          Technologies
          <span className="absolute left-0 right-0 -bottom-4 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto max-w-6xl"></span>
        </h2>

        {/** i want a a title here saying "technologies" on big  */}
        <TechGrid technologies={techStack} className="mb-12" />

        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
          Projects
          <span className="absolute left-0 right-0 -bottom-4 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto max-w-6xl"></span>
        </h2>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <InfoCard key={project.title} project={project} />
          ))}
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
