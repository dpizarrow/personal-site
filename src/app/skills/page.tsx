import React from "react";
import SkillCard from "@/components/SkillCard";

import Python from "@/assets/svg/python.svg";
import Django from "@/assets/svg/django.svg";
import FastAPI from "@/assets/svg/fastapi.svg";
import JS from "@/assets/svg/js.svg";
import ReactJS from "@/assets/svg/react.svg";
import Tailwind from "@/assets/svg/tailwind.svg";
import Firebase from "@/assets/svg/firebase.svg";
import Vercel from "@/assets/svg/vercel.svg";
import MySQL from "@/assets/svg/mysql.svg";
import Postgres from "@/assets/svg/postgresql.svg";
import Docker from "@/assets/svg/docker.svg";
import Language from "@/assets/svg/language.svg";
import Git from "@/assets/svg/git.svg";
import Planetscale from "@/assets/svg/planetscale.svg";

interface SubSkill {
  name: string;
  svg: string;
}

interface Skill {
  name: string;
  svg: string;
  subSkills?: SubSkill[];
}

// Example data structure for each category
const categories = {
  programmingLanguages: [
    {
      name: "Python",
      svg: Python,
      subSkills: [
        {
          name: "Django",
          svg: Django,
        },
        {
          name: "FastAPI",
          svg: FastAPI,
        },
      ],
    },
    {
      name: "JavaScript",
      svg: JS,
      subSkills: [
        {
          name: "React",
          svg: ReactJS,
        },
        {
          name: "Tailwind CSS",
          svg: Tailwind,
        },
      ],
    },
  ],
  cloud: [
    {
      name: "Firebase",
      svg: Firebase,
    },
    {
      name: "Vercel",
      svg: Vercel,
    },
    {
      name: "PlanetScale",
      svg: Planetscale,
    },
  ],
  databases: [
    {
      name: "MySQL",
      svg: MySQL,
    },
    {
      name: "PostgreSQL",
      svg: Postgres,
    },
  ],
  languages: [
    {
      name: "Spanish (native)",
      svg: Language,
    },
    {
      name: "English (fluent)",
      svg: Language,
    },
  ],
  other: [
    {
      name: "Git",
      svg: Git,
    },
    {
      name: "Docker",
      svg: Docker,
    },
  ],
};

const Skills: React.FC = () => {
  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Section
            title="Programming Languages"
            skills={categories.programmingLanguages}
          />
          <Section title="Cloud" skills={categories.cloud} />
        </div>

        <div>
          <Section title="Databases" skills={categories.databases} />
          <Section title="Languages" skills={categories.languages} />
          <Section title="Other" skills={categories.other} />
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; skills: Skill[] }> = ({
  title,
  skills,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold my-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            skillName={skill.name}
            svgPath={skill.svg}
            subSkills={skill.subSkills}
          />
        ))}
      </div>
      <hr className="my-4 border-gray-300" /> {/* Divider */}
    </div>
  );
};

export default Skills;
