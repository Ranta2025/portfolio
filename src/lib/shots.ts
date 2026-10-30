import type { ImageMetadata } from "astro";
import type { Frame, Shot } from "../data/projects";

const files = import.meta.glob<{ default: ImageMetadata }>("../assets/work/*/*.png", { eager: true });

export interface ResolvedShot {
  image: ImageMetadata;
  alt: string;
  frame: Frame;
}

/** Resolves screenshot files for a case study, skipping the ones not captured yet. */
export function resolveShots(slug: string, shots: Shot[]): ResolvedShot[] {
  return shots.flatMap((shot) => {
    const module = files[`../assets/work/${slug}/${shot.file}`];
    return module ? [{ image: module.default, alt: shot.alt, frame: shot.frame }] : [];
  });
}
