import { ExternalLink } from 'lucide-react'

type Project = {
  title: string
  description: string
  tags: string[]
  link: string
  /** Optional related repos (e.g. split stack). */
  related?: { label: string; href: string }[]
}

const projects: Project[] = [
  {
    title: 'TCT StreamHub',
    description:
      'Organization project for livestream tooling—manage broadcasts, viewers, and stream workflows. Built with the TCT Softwares team.',
    tags: ['JavaScript', 'Streaming', 'Real-time'],
    link: 'https://github.com/TCT-Softwares/tct-stream-hub',
  },
  {
    title: 'Shoply e-commerce',
    description:
      'E-commerce platform work: product flows, auth, and APIs. Monolith and split front-end / back-end repos for clearer deployment.',
    tags: ['Python', 'TypeScript', 'REST', 'JWT'],
    link: 'https://github.com/thaitranchi/shoply-ecommerce',
    related: [
      { label: 'Front-end', href: 'https://github.com/thaitranchi/shoply-ecommerce-front-end' },
      { label: 'Back-end', href: 'https://github.com/thaitranchi/shoply-ecommerce-back-end' },
    ],
  },
  {
    title: 'HAR mobile app',
    description:
      'JavaScript mobile application—features and UI work on an actively maintained app with regular updates.',
    tags: ['JavaScript', 'Mobile', 'App'],
    link: 'https://github.com/thaitranchi/har-mobile-app',
  },
  {
    title: 'TCT Software website',
    description:
      'Marketing and company site for TCT Softwares—TypeScript, modern tooling, and deployable web presence.',
    tags: ['TypeScript', 'Web', 'Next.js'],
    link: 'https://github.com/thaitranchi/tct-software-website',
  },
  {
    title: 'TCT Softwares functions',
    description:
      'Serverless and cloud functions supporting products—integrations, triggers, and backend glue in TypeScript.',
    tags: ['TypeScript', 'Serverless', 'Cloud'],
    link: 'https://github.com/thaitranchi/tct-softwares-functions',
  },
  {
    title: 'AI assistant',
    description:
      'Python experiments around assistants and automation—scripts, APIs, and tooling for LLM-style workflows.',
    tags: ['Python', 'AI', 'Automation'],
    link: 'https://github.com/thaitranchi/ai-assistant',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <p className="mt-3 text-gray-600">
            Selected public repos from{' '}
            <a
              href="https://github.com/thaitranchi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 hover:underline"
            >
              GitHub
            </a>
            —streaming, e-commerce, mobile, infra, and experiments.
          </p>
        </div>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.title}
              className="group flex flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-gray-600 text-sm leading-relaxed">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  View on GitHub
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
                {project.related && project.related.length > 0 && (
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                    {project.related.map((r) => (
                      <a
                        key={r.href}
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                      >
                        {r.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
