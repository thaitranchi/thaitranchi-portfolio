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
    <section id="about" className="bg-white px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">About</h2>
        <p className="mt-6 text-center text-lg leading-relaxed text-gray-600 sm:text-left">
          I build reliable web products end to end—from clear UI and performant front ends to
          solid APIs and deployment. When I am not shipping code, I am probably gaming or
          tinkering with side projects.
        </p>
        <div className="mt-10">
          <h3 className="text-center text-sm font-semibold tracking-wider text-indigo-600 uppercase sm:text-left">
            Skills & focus
          </h3>
          <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-800"
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
