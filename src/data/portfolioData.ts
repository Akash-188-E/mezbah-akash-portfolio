import { Project, SkillCategory, EducationItem, SportsAchievement, LeadershipRole, InterestItem } from '../types';

export const PERSONAL_INFO = {
  fullName: "Mezbah Ul Siddik Akash",
  displayName: "Mezbah Akash",
  title: "CSE Student & Aspiring Software Developer",
  institution: "Leading University",
  year: "4th Year",
  expectedGraduation: "2027",
  location: "Sylhet, Bangladesh",
  email: "mezbahakashb62@gmail.com",
  phone: "01785843422",
  socials: {
    github: "https://github.com/Akash-188-E",
    linkedin: "https://www.linkedin.com/in/mezbah-akash-234642340",
    facebook: "https://www.facebook.com/share/1axJ1ozJV1/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/_mezbah_akash_?igsh=MXZ6eWdzdmE2NTJpNA==",
    email: "mailto:mezbahakashb62@gmail.com"
  },
  introduction: "I'm Mezbah Akash, a CSE student and aspiring software developer who enjoys building meaningful projects and exploring new technologies. I'm always curious to learn, create, and turn ideas into real-world solutions.",
  careerGoal: "My goal is to build a successful career in the IT industry, particularly in software development, where I can continuously learn, improve my technical skills, and gain real-world experience. I want to work with a creative and collaborative team, turn innovative ideas into practical solutions, and develop software that can make a meaningful impact. I also aim to keep exploring new technologies and grow into a skilled and adaptable software professional.",
  heroTags: [
    "C",
    "C++",
    "Python",
    "Java",
    "Flutter",
    "Dart",
    "MySQL",
    "Supabase"
  ],
  currentlyExploring: [
    "Software Development",
    "App Development",
    "Web Development",
    "Modern Technologies"
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    description: "Core programming languages studied and practiced throughout academic coursework.",
    iconName: "Code2",
    skills: [
      { name: "C", levelDescription: "Structured programming foundation" },
      { name: "C++", levelDescription: "Object-oriented design & algorithms" },
      { name: "Python", levelDescription: "Scripting & problem solving" },
      { name: "Java", levelDescription: "OOP principles & application logic" }
    ]
  },
  {
    id: "app-dev",
    title: "App Development",
    description: "Cross-platform mobile application development tools and frameworks.",
    iconName: "Smartphone",
    skills: [
      { name: "Flutter", levelDescription: "UI components & cross-platform apps" },
      { name: "Dart", levelDescription: "Core language & asynchronous programming" },
      { name: "Android Studio", levelDescription: "Mobile development environment" }
    ]
  },
  {
    id: "database",
    title: "Database",
    description: "Relational data structuring and backend data persistence systems.",
    iconName: "Database",
    skills: [
      { name: "MySQL", levelDescription: "Relational database queries & schemas" },
      { name: "Supabase", levelDescription: "Backend service integration" },
      { name: "Basic Database Concepts", levelDescription: "Normalization, relationships & SQL queries" }
    ]
  },
  {
    id: "tools",
    title: "Productivity Tools",
    description: "Essential documentation and analysis software for academic and team collaboration.",
    iconName: "Layers",
    skills: [
      { name: "Microsoft Word", levelDescription: "Documentation & reports" },
      { name: "Microsoft Excel", levelDescription: "Data organization & analysis" },
      { name: "Microsoft PowerPoint", levelDescription: "Project presentations" }
    ]
  },
  {
    id: "learning",
    title: "Currently Learning",
    description: "Active focus areas and modern software engineering practices.",
    iconName: "Sparkles",
    skills: [
      { name: "Web Development", levelDescription: "Modern web architecture & interfaces" },
      { name: "Software Development", levelDescription: "System design & clean code principles" },
      { name: "Modern Development Practices", levelDescription: "Version control & iterative workflows" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "quick-aid",
    title: "Quick Aid",
    subtitle: "Campus Safety Network",
    type: "Group Project",
    category: "Campus Safety Application",
    description: "A campus-focused application designed to help users report university-related problems and safety issues so they can be addressed more efficiently.",
    featured: true,
    users: ["Students (Primary)", "Teachers", "Staff", "Admin"],
    primaryUser: "Registered Students",
    features: [
      "Campus problem & safety issue reporting module",
      "Notification system to keep stakeholders updated",
      "Direct campus network assistance (without GPS tracking)"
    ],
    tags: ["Campus Safety", "Group Project", "Issue Reporting", "Notification System"]
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    subtitle: "Academic Information System",
    type: "Individual Project",
    category: "Object-Oriented Programming Project",
    description: "An academic project designed to store student information such as student ID, name, and other details, and retrieve/display the relevant information based on user input.",
    featured: false,
    concepts: [
      "Object-Oriented Programming (OOP) Architecture",
      "Structured Student Information Management",
      "Data Storage & Record Handling",
      "Input-Based Search & Retrieval Mechanism"
    ],
    tags: ["OOP", "Data Structures", "Academic Project", "Information Management"]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    period: "2023 – Present",
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Leading University",
    institutionShort: "Leading University",
    details: [
      "4th Year",
      "Expected Graduation: 2027"
    ],
    statusBadge: "4th Year",
    iconName: "GraduationCap"
  },
  {
    period: "2022",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "MurariChad College (M.C. College)",
    institutionShort: "M.C. College",
    details: [
      "Passing Year: 2022"
    ],
    gpa: "5.00",
    statusBadge: "Passed: 2022",
    iconName: "Award"
  },
  {
    period: "2020",
    degree: "Secondary School Certificate (SSC)",
    institution: "Jalalabad Cantonment Public School & College (JCPSC)",
    institutionShort: "JCPSC",
    details: [
      "Passing Year: 2020"
    ],
    gpa: "5.00",
    statusBadge: "Passed: 2020",
    iconName: "BookOpen"
  }
];

export const SPORTS_ACHIEVEMENTS: SportsAchievement[] = [
  {
    sport: "Cricket",
    tournament: "Inter-House Cricket Tournament",
    result: "2× Champion",
    isChampion: true,
    category: "outdoor",
    iconName: "Trophy",
    count: 2
  },
  {
    sport: "Basketball",
    tournament: "Inter-School Basketball Championship",
    result: "3× Champion",
    isChampion: true,
    category: "outdoor",
    iconName: "Trophy",
    count: 3
  },
  {
    sport: "Table Tennis",
    tournament: "Inter-School Table Tennis Championship",
    result: "3× Champion",
    isChampion: true,
    category: "racket",
    iconName: "Trophy",
    count: 3
  },
  {
    sport: "Football",
    tournament: "Inter-College Football Tournament",
    result: "Champion",
    isChampion: true,
    category: "outdoor",
    iconName: "Trophy",
    count: 1
  },
  {
    sport: "Hockey",
    tournament: "Inter-School Hockey Championship",
    result: "Runner-up",
    isChampion: false,
    category: "outdoor",
    iconName: "Medal",
    count: 1
  },
  {
    sport: "Sprint",
    tournament: "Inter-School Sprint 100m",
    result: "2× Champion, 1× Runner-up",
    isChampion: true,
    category: "athletics",
    iconName: "Flame",
    count: 3
  },
  {
    sport: "Carrom",
    tournament: "Inter-House Carrom Championship",
    result: "2× Champion",
    isChampion: true,
    category: "indoor",
    iconName: "Trophy",
    count: 2
  }
];

export const LEADERSHIP_ACTIVITIES: LeadershipRole[] = [
  {
    role: "Executive Member",
    organization: "Leading University Sports Club",
    highlight: true,
    type: "club",
    description: "Contributing to collegiate sports events, student athletic management, and inter-department sports initiatives."
  },
  {
    role: "Executive Member",
    organization: "Leading University Computer Club",
    highlight: true,
    type: "club",
    description: "Engaging in computing seminars, tech workshops, coding events, and peer learning sessions."
  },
  {
    role: "Executive Member",
    organization: "IEEE Computer Society",
    highlight: true,
    type: "society",
    description: "Participating in professional engineering network events, technical discussions, and collaborative student activities."
  },
  {
    role: "President Scout",
    organization: "Bangladesh Scouts",
    period: "2020",
    highlight: true,
    type: "scout",
    description: "Awarded the highest scout recognition in Bangladesh for leadership, community discipline, service, and team dedication."
  },
  {
    role: "Assistant House Games Prefect",
    organization: "Jalalabad Cantonment Public School & College (JCPSC)",
    period: "2019 – 2020",
    highlight: false,
    type: "school",
    description: "Organized house athletics, intramural championships, discipline management, and sports team coordination."
  }
];

export const BEYOND_CODE_INTERESTS: InterestItem[] = [
  // Primary
  {
    name: "Football",
    category: "primary",
    iconName: "Activity",
    description: "Passionate player & tournament champion with strong teamwork instinct."
  },
  {
    name: "Cricket",
    category: "primary",
    iconName: "Shield",
    description: "Multi-time inter-house champion with strategic match focus."
  },
  {
    name: "Badminton",
    category: "primary",
    iconName: "Zap",
    description: "Fast-paced agility, precision racket reflexes, and stamina."
  },
  // Secondary
  {
    name: "Basketball",
    category: "secondary",
    iconName: "Target",
    description: "3× Championship winning team player with sharp court vision."
  },
  {
    name: "Table Tennis",
    category: "secondary",
    iconName: "Disc",
    description: "3× Champion focusing on quick reflexes and spin control."
  },
  {
    name: "Billiards",
    category: "secondary",
    iconName: "CircleDot",
    description: "Angle calculations, cue ball control, and strategic planning."
  },
  {
    name: "Carrom",
    category: "secondary",
    iconName: "Grid",
    description: "Tactical indoor board game and multi-time champion."
  },
  {
    name: "Swimming",
    category: "secondary",
    iconName: "Waves",
    description: "Endurance builder, mental clarity, and full-body physical reset."
  },
  // Creative
  {
    name: "Video Making",
    category: "creative",
    iconName: "Video",
    description: "Visual storytelling, pacing, framing, and dynamic editing."
  },
  {
    name: "Reel Creation",
    category: "creative",
    iconName: "Film",
    description: "Short-form video crafting, creative transitions, and visual hooks."
  },
  // Lifestyle
  {
    name: "Travelling",
    category: "lifestyle",
    iconName: "Compass",
    description: "Exploring new places, observing diverse cultures, and refreshing perspective."
  },
  {
    name: "Exercise & Fitness",
    category: "lifestyle",
    iconName: "Dumbbell",
    description: "Daily athletic discipline, physical strength, and mental wellness."
  },
  // Technology
  {
    name: "Coding",
    category: "technology",
    iconName: "Terminal",
    description: "Exploring algorithms, writing clean logic, and building purposeful digital tools."
  }
];
