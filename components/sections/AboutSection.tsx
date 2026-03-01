import { BsDownload } from "react-icons/bs";
import Button from "../general/Button";
import SocialIcons from "../general/SocialIcons";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div
      id="about_section"
      className="w-full relative z-20 min-h-screen text-white bg-gradient-to-t from-purple-400 to-purple-500 px-5 md:px-10 lg:px-40 py-20 flex flex-col justify-center gap-10"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-mono tracking-wide"
      >
        ABOUT ME
      </motion.h1>

      <p className="text-lg">
        Hi! My name is Mohammad Razib and I’m a passionate Full Stack Developer
        from Bangladesh who has been interested in technology and programming
        for several years. Currently, I’m focused on building modern and
        scalable web applications using React, Node.js, Express, and MongoDB. I
        have worked on real-world projects, including a complete booking and
        management system, where I handled both frontend and backend
        development. In my free time, I enjoy improving my coding skills,
        building personal projects, and exploring new tools and technologies in
        the web development ecosystem. I’m constantly pushing myself to learn
        more, write cleaner code, and build better user experiences. I’m always
        excited to take on new challenges and grow as a developer.
        <br />
        <br />
        Thanks for visiting my portfolio website, and I hope you enjoy exploring
        some of my projects!
        <br />
        <br />
        <span>
          Full Stack Web Developer | React Next.js Node.js TypeScript MongoDB
          TailwindCSS
        </span>
      </p>

      <SocialIcons />

      <div className="flex justify-between flex-col md:flex-row gap-5 w-52 md:w-full">
        <Button link="#projects_section" text={"check my work"} white />
        <Button
          icon={<BsDownload className="h-4 w-4" />}
          text={"download cv"}
          white
        />
      </div>
    </div>
  );
}
