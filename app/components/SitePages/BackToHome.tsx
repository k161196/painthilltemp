import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function BackToHome() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white transition-colors"
    >
      <ArrowLeftIcon className="h-4 w-4" />
      Back to home
    </Link>
  );
}

