import { permanentRedirect } from "next/navigation";

// The practicum page became the Experience page; keep old links working.
export default function PracticumPage() {
  permanentRedirect("/experience");
}
