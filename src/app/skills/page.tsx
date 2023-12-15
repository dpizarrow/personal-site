import Image from "next/image";

import SkillCard from "@/components/SkillCard";

import Python from "@/assets/svg/python.svg";
import Django from "@/assets/svg/django.svg";
import FastAPI from "@/assets/svg/fastapi.svg";

export default function Skills() {
  const skills = [
    {
      name: "Python",
      svg: Python,
      subSkills: [
        { name: "Django", svg: Django },
        { name: "FastAPI", svg: FastAPI },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
        Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            skillName={skill.name}
            svgPath={skill.svg}
            subSkills={skill.subSkills}
          />
        ))}
      </div>
    </div>
  );
}
