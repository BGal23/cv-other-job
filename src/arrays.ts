import { IoIosHome, IoIosMail } from "react-icons/io";
import {
  ContactInfo,
  CVData,
  EducationInfo,
  ExperienceInfo,
  SkillsInfo,
} from "./types";
import { FaGithub, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { PiCertificateLight } from "react-icons/pi";
import { IoSchool } from "react-icons/io5";

export const formDataExport: CVData = {
  name: "Bartłomiej Gal",
  position: "Front-end Developer",
  email: "jan.kowalski@example.com",
  phone: "+48 123 456 789",
  about: "",
  isEnglish: false,
  iconSize: 1.8,
  color1: "#053b6d",
  color2: "#082036",
  isPhoto: true,
  isInterests: true,
  interests: "",
};

export const contactsExport: ContactInfo[] = [
  {
    name: "Adres",
    icon: IoIosHome,
    text: "ul. Domagały, Kraków",
    isActive: true,
  },
  {
    name: "Mail",
    icon: IoIosMail,
    text: "bartek.gal23@gmail.com",
    link: "mailto:bartek.gal23@gmail.com",
    isActive: true,
  },
  {
    name: "Telefon",
    icon: FaPhoneSquareAlt,
    text: "+48 788 839 694",
    link: "tel:+48788839694",
    isActive: true,
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    text: "linkedin.com/in/bartlomiej-gal/",
    link: "https://linkedin.com/in/bartlomiej-gal/",
    isActive: false,
  },
  {
    name: "Github",
    icon: FaGithub,
    text: "github.com/BGal23",
    link: "https://github.com/BGal23",
    isActive: false,
  },
];

export const educationExport: EducationInfo[] = [
  {
    isActive: false,
    eng: "GoIT course Full Stack",
    pl: "GoIT kurs Full Stack",
    date: "03.2023 - 03.2024",
    icon: PiCertificateLight,
    name: "Kurs",
  },
  {
    isActive: true,
    eng: "Cracow University",
    pl: "Politechnika Krakowska",
    date: "10.2016 - 04.2020",
    icon: IoSchool,
    name: "Studia",
  },
  {
    isActive: true,
    eng: "Construction technical school",
    pl: "Technikum budowlane",
    date: "09.2010 - 06.2015",
    icon: IoSchool,
    name: "Technikum",
  },
];

export const experienceExport: ExperienceInfo[] = [
  {
    isActive: true,
    engTitle: "Construction Cost Estimator at Poltrade",
    plTitle: "Inżynier do spraw ofertowania w Poltrade",
    engText:
      "Przygotowywanie ofert i kosztorysów w obszarze hydroizolacji. Analizowanie projektów, dobieranie odpowiednich systemów oraz wspieranie zespołów projektowych w doborze optymalnych rozwiązań.",
    plText:
      "Przygotowywanie ofert i kosztorysów w obszarze hydroizolacji. Analizowanie projektów, dobieranie odpowiednich systemów oraz wspieranie zespołów projektowych w doborze optymalnych rozwiązań.",
    date: "05.2025-obecnie",
    name: "Kosztorysant w Poltrade",
  },
  {
    isActive: false,
    engTitle:
      "Front-end Developer Intern at Franciszek Poniedziałek Software Development",
    plTitle:
      "Stażysta Front-end Developer w firmie Franciszek Poniedziałek Software Development",
    engText:
      "Introduction to a project in the bar & nightclub industry, working with an experienced developer, adapting personal code to fit the project structure.",
    plText:
      "Wdrożenie do projektu z branży barów i klubów nocnych, współpraca z doświadczonym programistą, dostosowanie własnego kodu do struktury projektu.",
    date: "05.2024-02.2025",
    name: "Staż u Franka",
  },
  {
    isActive: true,
    engTitle: "CNC Operator at ABM S.A.",
    plTitle: "Operator CNC w firmie ABM S.A.",
    engText:
      "Working with technical documentation and manufacturing drawings, optimizing and implementing machining processes, overseeing the entire production cycle.",
    plText:
      "Praca z dokumentacją techniczną i rysunkami wykonawczymi, optymalizacja i wdrażanie procesów obróbczych, nadzorowanie całego cyklu produkcyjnego.",
    date: "06.2024-12.2024",
    name: "Operator CNC w ABM",
  },
  {
    isActive: true,
    engTitle: "CNC Operator/Carpenter at Andrzej Króżel CNC",
    plTitle: "Operator CNC/Stolarz w firmie Andrzej Króżel CNC",
    engText:
      "Creating technical projects and CNC programs, preparing construction and assembly drawings, ensuring precision and quality in woodworking processes.",
    plText:
      "Tworzenie projektów technicznych i programów do maszyn CNC, przygotowywanie rysunków konstrukcyjnych i montażowych, dbałość o precyzję i jakość w procesach stolarskich.",
    date: "03.2022-12.2023",
    name: "Operator CNC u Króżela",
  },
  {
    isActive: true,
    engTitle: "Construction Cost Estimator at WAKO",
    plTitle: "Kosztorysant budowlany w firmie WAKO",
    engText:
      "Analyzing technical documentation and estimating project costs, verifying drawings for compliance with industry standards, preparing cost breakdowns in Excel.",
    plText:
      "Analiza dokumentacji technicznej i kosztorysowanie projektów, weryfikacja rysunków pod kątem zgodności z normami branżowymi, przygotowywanie zestawień kosztów w Excelu.",
    date: "11.2020-11.2021",
    name: "Kosztorysant w WAKO",
  },
  {
    isActive: false,
    engTitle: "Carpenter at Allmax",
    plTitle: "Stolarz w firmie Allmax",
    engText:
      "Producing and assembling furniture elements, reading technical drawings, operating woodworking machines.",
    plText:
      "Wykonywanie i montaż elementów meblowych, czytanie rysunków technicznych, obsługa maszyn stolarskich.",
    date: "04.2020-06.2020",
    name: "Stolarz w Allmax",
  },
  {
    isActive: true,
    engTitle: "Construction Engineer at LeaderTeam",
    plTitle: "Inżynier budowy w firmie LeaderTeam",
    engText:
      "Supervising construction projects, ensuring compliance with technical documentation, interpreting and working with technical drawings.",
    plText:
      "Nadzór nad realizacją projektów budowlanych, kontrola zgodności z dokumentacją techniczną, interpretacja i praca z rysunkami technicznymi.",
    date: "04.2020-06.2020",
    name: "Inżynier w LeaderTeam",
  },
];

export const technicalSkillsExport: SkillsInfo[] = [
  {
    isActive: true,
    engTitle: "Proficiency in Graphic Design Software",
    plTitle: "Znajomość programów graficznych",
    engText:
      "Skilled in creating and editing 2D and 3D designs using AutoCAD and SketchUp, with experience in technical drawings and project visualization.",
    plText:
      "Umiejętność tworzenia i edytowania projektów 2D i 3D w AutoCAD i SketchUp, doświadczenie w rysunkach technicznych oraz wizualizacjach projektowych.",
    name: "Programy graficzne",
  },
  {
    isActive: true,
    engTitle: "Technical Drawing Interpretation and Drafting",
    plTitle: "Czytanie i wykonywanie rysunków technicznych",
    engText:
      "Ability to read, analyze, and create technical drawings with precision, ensuring compliance with industry standards and design specifications.",
    plText:
      "Umiejętność czytania, analizowania oraz wykonywania rysunków technicznych z zachowaniem norm branżowych i specyfikacji projektowych.",
    name: "Rysunki techniczne",
  },
  {
    isActive: false,
    engTitle: "CNC Programming and Machining",
    plTitle: "Programowanie i obsługa maszyn CNC",
    engText:
      "Experience in programming CNC machines, optimizing machining processes, and ensuring high-quality manufacturing output.",
    plText:
      "Doświadczenie w programowaniu maszyn CNC, optymalizacji procesów obróbczych oraz zapewnianiu wysokiej jakości produkcji.",
    name: "CNC",
  },
  {
    isActive: false,
    engTitle: "Woodworking and Furniture Manufacturing",
    plTitle: "Obróbka drewna i produkcja mebli",
    engText:
      "Hands-on experience in woodworking, including designing, cutting, assembling, and finishing furniture and structural elements.",
    plText:
      "Praktyczna znajomość obróbki drewna, obejmująca projektowanie, cięcie, montaż i wykończenie elementów meblowych oraz konstrukcyjnych.",
    name: "Stolarstwo",
  },
  {
    isActive: false,
    engTitle: "Construction Cost Estimation and Budgeting",
    plTitle: "Kosztorysowanie i projektów budowlanych",
    engText:
      "Expertise in analyzing technical documentation, estimating construction costs, and preparing financial breakdowns using Excel and industry software.",
    plText:
      "Biegłość w analizie dokumentacji technicznej, kosztorysowaniu projektów budowlanych oraz sporządzaniu zestawień finansowych w Excelu i oprogramowaniu branżowym.",
    name: "Kosztorysowanie",
  },
  {
    isActive: false,
    engTitle: "Project Management and Process Optimization",
    plTitle: "Zarządzanie projektami i optymalizacja procesów",
    engText:
      "Experience in coordinating technical projects, improving workflows, and ensuring efficient resource allocation in manufacturing and construction.",
    plText:
      "Doświadczenie w koordynacji projektów technicznych, usprawnianiu procesów oraz efektywnym zarządzaniu zasobami w produkcji i budownictwie.",
    name: "Zarządzanie projektami",
  },
];

export const otherSkillsExport: SkillsInfo[] = [
  {
    isActive: true,
    engTitle: "English Language - B2 Level",
    plTitle: "Język angielski na poziomie B2",
    engText:
      "Ability to communicate fluently in English in both professional and casual contexts, including written and spoken communication.",
    plText:
      "Umiejętność płynnej komunikacji w języku angielskim w kontekstach zawodowych i codziennych, zarówno w mowie, jak i piśmie.",
    name: "Angielski",
  },
  {
    isActive: true,
    engTitle: "Driving License - Category B",
    plTitle: "Prawo jazdy kategorii B",
    engText:
      "Possession of a valid Category B driving license, with experience in driving various types of vehicles.",
    plText:
      "Posiadanie ważnego prawa jazdy kategorii B oraz wieloletnie doświadczenie w prowadzeniu pojazdów.",
    name: "Prawo jazdy",
  },
  {
    isActive: true,
    engTitle: "Communication and Interpersonal Skills",
    plTitle: "Komunikatywność i umiejętności interpersonalne",
    engText:
      "Ability to effectively communicate and collaborate within a team, ensuring clear and constructive interactions.",
    plText:
      "Umiejętność efektywnej komunikacji i współpracy w zespole, zapewniająca jasne i konstruktywne interakcje.",
    name: "Komunikatywność",
  },
  {
    isActive: false,
    engTitle: "Analytical and Critical Thinking",
    plTitle: "Analityczne i krytyczne myślenie",
    engText:
      "Strong problem-solving skills, ability to analyze complex information, and make well-informed decisions.",
    plText:
      "Silne umiejętności rozwiązywania problemów, analiza złożonych informacji i podejmowanie przemyślanych decyzji.",
    name: "Analityczne myślenie",
  },
  {
    isActive: false,
    engTitle: "Time Management and Organization",
    plTitle: "Zarządzanie czasem i organizacja pracy",
    engText:
      "Proficiency in planning and prioritizing tasks efficiently to meet deadlines and project goals.",
    plText:
      "Biegłość w planowaniu i priorytetyzacji zadań w celu terminowego osiągania celów projektowych.",
    name: "Zarządzanie czasem",
  },
  {
    isActive: false,
    engTitle: "Adaptability and Problem-Solving",
    plTitle: "Elastyczność i rozwiązywanie problemów",
    engText:
      "Quick adaptation to new challenges and environments, with a proactive approach to solving problems.",
    plText:
      "Szybka adaptacja do nowych wyzwań i środowisk oraz proaktywne podejście do rozwiązywania problemów.",
    name: "Elastyczność",
  },
];
