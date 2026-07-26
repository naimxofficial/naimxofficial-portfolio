"use client";

import { motion } from "motion/react";
import { VscVscode } from "react-icons/vsc";
import {
    SiGooglefonts,
    SiPenpot,
    SiVite,
    SiHtml5,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiDaisyui,
    SiFramer,
    SiReactrouter,
    SiMongodb,
    SiExpress,
    SiNodedotjs,
    SiStripe,
    SiAxios,
    SiGit,
    SiGithub,
    SiVercel,
    SiNetlify,
    SiFigma,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import {
    HiOutlineShieldCheck,
    HiOutlineMail,
    HiOutlineChartBar,
    HiOutlineSparkles,
    HiOutlineColorSwatch,
    HiOutlineCube,
    HiOutlineCode,
} from "react-icons/hi";

const SKILL_GROUPS = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: DiCss3 },
            { name: "JavaScript", icon: SiJavascript },
            { name: "React", icon: SiReact },
            { name: "Vite", icon: SiVite },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "DaisyUI", icon: SiDaisyui },
            { name: "Hero UI", icon: HiOutlineColorSwatch },
            { name: "Framer Motion", icon: SiFramer },
            { name: "React Icons", icon: HiOutlineCube },
            { name: "Next Themes", icon: HiOutlineSparkles },
            { name: "React Router", icon: SiReactrouter },
            { name: "DOM", icon: HiOutlineCode },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Better Auth", icon: HiOutlineShieldCheck },
            { name: "Stripe", icon: SiStripe },
            { name: "Nodemailer", icon: HiOutlineMail },
            { name: "Axios", icon: SiAxios },
        ],
    },
    {
        title: "Tools & Other",
        skills: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Vercel", icon: SiVercel },
            { name: "Netlify", icon: SiNetlify },
            { name: "Recharts", icon: HiOutlineChartBar },
            { name: "Figma", icon: SiFigma },
            { name: "Visual Studio Code", icon: VscVscode },
            { name: "Google Fonts", icon: SiGooglefonts },
            { name: "Penpot", icon: SiPenpot },
            { name: "AI-Assisted Coding", icon: HiOutlineSparkles },
        ],
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.04, ease: "easeOut" },
    }),
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-28"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl font-bold text-center mb-16"
            >
                My{" "}
                <span className="px-2 -mx-1 bg-foreground text-background rounded-sm">
                    Skills
                </span>
            </motion.h2>

            <div className="space-y-14">
                {SKILL_GROUPS.map((group) => (
                    <div key={group.title}>
                        <motion.h3
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="text-lg font-semibold mb-6 text-muted-foreground uppercase tracking-wide text-sm"
                        >
                            {group.title}
                        </motion.h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {group.skills.map((skill, i) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        custom={i}
                                        variants={fadeUp}
                                        whileHover={{ y: -4 }}
                                        className="group flex flex-col items-center justify-center gap-3 aspect-square border border-border rounded-md p-4 bg-card hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-300 cursor-default"
                                    >
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300" />
                                        <span className="text-xs sm:text-sm font-medium text-center leading-tight">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}