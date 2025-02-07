import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Calendar, X, ChevronRight } from "lucide-react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-4xl max-h-[90vh] bg-white shadow-xl transition-all rounded-2xl flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800">Week 1</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-red-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-red-500" />
            </button>
          </div>
          <div className="overflow-y-auto no-scrollbar flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this to your global CSS file or as a style tag in your _app.tsx
const GlobalStyle = () => (
  <style jsx global>{`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
);

const BlogPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation("common");

  // Get updates from translations
  const updates = t("blog.dailyUpdates.week1.days", { returnObjects: true }) as Array<{ date: string; content: string }>;

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{`WPL Portfolio - ${t("navigation.blog")}`}</title>
        <meta name="description" content={t("blog.description")} />
      </Head>

      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center pt-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] tracking-normal py-2">
              {t("blog.title")}
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-[1.8] py-1">
              {t("blog.description")}
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div
            onClick={() => setIsModalOpen(true)}
            className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-[1.02] flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Week 1</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t("blog.dailyUpdates.week1.overview")}
            </p>
            <div className="mt-auto flex items-center text-indigo-600 font-semibold">
              <span>{t("blog.readMore")}</span>
              <ChevronRight className="w-5 h-5 ml-1" />
            </div>
          </div>
        </section>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="p-6">
            <div className="space-y-6">
              {updates.map((update, index) => (
                <div
                  key={index}
                  className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
                >
                  <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                    {update.date}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {update.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "nl", ["common"])),
  },
});