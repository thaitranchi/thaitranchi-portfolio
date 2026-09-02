import { SocialIconRow } from '@/components/SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-slate-50 px-4 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Trần Chí Thái. All rights reserved.
        </p>
        <SocialIconRow size="sm" />
      </div>
    </footer>
  )
}
