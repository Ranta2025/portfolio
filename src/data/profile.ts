export interface Profile {
  name: string;
  firstName: string;
  role: string;
  tagline: string;
  bio: string;
  location: { current: string; target: string };
  email: string;
  socials: {
    github: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  citizenship: string[];
}

export const profile: Profile = {
  name: "Rafael Antonio Tanda Pretel",
  firstName: "Rafael",
  role: "Backend Engineer",
  tagline:
    "Building robust, real-time backend systems. Available for work in Spain soon.",
  bio: `I'm a backend engineer and 3rd-year Ingeniería en Ciencias Informáticas student in Havana, Cuba, with hands-on experience designing distributed systems in Go and TypeScript. My flagship project, WhatsApp-Fake, ships 7 Docker services — WebSocket real-time chat, JWT auth with bcrypt + lockout, MinIO multimedia, and ZegoCloud videocalls.

I hold dual Cuban and Spanish citizenship. Dual nationality is an asset: it gives me mobility across the EU and a wider perspective on how teams ship software under different constraints.

I'm relocating to La Palma, Spain in the coming months and I'm available for both remote and on-site roles. I care about clean architecture, observability, and shipping things that actually run in production.`,
  location: { current: "Havana, Cuba", target: "La Palma, Spain" },
  email: "tandapretelrafael2005@gmail.com",
  socials: {
    github: "https://github.com/Ranta2025",
    instagram: "https://instagram.com/r_tanda",
  },
  citizenship: ["Cuban", "Spanish"],
};
