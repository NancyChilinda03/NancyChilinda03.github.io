export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'Mobile' | 'Web' | 'Full-Stack';
  details: string[];
  highlights: string[];
  mockupType: 'recipe' | 'skin_detector' | 'pharmacy' | 'portfolio';
  screenshots?: string[];
  codeLink?: string;
  hideScreenshotAndCode?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  notes?: string;
  modules?: string[];
  grades?: { subject: string; grade: number | string }[];
  credentialId?: string;
  awardInfo?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export const PROFILE = {
  name: "Nancy Chilinda",
  title: "Software Engineer & Full-Stack Developer",
  email: "nancychilinda11@gmail.com",
  phone: "(+265) 882001951",
  location: "Mzuzu, Malawi",
  github: "https://github.com/NancyChilinda03",
  linkedin: "https://www.linkedin.com/in/nancy-chilinda-ba7407339/",
  website: "https://NancyChilinda03.github.io",
  avatar: "/src/assets/images/nancy_profile_1779796261345.png",
  summary: "Motivated final year Software engineering student with practical experience in full-stack and mobile application development API integration and database systems. Skilled in python, JavaScript and SQL with hands-on experience in debugging and collaborative software development. Interested and focused on building efficient and reliable software solutions such as systems, applications to improve organizational efficiency.",
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Developer Intern",
    company: "Infinite Solutions Consultants – Zomba",
    location: "Zomba, Malawi",
    period: "07/2025 - 02/2026",
    bullets: [
      "Developed and tested software applications using Java and Php according to project requirements.",
      "Collaborated with development teams to identify, debug, and resolve software issues.",
      "Used Git and GitHub for version control and collaborative code management.",
      "Participated in Agile development processes including daily stand-up meetings.",
      "Assisted in integrating backend services and APIs into applications.",
      "Conducted code reviews to maintain coding standards."
    ]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "Information and Communication Technology",
    school: "Daeyang University",
    location: "Lilongwe, Malawi",
    period: "pending",
    notes: "Focusing heavily on Software Engineering, Databases, Mobile Development, and HCIs."
  },
  {
    degree: "Certificate in ICT: Information and Communication Technology",
    school: "Lusekero School of Computing",
    location: "Lubinga, Mzuzu",
    period: "03/2022",
    notes: "Completed with a Credit.",
    awardInfo: "Awarded with a Credit by Ungweru Organization",
    modules: [
      "Internet",
      "Entrepreneurship",
      "Computer Theory",
      "Communication Skills",
      "Microsoft Office Excel",
      "Microsoft Office Access",
      "Microsoft Office Publisher",
      "Microsoft Office Power Point",
      "Microsoft Office Word & Typing"
    ]
  },
  {
    degree: "Malawi School Certificate of Education (MSCE)",
    school: "Ekwendeni Girls Secondary School",
    location: "Ekwendeni, Mzimba",
    period: "12/2021",
    notes: "Qualified for the award of MSCE.",
    credentialId: "Certificate No: M/2021/003045 | Candidate No: 0027/0014",
    grades: [
      { subject: "Agriculture", grade: 4 },
      { subject: "Bible Knowledge", grade: 4 },
      { subject: "Biology", grade: 6 },
      { subject: "Chemistry", grade: 7 },
      { subject: "Chichewa", grade: 7 },
      { subject: "Computer Studies", grade: 4 },
      { subject: "English", grade: 5 },
      { subject: "History", grade: 5 },
      { subject: "Mathematics", grade: 6 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "skin-disease",
    title: "Skin Disease Detection Mobile Application",
    description: "Developed a mobile application that detects potential skin conditions using a trained machine learning model.",
    tags: ["Flutter", "Dart", "Machine Learning", "Image Upload", "User Interface"],
    category: "Mobile",
    details: [
      "Developed a mobile application that detects potential skin conditions using a trained machine learning model.",
      "Implemented image upload functionality allowing users to submit skin images for analysis.",
      "Designed user-friendly interfaces to display detection results and recommendations.",
      "Built using Flutter."
    ],
    highlights: [
      "Trained Skin Classification Model Integration",
      "Dynamic User interfaces for analytical feedback",
      "Robust image upload pipelines with Flutter"
    ],
    mockupType: "skin_detector",
    hideScreenshotAndCode: true
  },
  {
    id: "recipe-gen",
    title: "Recipe Generator Mobile Application",
    description: "Developed a Flutter mobile application that generates recipes using an external API.",
    tags: ["Flutter", "Dart", "REST API", "Recipe Search", "Favorite Storage"],
    category: "Mobile",
    details: [
      "Developed a Flutter mobile application that generates recipes using an external API.",
      "Implemented recipe search, recipe details, and favorite recipe storage.",
      "Integrated API data to dynamically display recipes."
    ],
    highlights: [
      "Recipe Search and Filtering Engine",
      "External API Integration and Caching",
      "Local recipe bookmarks storage client"
    ],
    mockupType: "recipe",
    codeLink: "https://github.com/NancyChilinda03/Recipe_Generator.git",
    screenshots: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "pharmacy-sys",
    title: "Pharmacy Inventory Management System",
    description: "Built a database-driven system for tracking medicine and stock levels.",
    tags: ["PHP", "MySQL", "Relational Databases", "CRUD operations", "Inventory Logs"],
    category: "Full-Stack",
    details: [
      "Built a database-driven system for tracking medicine and stock levels.",
      "Implemented CRUD operations for inventory records.",
      "Designed relational database structures for product management."
    ],
    highlights: [
      "Database-driven Inventory status tracking",
      "Flawless CRUD operations over batch items",
      "Efficient relational schema mapping"
    ],
    mockupType: "pharmacy",
    codeLink: "https://github.com/NancyChilinda03",
    screenshots: [
      "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587854692152-cbe660db0979?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "portfolio",
    title: "Professional Software Engineering Portfolio",
    description: "A highly polished, responsive Single-Page Application showcasing academic courses, interactive sandbox demonstration environments, and instant CV exports.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
    category: "Full-Stack",
    details: [
      "Designed and structured clean modular components separating static profile assets from sandbox interactivity logic.",
      "Configured client-side offline storage mechanisms to instantly persist test recruiter logs within on-page simulation dashboards.",
      "Drafted style-isolated print-media CSS schemas ensuring CV document exports scale to exact A4 pages."
    ],
    highlights: [
      "Clean, Fluid Interface Layout & Responsive Breakpoints",
      "Interactive Simulation Playgrounds",
      "Isolated Print Stylesheets for instant Resume Exports"
    ],
    mockupType: "portfolio",
    codeLink: "https://github.com/NancyChilinda03",
    screenshots: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "Java", "C", "TypeScript (Learning)"],
    icon: "code"
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React (Basic)", "Next.js (Learning)"],
    icon: "layers"
  },
  {
    title: "Frameworks & Tech",
    skills: ["Node.js (Basic)", "Express.js", "Flutter", "React (Basic)", "PHP", "Django", "Laravel", "REST API Development"],
    icon: "cpu"
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQL Database Design", "MongoDB (Basic)", "PostgreSQL (Learning)"],
    icon: "database"
  },
  {
    title: "Tools & Concepts",
    skills: ["Git", "GitHub", "Visual Studio Code", "Postman", "Object-Oriented Programming", "Agile Development", "API Integration", "Debugging", "Version Control"],
    icon: "git-branch"
  }
];

export const RELEVANT_COURSEWORK = [
  "Software Engineering",
  "Data Structures and Algorithms",
  "Web Technologies and Script Programming",
  "Databases",
  "Mobile Application Development",
  "Human Computer Interaction",
  "System Analysis and Design"
];

export const LANGUAGES = [
  { name: "English", level: "Advanced (C1)" },
  { name: "Tumbuka", level: "Native" },
  { name: "Chichewa", level: "Native" }
];

export const HOBBIES = [
  "Learning new skills and sharing ideas",
  "Meeting new people"
];
