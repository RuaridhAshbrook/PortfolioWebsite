import { placeholder } from './placeholder.js'

// ---------------------------------------------------------------
// EDIT THIS FILE to put your own details on the site.
// Swap placeholder(...) calls for real image paths such as
// '/images/project-1.jpg' (files live in client/public/images).
// ---------------------------------------------------------------

export const profile = {
  name: 'Ruaridh Ashbrook',
  intro:
    'Hi, I am Ruaridh Ashbrook. I am a third year Software Engineer at Heriot-Watt university. I have an interest in machine learning, artificial intelligence and computer vision.',
  aboutText: [
    'My interest in computer science began when my dad brought home a copy of super mario brothers for the Wii. From then I have always loved video games and at the age of 11 I got interested in how they were made. I began with python text adventure games at a coding club in code base, the helpers there then showed me Unity, which at first I was completely lost with but after watching some tutorials and buying a Udemy course I got the hang of it and made some small Unity projects. Over time I found that the scale of games I wanted to make were not possible in a reasonable timeframe when I was the only developer so I moved away from game design and into software engineering and machine learning. I started off by improving my core coding skills, at the time the main language that i knew was C# so i bought some more courses on Udemy and while I had already been applying lots of core coding concepts with my game design I did not have a strong understanding of the more advanced concepts which this course taught me. Then I joined university for computing science and I took up an interest in machine learning and data science so I started taking some courses on Kaggle to learn pandas, matplotlib and pytorch. I am currently aspiring to be a machine learning and artificial intelligence engineer and I am currently working on an app which uses computer vision to detect sudokus and solve them.',
    'I currently have skills with Pyhton, Pytorch, Pandas, Matplotlib, Java, Javascript, React, Node JS, SQL, Postgre, Unity, C#, HTML, CSS, Git and Github, and I am currently learning more about computer vision and creating classifiers.',
  ],
  aboutImages: [
    { src: './aboutme1.jpeg', alt: 'Photo of me at work' },
    { src: './aboutme2.jpg', alt: 'Photo of me in a Thai cooking class' },
    { src: './pfp.jpg', alt: 'Photo of me with friends' },
  ],
}

export const projects = [
  {
    id: 'project-one',
    title: 'Sudoku Solving Application',
    summary: 'An application which uses computer vision to detect and solve sudokus.',
    description:
      'This application uses computer vision to detect an image of a sudoku, it then uses a digit classifier and a backtracking algorithm to solve the sudoku and display the solution to the user. I have used pytorch to create a digit classifier which can detect the digits in the sudoku and then I have used a backtracking algorithm to solve the sudoku. I have also created a GUI for the application using Tkinter.',
    tech: ['Python', 'Pandas', 'Pytorch'],
    images: [
      { src: placeholder('Project One - screen 1', '#2f6f8f'), alt: 'Project One home screen' },
      { src: placeholder('Project One - screen 2', '#3a8f6f'), alt: 'Project One dashboard' },
      { src: placeholder('Project One - screen 3', '#8f6f3a'), alt: 'Project One settings' },
    ],
    links: [
      { label: 'Source code', href: 'https://github.com/RuaridhAshbrook/SudokuSolver' },
    ],
  },
  {
    id: 'project-two',
    title: 'Portfolio Website',
    summary: 'A Website to display my projects and advertise myself',
    description:
      'I have build a React and Node JS application which I have hosted on an AWS web server so I can display my projects and advertise myself to potential employers. I have used React for the front end and Node JS for the back end, I have also used PostgreSQL to store the data for the website.',
    tech: ['React', 'Node JS', 'AWS EC2', 'Prompt Engineering'],
    images: [
      { src: placeholder('Project Two - screen 1', '#7a4f9f'), alt: 'Project Two main view' },
      { src: placeholder('Project Two - screen 2', '#9f4f6a'), alt: 'Project Two details view' },
    ],
    links: [{ label: 'Source code', href: 'https://github.com/RuaridhAshbrook/PortfolioWebsite' }],
  },
  {
    id: 'project-three',
    title: 'Upcoming: Maze Solver',
    summary: 'A maze classifier and solver',
    description:
      'This will be a program which classifies mazes based on shape and then uses different maze solving algorithms to find the best algorithm to solve the maze. I then want to be able to use computer vision to classify what type of maze this is and then it should automatically select which algorithm should be used to solve it',
    tech: ['Python', 'Pytorch', 'Pandas'],
    images: [{ src: placeholder('Project Three', '#4f7a9f'), alt: 'Project Three preview' }],
    links: [],
  },
]

// The project shown on the home page.
export const featuredProjectId = 'project-one'

export const contact = {
  email: 'ruaridhphilipashbrook@gmail.com',
  phone: '+44 7375927988',
  location: 'Edinburgh, Scotland',
  socials: [
    { label: 'GitHub', href: 'https://github.com/RuaridhAshbrook' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ruaridh-ashbrook-46b494336' },
  ],
}
