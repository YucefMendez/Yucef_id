import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto section-padding flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-600 font-mono">
          &copy; {new Date().getFullYear()} {siteConfig.fullName}
        </p>
        <p className="text-xs text-slate-700">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
