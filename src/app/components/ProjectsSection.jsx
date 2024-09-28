"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJs Portfolio Website",
    description: "Technology - NextJs",
    image: "/images/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 2,
    title: "Sport Management System (second Year Software Project)",
    description: "Technology - React , Nodejs , ExpressJs , MongoDB , AWS(EC2 , S3 bucket)",
    image: "/images/se_project.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sathiska567/Sport-Management-System-Project",
    previewUrl: "https://www.linkedin.com/posts/sathiska-sasindu-749709273_sportmanagementsystem-uom-bistec-activity-7221526549903155200-eMvF?utm_source=share&utm_medium=member_desktop",
  },
  {
    id:3,
    title: "GU Language Student Management System And Web Site",
    description: "Technology - React , Nodejs , ExpressJs , MongoDB , AWS(EC2 , S3 bucket)",
    image: "/images/projects/student-management-system.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sathiska567/English-Student-Management-System",
    previewUrl: "https://www.linkedin.com/posts/sathiska-sasindu-749709273_reactjs-expressjs-nodejs-activity-7166530036945121281-2PTr?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 4,
    title: "Expense Mobile Application",
    description: "Technology - Flutter , Dart",
    image: "/images/mobile.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/sathiska567/Expense-Tracking-App",
    previewUrl: "https://www.linkedin.com/posts/sathiska-sasindu-749709273_expensetrackerapp-flutterapp-dartprogramming-activity-7167452128498626560-zNWk?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 5,
    title: "RiceUp Mora Web Site",
    description: "Technology - React , Firebase",
    image: "/images/riceup.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rise-Up-Mora",
    previewUrl: "https://riseupmora.lk/",
  },
  {
    id: 6,
    title: "Book Cover Release Web Site",
    description: "Technology - React , Nodejs , ExpressJs , MongoDB , AWS(EC2)",
    image: "/images/book_cover.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sathiska567/Book_Cover_Project",
    previewUrl: "https://www.linkedin.com/posts/sathiska-sasindu-749709273_codevanguard-fullstackdevelopment-reactjs-activity-7154181622685167616-GcAD?utm_source=share&utm_medium=member_desktop",
  },

  {
    id: 7,
    title: "Wedding Management System(On Going)",
    description: "Technology - Angular , SpringBoot , MySQL , AWS(EC2 , S3 bucket)",
    image: "/images/wedding_2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sathiska567/Book_Cover_Project",
    previewUrl: "https://www.linkedin.com/posts/sathiska-sasindu-749709273_codevanguard-fullstackdevelopment-reactjs-activity-7154181622685167616-GcAD?utm_source=share&utm_medium=member_desktop",
  },

  {
    id: 8,
    title: "Coca-Cola Employee Management System(On Going)",
    description: "Technology - React Native , Nodejs , Expressjs , MongoDB",
    image: "/images/employee.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Coca-Cola-Mobile-Application/Mobile-Application",
    previewUrl: "",
  },

  {
    id: 9,
    title: "E-Commerce Music Web Application(On Going)",
    description: "Technology - React , NestJs , MongoDB",
    image: "/images/e-commerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sathiska567/Digit-Ocean-Backend",
    previewUrl: "",
  },

  {
    id: 9,
    title: "Wedding Management System Mobile Application(On Going)",
    description: "Technology - Flutter , NestJs , MongoDB",
    image: "/images/projects/wedding-mobile-app.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/orgs/Wedding-Mobile-Application/repositories",
    previewUrl: "",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
