import { placeholder } from './placeholder.js'

// ---------------------------------------------------------------
// EDIT THIS FILE to put your own details on the site.
// Swap placeholder(...) calls for real image paths such as
// '/images/project-1.jpg' (files live in client/public/images).
// ---------------------------------------------------------------

export const profile = {
  name: 'Your Name',
  tagline: 'Developer, problem solver, tea drinker.',
  intro:
    'Hi, I am Your Name. Write a few sentences here about who you are, what you build and what you are currently learning or looking for.',
  aboutText: [
    'This is the About Me page. Use this space to tell your story: where you are from, how you got into technology, and what you enjoy outside of work.',
    'Add a second paragraph about your skills, interests or goals. You can add as many paragraphs as you like in this list.',
  ],
  aboutImages: [
    { src: placeholder('Photo of me 1', '#6b8e9f', 600, 700), alt: 'Photo of me at work' },
    { src: placeholder('Photo of me 2', '#9f6b8e', 600, 700), alt: 'Photo of me outdoors' },
    { src: placeholder('Photo of me 3', '#8e9f6b', 600, 700), alt: 'Photo of me with friends' },
  ],
}

export const projects = [
  {
    id: 'project-one',
    title: 'Project One',
    summary: 'A short one-line summary of project one.',
    description:
      'Describe the project here: what problem it solves, what you built and what you learned. This is the project that appears as the featured project on the home page.',
    tech: ['React', 'Node.js', 'Express'],
    images: [
      { src: placeholder('Project One - screen 1', '#2f6f8f'), alt: 'Project One home screen' },
      { src: placeholder('Project One - screen 2', '#3a8f6f'), alt: 'Project One dashboard' },
      { src: placeholder('Project One - screen 3', '#8f6f3a'), alt: 'Project One settings' },
    ],
    links: [
      { label: 'Live site', href: 'https://example.com' },
      { label: 'Source code', href: 'https://github.com/your-username/project-one' },
    ],
  },
  {
    id: 'project-two',
    title: 'Project Two',
    summary: 'A short one-line summary of project two.',
    description:
      'Describe your second project. Mention the technologies you used and what makes it interesting.',
    tech: ['Python', 'PostgreSQL'],
    images: [
      { src: placeholder('Project Two - screen 1', '#7a4f9f'), alt: 'Project Two main view' },
      { src: placeholder('Project Two - screen 2', '#9f4f6a'), alt: 'Project Two details view' },
    ],
    links: [{ label: 'Source code', href: 'https://github.com/your-username/project-two' }],
  },
  {
    id: 'project-three',
    title: 'Project Three',
    summary: 'A short one-line summary of project three.',
    description:
      'Describe your third project. Add or remove projects by editing the projects list in this file.',
    tech: ['TypeScript', 'AWS'],
    images: [{ src: placeholder('Project Three', '#4f7a9f'), alt: 'Project Three preview' }],
    links: [],
  },
]

// The project shown on the home page.
export const featuredProjectId = 'project-one'

export const contact = {
  email: 'you@example.com',
  phone: '+44 7000 000000',
  location: 'Edinburgh, Scotland',
  socials: [
    { label: 'GitHub', href: 'https://github.com/your-username' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-username' },
  ],
}
