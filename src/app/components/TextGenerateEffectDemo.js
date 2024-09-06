"use client";
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect";

const words = `UI/UX designer and full-stack dev, making cool stuff that works.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
