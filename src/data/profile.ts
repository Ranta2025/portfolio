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
  role: "Full-Stack Software Engineer",
  headline: "Full-stack engineer shipping real products with AI agents in the loop.",
  intro:
    "Go and TypeScript backends, React web apps, Flutter mobile apps and desktop tools, delivered end to end for real clients. I work AI-native: coding agents implement from my specs, and every change passes tests and my own review before it lands.",
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
