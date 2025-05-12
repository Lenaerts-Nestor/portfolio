import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/config/projects';
import { useTranslation } from 'next-i18next';
import { Briefcase } from 'lucide-react';
import { Project } from '@/interfaces/interface';

export default function TechCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const { t } = useTranslation('common');

  return (
    <Link
      href={project.href}
      className='group flex flex-1 h-full transform transition-all duration-300 hover:scale-[1.02] hover:z-10'
    >
      <div
        className={`w-full h-full bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md flex flex-col min-h-[320px] ${className}`}
      >
        <div className='flex flex-col items-center text-center mb-6 space-y-4'>
          <div className='bg-indigo-100 text-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center'>
            <Briefcase size={24} />
          </div>

          <h3 className='text-xl font-semibold text-slate-800 px-2'>
            {project.title}
          </h3>

          <p className='text-slate-600 line-clamp-4 flex-grow text-sm leading-relaxed px-2'>
            {project.description}
          </p>
        </div>

        <div className='border-t border-slate-100 pt-4 mt-auto'>
          <h4 className='text-sm font-medium text-slate-500 mb-3 text-center'>
            <span className='text-indigo-600'>#</span> {t('techUsed')}
          </h4>

          <div className='flex flex-wrap justify-center gap-2'>
            {project.techs.map((tech) => (
              <div
                key={tech.name}
                className='flex items-center px-3 py-1 rounded-md bg-opacity-10 hover:bg-opacity-20 transition-colors'
                style={{
                  backgroundColor: `${tech.color.replace('text-', '')}1a`,
                }}
              >
                <div className='relative w-5 h-5 mr-1'>
                  <Image
                    src={tech.iconPath}
                    alt={tech.name}
                    fill
                    className='object-contain'
                  />
                </div>
                <span className={`text-xs ${tech.color} font-medium`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
