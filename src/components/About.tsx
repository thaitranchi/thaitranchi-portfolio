const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'API design',
  'Cloud & DevOps',
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center">About</h2>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed text-center sm:text-left">
          I build reliable web products end to end—from clear UI and performant front ends to
          solid APIs and deployment. When I am not shipping code, I am probably gaming or
          tinkering with side projects.
        </p>
        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-600 text-center sm:text-left">
            Skills & focus
          </h3>
          <ul className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-indigo-50 text-indigo-800 border border-indigo-100"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
