export interface Profile {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  intro: string;
  location: { current: string; next: string };
  workAuthorization: string;
  availability: string;
  email: string;
  links: { github: string; linkedin?: string };
  education: { degree: string; school: string; status: string };
  languages: string[];
}

export const profile: Profile = {
  name: "Rafael Antonio Tanda Pretel",
  shortName: "Rafael Tanda",
  role: "Software Engineer",
  headline:
    "I build software that keeps working when the network, the hardware and the budget don't.",
  intro:
    "Backend in Go and TypeScript, offline-first apps in Flutter, Godot and Python. Most of what I ship runs on low-end Android phones and office PCs with no reliable connection, so I design for failure first: local data as the source of truth, explicit sync, tests against real databases and hard performance budgets. I work AI-first: coding agents implement from my written specs, and I built my own tooling to orchestrate them.",
  location: { current: "Havana, Cuba", next: "La Palma, Spain" },
  workAuthorization: "Spanish citizen — authorized to work in the EU, no visa required",
  availability: "Open to remote and on-site roles",
  email: "tandapretelrafael2005@gmail.com",
  links: {
    github: "https://github.com/Ranta2025",
    // TODO: add LinkedIn URL once the profile exists.
  },
  education: {
    degree: "B.Eng. in Computer Science (Ingeniería en Ciencias Informáticas)",
    school: "University of Information Sciences (UCI), Havana",
    status: "3rd of 4 years, expected 2028",
  },
  languages: ["Spanish — native", "English — B1 (certification exam March 2027)"],
};
