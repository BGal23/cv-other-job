import { IconType } from "react-icons";

export interface CVData {
  name: string;
  position: string;
  email: string;
  phone: string;
  about: string;
  isEnglish: boolean;
  iconSize: number;
  color1: string;
  color2: string;
  isPhoto: boolean;
  isInterests: boolean;
  interests: string;
}

export interface ContactInfo {
  name: string;
  icon: IconType;
  text: string;
  link?: string;
  isActive: boolean;
}

export interface EducationInfo {
  isActive: boolean;
  eng: string;
  pl: string;
  date: string;
  icon: IconType;
  name: string;
}
export interface ExperienceInfo {
  isActive: boolean;
  engTitle: string;
  plTitle: string;
  engText: string;
  plText: string;
  date: string;
  name: string;
}

export interface SkillsInfo {
  isActive: boolean;
  engTitle: string;
  plTitle: string;
  engText: string;
  plText: string;
  name: string;
}
