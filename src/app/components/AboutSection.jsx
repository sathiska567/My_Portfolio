"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import styles from '../components/sections.module.css';
import './components.css'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-3 grid grid-cols-3 gap-3">
        <li>React</li>
        <li>NodeJs</li>
        <li>MySQL</li>
        <li>Nextjs</li>

        <li>NestJs</li>
        <li>MongoDB</li>
        <li>Angular</li>
        <li>SpringBoot</li>

        <li>FireBase</li>
        <li>Flutter</li>
        <li>Sequelize</li>
        <li>MsSQL</li>

        <li>React Native</li>

        <li>C</li>
        <li>Java</li>
        {/* <li>Python</li> */}
        <li>Dart</li>

      </ul>

    
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Third-Year Undergraduate Student at the University of Moratuwa Faculty Of Information Technology </li><br/>
        <li>G.C.E Advanced Level 2021</li>
        <li style={{listStyleType:"none"}}>z-score: District Rank: 2.0681  -  Feb 2021</li><br/>
        <li style={{listStyleType:"none"}}>Combined Maths - A</li>
        <li style={{listStyleType:"none"}}>Physics - A</li>
        <li style={{listStyleType:"none"}}>Chemistry - A</li>
        
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
        I have gained 4 months worth of experience at Crytec Labs (Pvt) working on various projects using cutting edge technologies like Next.js, Node.js, MySQL, Flutter, and React. These projects allowed me to develop both front-end and back-end applications, and enhanced my expertise in full-stack development and mobile application development.  
        </li><br/>
        <a href="https://www.linkedin.com/posts/crytec-labs_cryteclabs-newaddition-activity-7187628650723192832-oXUh?utm_source=share&utm_medium=member_desktop" style={{textDecoration:"underline"}}>See Appointment</a>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className={styles.about_image}>
          <div className={styles.box}>
          <Image src="/images/about-image.png" width={600} height={600} />
          </div>
        </div>
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ml-6">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base">
            A passionate , enthusiastic , and skilled undergraduate who is
            dedicated to Working smart to achieve goals and is up for any
            challenge.Furthermore,a responsible team player with solid and friendly
            leadership qualities and a good team spirit.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {"  "}
              Experience{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
