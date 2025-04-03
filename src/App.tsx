import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./App.css";
import {
  ContactInfo,
  CVData,
  EducationInfo,
  ExperienceInfo,
  SkillsInfo,
} from "./types";
import {
  contactsExport,
  educationExport,
  experienceExport,
  formDataExport,
  otherSkillsExport,
  technicalSkillsExport,
} from "./arrays";
import {
  handleAddNewSkill,
  handleChangeContacts,
  handleChangeEducations,
  handleChangeExperience,
  handleChangeSkills,
  handleColorChange,
} from "./functions";
import { FaArrowLeft } from "react-icons/fa";
import { SketchPicker } from "react-color";

const CV = React.forwardRef<
  HTMLDivElement,
  {
    data: CVData;
    contacts: ContactInfo[];
    educations: EducationInfo[];
    experience: ExperienceInfo[];
    otherSkills: SkillsInfo[];
    technicalSkills: SkillsInfo[];
  }
>(
  (
    { data, contacts, educations, experience, otherSkills, technicalSkills },
    ref
  ) => {
    return (
      <div ref={ref} className="page">
        <div className="margin" style={{ background: data.color1 }}>
          <div
            className="image_box"
            style={{ display: data.isPhoto ? "flex" : "none" }}
          >
            <img
              src="/cv-other-job/image/cv_photo.JPG"
              className="image"
              alt="CV Photo"
            />
          </div>
          <div className="nameTitle" style={{ backgroundColor: data.color2 }}>
            <h1>{data.name}</h1>
          </div>
          <p style={{ textAlign: "center", marginTop: "1em" }}>
            {data.about !== ""
              ? data.about
              : data.isEnglish
              ? "Beginning developer, for whom every encountered problem becomes a puzzle, that he can add to his programming knowledge."
              : "Początkujący developer, dla którego każdy napotkany problem to kolejny klocek, który dokłada do swojej programistycznej wiedzy."}
          </p>
          <div>
            <h3
              className="marginTitles"
              style={{ backgroundColor: data.color2 }}
            >
              {data.isEnglish ? "Contact" : "Kontakt"}
            </h3>
            <ul>
              {contacts.map((element) =>
                element.isActive ? (
                  <li className="contactElement" key={element.text}>
                    <element.icon size={`${data.iconSize}em`} />
                    {element.link ? (
                      <a
                        href={element.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {element.text}
                      </a>
                    ) : (
                      <span>{element.text}</span>
                    )}
                  </li>
                ) : null
              )}
            </ul>
          </div>
          <div>
            <h3
              className="marginTitles"
              style={{ backgroundColor: data.color2 }}
            >
              {data.isEnglish ? "Education" : "Edukacja"}
            </h3>
            <ul>
              {educations.map((element) =>
                element.isActive ? (
                  <li key={element.name} className="eduElement">
                    <element.icon size={`${data.iconSize}em`} />
                    <div>
                      <b>{element.date}</b>
                      <span>{data.isEnglish ? element.eng : element.pl}</span>
                    </div>
                  </li>
                ) : null
              )}
            </ul>
          </div>
          <div style={{ display: data.isInterests ? "block" : "none" }}>
            <h3
              className="marginTitles"
              style={{ backgroundColor: data.color2 }}
            >
              {data.isEnglish ? "Interests" : "Zainteresowania"}
            </h3>
            <span>
              &nbsp;&nbsp;&nbsp;
              {data.interests !== ""
                ? data.interests
                : data.isEnglish
                ? "I am interested in new technologies and astronomy, which is also the reason for my interest in popular science books and sci-fi literature. I also like to watch movies and tv series focused on those topics. In my free time I like to play computer games, usually the strategic ones."
                : "Interesuje się nowościami technologicznymi i astronomią, stąd też lubię książki popularno naukowe jak i literaturę sci-fi. Filmy i seriale z tej dziedziny, także należą do grona moich zainteresowań. W wolnym czasie gram w gry komputerowe, najczęściej w stare strategie."}
            </span>
          </div>
        </div>
        <div className="restPage">
          <div>
            <div>
              <h3 className="pageTitles" style={{ marginTop: 0 }}>
                {data.isEnglish ? "Experience" : "Doświadczenie"}
              </h3>
              <div className="experience">
                <ul>
                  {experience.map((element) =>
                    element.isActive ? (
                      <li key={element.name}>
                        <span className="experience_title">
                          <b style={{ maxWidth: "400px" }}>
                            •{" "}
                            {data.isEnglish
                              ? element.engTitle
                              : element.plTitle}
                          </b>
                          <b
                            style={{
                              fontSize: "0.8em",
                            }}
                          >
                            {element.date}
                          </b>
                        </span>
                        <div style={{ marginLeft: "10px" }}>
                          {data.isEnglish ? element.engText : element.plText}
                        </div>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="pageTitles">
                {data.isEnglish
                  ? "Technical Skills"
                  : "Umiejętności Techniczne"}
              </h3>
              <div className="experience">
                <ul>
                  {technicalSkills.map((element) =>
                    element.isActive ? (
                      <li key={element.name}>
                        <span className="experience_title">
                          <b style={{ maxWidth: "400px" }}>
                            •{" "}
                            {data.isEnglish
                              ? element.engTitle
                              : element.plTitle}
                          </b>
                        </span>
                        <div style={{ marginLeft: "10px" }}>
                          {data.isEnglish ? element.engText : element.plText}
                        </div>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="pageTitles">
                {data.isEnglish ? "Other Skills" : "Pozostałe Umiejętności"}
              </h3>
              <div className="experience">
                <ul>
                  {otherSkills.map((element) =>
                    element.isActive ? (
                      <li key={element.name}>
                        <span className="experience_title">
                          <b style={{ maxWidth: "400px" }}>
                            •{" "}
                            {data.isEnglish
                              ? element.engTitle
                              : element.plTitle}
                          </b>
                        </span>
                        <div style={{ marginLeft: "10px" }}>
                          {data.isEnglish ? element.engText : element.plText}
                        </div>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="rodo">
            {data.isEnglish
              ? "I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).(RODO)."
              : "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE"}
          </div>
        </div>
      </div>
    );
  }
);

const App: React.FC = () => {
  const [formData, setFormData] = useState<CVData>(formDataExport);
  const [contacts, setContacts] = useState<ContactInfo[]>(contactsExport);
  const [zoom, setZoom] = useState<number>(0.7);
  const [openColor1, setOpenColor1] = useState<boolean>(false);
  const [openColor2, setOpenColor2] = useState<boolean>(false);
  const [educations, setEducations] =
    useState<EducationInfo[]>(educationExport);

  const [experience, setExperience] =
    useState<ExperienceInfo[]>(experienceExport);

  const [technicalSkills, setTechnicalSkills] = useState<SkillsInfo[]>(
    technicalSkillsExport
  );

  const [otherSkills, setOtherSkills] =
    useState<SkillsInfo[]>(otherSkillsExport);

  const contentRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: "CV_Bartłomiej_Gal",
  });

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <div style={{ maxWidth: "190px" }}>
          <button
            onClick={() => {
              handlePrint();
            }}
          >
            <b>Generuj plik PDF</b>
          </button>
          <br />
          <br />
          <label>
            <b>Zoom</b>
            <input
              type="range"
              name="interest_rate"
              value={zoom}
              min="0.5"
              max="1"
              step="0.025"
              onChange={(e) => setZoom(Number(e.target.value))}
            />
          </label>
          <br />
          <br />
          <span>
            <b>Język</b>
            <input
              type="radio"
              name="lng"
              value="false"
              checked={!formData.isEnglish}
              onChange={() => setFormData({ ...formData, isEnglish: false })}
            />
            PL
            <input
              type="radio"
              name="lng"
              value="true"
              checked={formData.isEnglish}
              onChange={() => setFormData({ ...formData, isEnglish: true })}
            />
            ENG
          </span>
          <br />
          <br />
          <label>
            <b>Zdjęcie </b>
            <input
              type="checkbox"
              checked={formData.isPhoto}
              onChange={() =>
                setFormData({ ...formData, isPhoto: !formData.isPhoto })
              }
            />
          </label>
          <br />
          <br />
          <label>
            <b>Kontakty </b>
            <ul>
              {contacts.map((contact, index) => (
                <li
                  key={index}
                  className="liElement"
                  onClick={() =>
                    handleChangeContacts(contact.name, setContacts)
                  }
                >
                  <input
                    type="checkbox"
                    value={contact.name}
                    onChange={() =>
                      handleChangeContacts(contact.name, setContacts)
                    }
                    style={{ pointerEvents: "none" }}
                    checked={contact.isActive}
                  />
                  <span>{contact.name}</span>
                </li>
              ))}
            </ul>
          </label>
          <br />
          <label>
            <b>Edukacja </b>
            <ul>
              {educations.map((edu, index) => (
                <li
                  key={index}
                  className="liElement"
                  onClick={() =>
                    handleChangeEducations(edu.name, setEducations)
                  }
                >
                  <input
                    type="checkbox"
                    value={edu.name}
                    onChange={() =>
                      handleChangeEducations(edu.name, setEducations)
                    }
                    style={{ pointerEvents: "none" }}
                    checked={edu.isActive}
                  />
                  <span>{edu.name}</span>
                </li>
              ))}
            </ul>
          </label>
          <br />
          <label>
            <b>O mnie:</b>
            <br />
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            <b>Zainteresowania </b>
            <input
              type="checkbox"
              checked={formData.isInterests}
              onChange={() =>
                setFormData({ ...formData, isInterests: !formData.isInterests })
              }
            />
            <br />
            <textarea
              name="interests"
              value={formData.interests}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.5em",
              alignItems: "center",
              height: "20px",
              marginBottom: "1em",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setOpenColor1(!openColor1);
                setOpenColor2(false);
              }}
              style={{ width: "115px" }}
            >
              <b>{openColor1 ? "Zamknij kolor 1" : "Zmień kolor 1"}</b>
            </button>
            <div
              style={{
                border: "1px solid white",
                backgroundColor: formData.color1,
                height: "100%",
                width: "20px",
                borderRadius: "3px",
              }}
            />
            <FaArrowLeft style={{ display: openColor1 ? "block" : "none" }} />
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.5em",
              alignItems: "center",
              height: "20px",
              marginBottom: "1em",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setOpenColor2(!openColor2);
                setOpenColor1(false);
              }}
              style={{ width: "115px" }}
            >
              <b>{openColor2 ? "Zamknij color 2" : "Zmień kolor 2"}</b>
            </button>
            <div
              style={{
                border: "1px solid white",
                backgroundColor: formData.color2,
                height: "100%",
                width: "20px",
                borderRadius: "3px",
              }}
            />
            <FaArrowLeft style={{ display: openColor2 ? "block" : "none" }} />
          </span>
          <div style={{ display: openColor1 ? "block" : "none" }}>
            <SketchPicker
              color={formData.color1}
              onChangeComplete={(color) =>
                handleColorChange(color, "color1", setFormData)
              }
            />
          </div>
          <div style={{ display: openColor2 ? "block" : "none" }}>
            <SketchPicker
              color={formData.color2}
              onChangeComplete={(color) =>
                handleColorChange(color, "color2", setFormData)
              }
            />
          </div>
        </div>
        <div>
          <label>
            <b>Doświadczenie </b>
            <ul>
              {experience.map((exp, index) => (
                <li
                  key={index}
                  className="liElement"
                  onClick={() =>
                    handleChangeExperience(exp.name, setExperience)
                  }
                >
                  <input
                    type="checkbox"
                    value={exp.name}
                    onChange={() =>
                      handleChangeExperience(exp.name, setExperience)
                    }
                    style={{ pointerEvents: "none" }}
                    checked={exp.isActive}
                  />
                  <span>{exp.name}</span>
                </li>
              ))}
            </ul>
          </label>
          <br />
          <label>
            <b>Techniczne</b>
            <form
              onSubmit={(e) => {
                const titleValue =
                  (
                    document.getElementById(
                      "tech-skill-title"
                    ) as HTMLInputElement
                  )?.value || "";
                const textValue =
                  (
                    document.getElementById(
                      "tech-skill-text"
                    ) as HTMLTextAreaElement
                  )?.value || "";

                handleAddNewSkill(
                  e,
                  technicalSkills,
                  titleValue,
                  textValue,
                  setTechnicalSkills
                );

                (e.target as HTMLFormElement).reset();
              }}
            >
              <div className="skill_box">
                <textarea id="tech-skill-title" placeholder="Tytuł..." />

                <textarea id="tech-skill-text" placeholder="Opis..." />
                <div>
                  <i>Lista:</i>
                  <button type="submit">
                    <b>Dodaj</b>
                  </button>
                </div>
              </div>
            </form>
            <ul>
              {technicalSkills.map((skill, index) => {
                return (
                  <li
                    key={index}
                    className="liElement"
                    onClick={() =>
                      handleChangeSkills(skill.name, setTechnicalSkills)
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      type="checkbox"
                      value={skill.name}
                      checked={skill.isActive}
                      onChange={() =>
                        handleChangeSkills(skill.name, setTechnicalSkills)
                      }
                      style={{ pointerEvents: "none" }}
                    />
                    {skill.name}
                  </li>
                );
              })}
            </ul>
          </label>
          <br />
          <label>
            <b>Inne umiejętności</b>
            <form
              onSubmit={(e) => {
                const titleValue =
                  (
                    document.getElementById(
                      "other-skill-title"
                    ) as HTMLInputElement
                  )?.value || "";
                const textValue =
                  (
                    document.getElementById(
                      "other-skill-text"
                    ) as HTMLTextAreaElement
                  )?.value || "";

                handleAddNewSkill(
                  e,
                  otherSkills,
                  titleValue,
                  textValue,
                  setOtherSkills
                );

                (e.target as HTMLFormElement).reset();
              }}
            >
              <div className="skill_box">
                <textarea id="other-skill-title" placeholder="Tytuł..." />

                <textarea id="other-skill-text" placeholder="Opis..." />
                <div>
                  <i>Lista:</i>
                  <button type="submit">
                    <b>Dodaj</b>
                  </button>
                </div>
              </div>
            </form>
            <ul>
              {otherSkills.map((skill, index) => {
                return (
                  <li
                    key={index}
                    className="liElement"
                    onClick={() =>
                      handleChangeSkills(skill.name, setOtherSkills)
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      type="checkbox"
                      value={skill.name}
                      checked={skill.isActive}
                      onChange={() =>
                        handleChangeSkills(skill.name, setOtherSkills)
                      }
                      style={{ pointerEvents: "none" }}
                    />
                    {skill.name}
                  </li>
                );
              })}
            </ul>
          </label>
          <br />
        </div>
      </div>

      <div style={{ zoom: zoom }} ref={contentRef}>
        <CV
          data={formData}
          contacts={contacts}
          educations={educations}
          otherSkills={otherSkills}
          technicalSkills={technicalSkills}
          experience={experience}
        />
      </div>
    </div>
  );
};

export default App;
