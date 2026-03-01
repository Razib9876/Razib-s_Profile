import projects_game_center from "@/public/projects/safar.png";
import drawing_app from "@/public/projects/electro.png";
import todoApp from "@/public/projects/todoApp.png";

import Image from "next/image";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import Button from "../general/Button";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <div
      id="projects_section"
      className="w-full z-10 bg-white relative pt-60 min-h-screen px-5 md:px-10 lg:px-20 2xl:px-40"
    >
      {/* Wave */}
      <svg
        width={"100%"}
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="z-20 absolute -top-1 xl:-top-32 left-0 transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 91.07142857142858,234.07142857142858 182.14285714285717,268.14285714285717 295,265 C 407.85714285714283,261.85714285714283 542.5,221.5 667,218 C 791.5,214.5 905.8571428571429,247.85714285714286 1033,251 C 1160.142857142857,254.14285714285714 1300.0714285714284,227.07142857142856 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#c084fc"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>

      {/* Content */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl z-30 md:text-5xl tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-500 font-mono"
      >
        MY PROJECTS
      </motion.span>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-black/50 md:w-1/2"
      >
        Below you can see my best projects and their working live versions. If
        you want to see the full list of apps I&apos;ve created, check out my
        github profile.
      </motion.p>

      <div className="w-full h-full flex flex-col gap-32 mt-10 mb-32 overflow-hidden">
        {/* Game center app */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full flex items-center lg:justify-between flex-col lg:flex-row relative gap-5"
        >
          <Image
            src={projects_game_center}
            alt="Game center"
            priority={true}
            className="lg:w-[30rem] xl:w-[40rem] rounded-xl z-20 border-2"
          />
          <div className="flex flex-col justify-center h-full w-full gap-2 z-20">
            <h1 className="text-3xl md:text-5xl text-black font-mono tracking-wide">
              SAFAR BOOKING SYSTEM
            </h1>
            <p>
              Safar is a full-stack transport and trip booking application
              designed to manage bookings, drivers, and trip operations
              efficiently. This platform allows users to create bookings,
              receive driver quotes, select offers, and complete trips through a
              structured workflow. It provides separate dashboards for Admin and
              Drivers to manage trips and monitor activities in real time. The
              system includes secure authentication, role-based access control,
              and booking status management. The application is built using{" "}
              <b>React.js</b> for the frontend and <b>Node.js</b> with{" "}
              <b>Express.js</b> for the backend, with <b>MongoDB</b> used for
              database management. The user interface is designed with
              TailwindCSS to ensure a clean and responsive experience.
            </p>

            <div className="flex justify-between items-center mt-5">
              <Button
                text={"go to website"}
                link="https://safarapps.netlify.app"
                icon={<BsLink45Deg className="h-5 w-5"></BsLink45Deg>}
              />
              <Button
                text={"go to code"}
                link="https://github.com/Razib9876/Safar-App.git"
                icon={<BsGithub className="h-5 w-5"></BsGithub>}
              />
            </div>
          </div>
        </motion.div>

        {/* Drawing app */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full flex items-center flex-col lg:flex-row relative gap-5"
        >
          <div className="flex flex-col justify-center h-full order-2 lg:order-1 w-full gap-2">
            <h1 className="text-3xl md:text-5xl text-black font-mono tracking-wide">
              ELECTRO AI PLATFORM
            </h1>
            <p>
              Electro AI Platform is a modern electrical knowledge and
              AI-assisted learning system built to support electricians with
              structured guidance on home wiring, DB board setup, load
              calculation, safety standards, and regulations. The project
              focuses on clean UI/UX design, responsive layouts, and smooth user
              interaction. It is developed using <b>React.js</b>,{" "}
              <b>TailwindCSS</b>, and <b>Framer Motion</b> to deliver a
              professional and interactive frontend experience.
            </p>
            <div className="flex justify-between items-center mt-5">
              <Button
                text={"go to website"}
                link="https://electpro1.netlify.app/"
                icon={<BsLink45Deg className="h-5 w-5"></BsLink45Deg>}
              />
              <Button
                text={"go to code"}
                link="https://github.com/Razib9876/electpro.git"
                icon={<BsGithub className="h-5 w-5"></BsGithub>}
              />
            </div>
          </div>
          <Image
            src={drawing_app}
            alt="Game center"
            priority={true}
            className="lg:w-[30rem] xl:w-[40rem] rounded-xl border-2 order-1"
          />
        </motion.div>

        {/* TODO kanban app */}
        {/* <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full flex items-center lg:justify-between flex-col lg:flex-row relative gap-5"
        >
          <Image
            src={todoApp}
            alt="Game center"
            priority={true}
            className="lg:w-[30rem] xl:w-[40rem] rounded-xl z-20 border-2"
          />
          <div className="flex flex-col justify-center h-full w-full gap-2 z-20">
            <h1 className="text-3xl md:text-5xl text-black font-mono tracking-wide">
              KANBAN APP
            </h1>
            <p>
              This app was my <b>first React.js project</b>. I learned a lot
              while creating it. It is very simple code and design. The purpose
              of the application is to make it easier for the user to manage
              their tasks by adding them to the appropriate tables, in which
              they can segregate them, e.g. due to work progress. Users can
              create new categories, tables and tasks, edit existing ones and
              move tasks between different columns.
            </p>

            <div className="flex justify-between items-center mt-5">
              <Button
                text={"go to website"}
                link="https://react-kanban-app-mu.vercel.app"
                icon={<BsLink45Deg className="h-5 w-5"></BsLink45Deg>}
              />
              <Button
                text={"go to code"}
                link="https://github.com/iEranDEV/react-kanban-app"
                icon={<BsGithub className="h-5 w-5"></BsGithub>}
              />
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
