import { CheckIcon } from "@heroicons/react/24/outline";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "Figma", "Postman"],
    },
  ];

  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description:
        "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
    },
    {
      title: "Full-Stack Developer",
      company: "Startup XYZ",
      period: "2020 - 2022",
      description:
        "Built and maintained multiple web applications, working closely with design and product teams.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency ABC",
      period: "2018 - 2020",
      description:
        "Developed responsive websites and web applications for various clients using modern frontend technologies.",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer who loves building innovative solutions
            and learning new technologies.
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            My Story
          </h2>
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I started my journey in web development over 5 years ago, and I've
              been passionate about creating digital experiences ever since. My
              curiosity for technology and problem-solving led me to explore
              various aspects of software development, from frontend interfaces
              to backend systems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Throughout my career, I've had the opportunity to work on diverse
              projects, from small business websites to large-scale enterprise
              applications. This experience has taught me the importance of
              writing clean, maintainable code and building scalable solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me contributing to open-source
              projects, writing technical blog posts, or exploring new
              technologies. I believe in continuous learning and sharing
              knowledge with the developer community.
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
                <p className="text-lg text-blue-600 dark:text-blue-400 mb-3">
                  {job.company}
                </p>
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
                Bachelor of Science in Computer Science
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                2014 - 2018
              </span>
            </div>
            <p className="text-lg text-blue-600 dark:text-blue-400 mb-3">
              University of Technology
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Graduated with honors. Focused on software engineering,
              algorithms, and web development. Completed capstone project on
              building a real-time collaboration platform.
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
                I'm always exploring new technologies and frameworks. I enjoy
                experimenting with emerging tools and contributing to
                open-source projects.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Learning & Writing
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                I love sharing knowledge through technical writing and
                mentoring. Writing helps me solidify my understanding and help
                others in their learning journey.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
