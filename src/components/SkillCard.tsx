"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

// Define a type for sub-skill
interface SubSkill {
  name: string;
  svg: string;
}

// Define a type for SkillCard props
interface SkillCardProps {
  skillName: string;
  svgPath: string;
  subSkills?: SubSkill[];
}

const SkillCard: React.FC<SkillCardProps> = ({
  skillName,
  svgPath,
  subSkills,
}) => {
  const { theme } = useTheme(); // Use the useTheme hook

  // Determine border style based on theme
  const borderStyle = theme === "dark" ? "border-gray-300" : "border-gray-700";

  return (
    <div
      className={`flex flex-col items-center rounded-lg shadow-md p-4 w-full md:w-64 border-2 ${borderStyle}`}
    >
      <Image
        src={svgPath}
        alt={skillName}
        width={48} // Set width
        height={48} // Set height
        className="dark:filter dark:invert"
      />
      <h2 className="mt-2 text-lg font-semibold">{skillName}</h2>
      {subSkills && (
        <div className="mt-4">
          {subSkills.map((subSkill, index) => (
            <div key={index} className="mt-2 flex items-center">
              <Image
                src={subSkill.svg}
                alt={subSkill.name}
                width={24} // Set width for sub-skill images
                height={24} // Set height for sub-skill images
                className="dark:filter dark:invert"
              />
              <span className="ml-2 text-sm">{subSkill.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillCard;
