// import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { XLogo, LinkedinLogo, GithubLogo, Envelope, ArrowUp } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-zinc-950 text-zinc-300 w-full max-w-7xl rounded-md">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Top section */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Oguogho Osebhohien</h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              Full Stack Developer focused on building clean, scalable, and
              user‑friendly web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>
            <div className="flex gap-4">
              <a href="https://github.com/osesoguogho" target="_blank" className="hover:text-white">
                <GithubLogo size={20} />
              </a>
              <a href="https://linkedin.com/in/osebhohien oguogho" target="_blank" className="hover:text-white">
                <LinkedinLogo size={20} />
              </a>
              <a href="https://twitter.com/oses4sure" target="_blank" className="hover:text-white">
                <XLogo size={20} />
              </a>
              <a href="mailto:osesthedon@gmail.com" className="hover:text-white">
                <Envelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-zinc-800" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p className="text-zinc-500">
            © {year} Oses. All rights reserved.
          </p>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-zinc-300 hover:text-white"
          >
            <ArrowUp size={16} /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
