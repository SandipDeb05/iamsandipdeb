import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import MyAboutProfileImage from "../../../public/static/about_profile_image.jpg";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next",
        "TypeScript",
        "JavaScript",
        "Redux",
        "React Router",
        "TanStack Query",
        "HTML/CSS",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "GraphQL", "MongoDB", "MySQL"],
    },
    {
      category: "Tools & Others",
      items: ["Webpack", "Vite", "CI/CD (GitHub Actions)", "Vercel"],
    },
  ];

  const experience = [
    {
      title: "Software Developer",
      company: "CLIRNET Services Pvt. Ltd.",
      period: "May 2024 - Present",
      link: "https://www.clirnet.com/",
      description:
        "Built scalable features like video surveys and multilingual support for DocTube, optimized performance by 26+ PageSpeed points, integrated real-time AI assistant (AiDA) using GPT-4o Mini, and delivered UI solutions for global clients while improving code reliability with unit & integration tests.",
    },
    {
      title: "Software Engineer",
      company: "XopunTech India Pvt. Ltd.",
      period: "Jan 2022 - May 2024",
      link: "https://www.xopuntech.com/",
      description:
        "Mentored junior developers, optimized API handling with React Context API (25% faster), integrated GraphQL Apollo Client for improved performance, and built 20+ reusable components with Storybook documentation. Awarded Employee of the Month (Feb 2022).",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Hey there 👋
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I'm Sandip Deb, a passionate Software Engineer who loves building
            innovative solutions and learning new technologies.
          </p>
        </div>

        <div>
          <Image
            // src={MyAboutProfileImage}
            src={"https://avatar.iran.liara.run/public/25"}
            alt="Sandip Deb"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8"
          />
        </div>

        {/* Bio Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            My Story
          </h2>
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I started my journey in software development during my engineering
              days, and over time, I discovered a strong passion for building
              modern web applications. My curiosity for technology and
              problem-solving naturally led me towards frontend development,
              where I could combine creativity with technical skills to craft
              impactful user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Since then, I've had the opportunity to work with early-stage and
              mid-sized startups, building scalable platforms, optimizing
              performance, and integrating AI-driven solutions into real-world
              applications. These experiences taught me the value of clean,
              maintainable code, collaborative teamwork, and the importance of
              creating solutions that truly make an impact.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, you'll find me exploring new technologies,
              sketching out project ideas, or enjoying good conversations over
              coffee. I believe in continuous learning, mentoring others, and
              contributing positively to every team I work with.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {job.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                    {job.period}
                  </span>
                </div>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg text-blue-600 dark:text-blue-400 mb-3 hover:underline"
                >
                  {job.company}
                </a>
                <p className="text-gray-700 dark:text-gray-300">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Education
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Bachelor of Technology in Electronics and Electrical Engineering
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                2017 - 2021
              </span>
            </div>
            <a
              href="https://kiit.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-blue-600 dark:text-blue-400 mb-3 hover:underline"
            >
              Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar,
              Odisha
            </a>
            <p className="text-gray-700 dark:text-gray-300">
              Completed a four-year degree in Electronics and Electrical
              Engineering, where I built strong analytical skills. Driven by my
              passion for software development, I self-learned programming and
              web technologies, laying the foundation for my career in software
              engineering.
            </p>
          </div>
        </section>

        {/* Interests Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Interests & Hobbies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Technology
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                I'm passionate about exploring new technologies and frameworks.
                I enjoy experimenting with emerging tools and collaborating with
                others to create meaningful solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Curiosity & Creativity
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                I enjoy continuous learning and exploring new ideas with the
                developer community, and I also love capturing moments through
                photography.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
