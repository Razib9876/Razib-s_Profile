import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full px-10 lg:px-20 py-5 flex flex-col md:flex-row gap-5 justify-between items-center text-white/50 bg-[#4C4E52] text-white">
      <p>Made by Mohammad Razib</p>

      <div className="flex items-center gap-5">
        <a href="https://github.com/Razib9876" target="_blank">
          <BsGithub className="h-6 w-6" />
        </a>
        <a href="" target="_blank">
          <BsLinkedin className="h-6 w-6" />
        </a>
        <a href="mohammadrazib987@gmail.com">
          <BsEnvelope className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}
