export interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  category: string;
  description: string;
  featured: boolean;
  users?: string[];
  primaryUser?: string;
  features?: string[];
  concepts?: string[];
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    levelDescription: string;
    tag?: string;
  }[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  institutionShort?: string;
  details: string[];
  gpa?: string;
  statusBadge?: string;
  iconName: string;
}

export interface SportsAchievement {
  sport: string;
  tournament: string;
  result: string;
  isChampion: boolean;
  category: 'outdoor' | 'indoor' | 'athletics' | 'racket';
  iconName: string;
  count?: number;
}

export interface LeadershipRole {
  role: string;
  organization: string;
  period?: string;
  highlight?: boolean;
  type: 'club' | 'society' | 'scout' | 'school';
  description?: string;
}

export interface InterestItem {
  name: string;
  category: 'primary' | 'secondary' | 'creative' | 'lifestyle' | 'technology';
  iconName: string;
  description: string;
}
