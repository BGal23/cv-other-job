import { Dispatch, SetStateAction } from "react";
import {
  ContactInfo,
  CVData,
  EducationInfo,
  ExperienceInfo,
  SkillsInfo,
} from "./types";

export const handleChangeContacts = (
  contactName: string,
  setContacts: Dispatch<SetStateAction<ContactInfo[]>>
) => {
  setContacts((prevSkills) =>
    prevSkills.map((contact) =>
      contact.name === contactName
        ? { ...contact, isActive: !contact.isActive }
        : contact
    )
  );
};

export const handleChangeEducations = (
  eduName: string,
  setEducations: Dispatch<SetStateAction<EducationInfo[]>>
) => {
  setEducations((prevEducations) =>
    prevEducations.map((education) =>
      education.name === eduName
        ? { ...education, isActive: !education.isActive }
        : education
    )
  );
};

export const handleChangeExperience = (
  expName: string,
  setExperience: Dispatch<SetStateAction<ExperienceInfo[]>>
) => {
  setExperience((prevExperience) =>
    prevExperience.map((experience) =>
      experience.name === expName
        ? { ...experience, isActive: !experience.isActive }
        : experience
    )
  );
};

export const handleChangeSkills = (
  skillName: string,
  setTechnicalSkills: Dispatch<SetStateAction<SkillsInfo[]>>
) => {
  setTechnicalSkills((prevSkills) =>
    prevSkills.map((skill) =>
      skill.name === skillName ? { ...skill, isActive: !skill.isActive } : skill
    )
  );
};

export const handleColorChange = (
  color: { hex: string },
  key: "color1" | "color2",
  setFormData: Dispatch<SetStateAction<CVData>>
) => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    [key]: color.hex,
  }));
};

export const handleAddNewSkill = (
  e: React.FormEvent,
  restSkills: SkillsInfo[],
  newTitle: string,
  newText: string,
  setSkills: Dispatch<SetStateAction<SkillsInfo[]>>
) => {
  e.preventDefault();

  if (newTitle === "" || newText === "")
    return console.log("Your new skill is empty!");

  setSkills([
    ...restSkills,
    {
      isActive: true,
      name: newTitle,
      engTitle: newTitle,
      plTitle: newTitle,
      engText: newText,
      plText: newText,
    },
  ]);
};
