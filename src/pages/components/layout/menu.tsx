// components/AnimatedSidebar.tsx
import { useState } from "react";
import Link from "next/link";
import { FaProjectDiagram, FaBriefcase, FaEnvelope } from "react-icons/fa";

const menuItems = [
  { name: "Profile", icon: "/logo-profile.png", link: "/" },
  { name: "Project", icon: <FaProjectDiagram size={50} />, link: "/project" },
  { name: "Work Experience", icon: <FaBriefcase size={50} />, link: "/work-experience" },
  { name: "Contact Me", icon: <FaEnvelope size={50} />, link: "/contact" },
];

const AnimatedSidebar: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-20 flex flex-col items-center justify-center bg-gray-900 text-white">
      {menuItems.map((item, index) => (
        <Link href={item.link} key={index}>
          <div
            className="group flex flex-col items-center mb-8 cursor-pointer transition ease-in-out delay-100 hover:-translate-y-3 hover:scale-110 duration-100"
          >
            <div>
              {typeof item.icon === "string" ? (
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={54}
                  height={54}
                />
              ) : (
                item.icon
              )}
            </div>
          </div>
        </Link>
      ))}
    </aside>
  );
};

export default AnimatedSidebar;
