import { Project } from '@/interfaces/interface';

export const projects: Project[] = [
  {
    title: 'Timesheet',
    description:
      'This is an web application designed for internal business tracking and management.',
    href: '',
    techs: [
      ...require('./techStack').techStack.filter((t: { name: string }) =>
        [
          'Node.js',
          'TypeScript',
          'Drizzle',
          'Fastify',
          'PostgreSQL',
          'React',
        ].includes(t.name)
      ),
    ],
  },
  {
    title: 'Web Development',
    description:
      'simple website that allows users to log in and view data from a MongoDB database. Administrators have additional privileges to modify data values and images.',
    href: 'https://github.com/Lenaerts-Nestor/Project_Game_Development',
    techs: [
      ...require('./techStack').techStack.filter((t: { name: string }) =>
        ['Express.js', 'MongoDB', 'Node.js', 'TypeScript'].includes(t.name)
      ),
    ],
  },
  {
    title: 'Game Development',
    description:
      'This is a 2D platform game developed using MonoGame and C#. Follow the instructions below to set up and run the game on your local machine.',
    href: 'https://github.com/Lenaerts-Nestor/Project_Game_Development',
    techs: [
      ...require('./techStack').techStack.filter((t: { name: string }) =>
        ['C#', 'MonoGame'].includes(t.name)
      ),
    ],
  },
  {
    title: 'Web_API',
    description:
      'This project demonstrates the development of web services based on open standards such as XML, JSON, and HTTP(S)..',
    href: 'https://github.com/Lenaerts-Nestor/Project_Web_API',
    techs: [
      ...require('./techStack').techStack.filter((t: { name: string }) =>
        ['.NET', 'SQL'].includes(t.name)
      ),
    ],
  },

  {
    title: 'ParkFlow',
    description:
      'Flutter-app waarmee gebruikers parkeerplekken kunnen reserveren.bekijken, verlengen of annuleren.Gebruikers kunnen ook hun voertuig selecteren uit een lijst van automerken',
    href: 'https://github.com/Lenaerts-Nestor/Project_Game_Development',
    techs: [
      ...require('./techStack').techStack.filter((t: { name: string }) =>
        ['Flutter', 'Firebase'].includes(t.name)
      ),
    ],
  },

  {
    title: 'car_info',
    description:
      "this is a project where i test my skils of react native and focused on mobile devices where i test my skils to get API's correctly and use the CRUDS functions ",
    href: 'https://github.com/Lenaerts-Nestor/Project_Game_Development',
    techs: [
      ...require('./techStack').techStack.filter((t: { name: string }) =>
        ['React', 'TypeScript', 'CSS'].includes(t.name)
      ),
    ],
  },
];
