import { motion } from "framer-motion";
import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";

export default function SocialIcons({ black }: { black?: boolean }) {
  return (
    <div className="flex items-center gap-5">
      <motion.a
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        whileHover={{ y: -5, transition: { delay: 0 } }}
        href="https://github.com/Razib9876"
        target="_blank"
        className={black ? "text-black" : "text-white"}
      >
        <BsGithub className="h-6 w-6" />
      </motion.a>
      <motion.a
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
        whileHover={{ y: -5, transition: { delay: 0 } }}
        href="www.linkedin.com/in/mohammad-razib-3972873b4"
        target="_blank"
        className={black ? "text-black" : "text-white"}
      >
        <BsLinkedin className="h-6 w-6" />
      </motion.a>
      <motion.a
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        whileHover={{ y: -5, transition: { delay: 0 } }}
        href="mailto:mohammadrazib987@gmail.com"
        className={black ? "text-black" : "text-white"}
      >
        <BsEnvelope className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
