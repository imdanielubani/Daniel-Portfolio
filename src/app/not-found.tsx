import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found page-shell">
      <p className="eyebrow">404 / Route not found</p>
      <h1>Signal<br /><span>lost.</span></h1>
      <Link className="button button--orange" href="/"><ArrowLeft aria-hidden="true" /> Return home</Link>
    </main>
  );
}
