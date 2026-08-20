import { permanentRedirect } from "next/navigation";

// Root route: permanent redirect to the English homepage.
// Avoids duplicate content (legacy root page vs /en) and keeps
// all content served through the localized routes (/id, /en).
export default function RootPage() {
  permanentRedirect("/en");
}
