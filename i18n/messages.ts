import enAbout from "@/messages/en/about.json";
import enCommon from "@/messages/en/common.json";
import enContact from "@/messages/en/contact.json";
import enCv from "@/messages/en/cv.json";
import enExperience from "@/messages/en/experience.json";
import enFooter from "@/messages/en/footer.json";
import enHero from "@/messages/en/hero.json";
import enMetadata from "@/messages/en/metadata.json";
import enNav from "@/messages/en/nav.json";
import enWorks from "@/messages/en/works.json";
import frAbout from "@/messages/fr/about.json";
import frCommon from "@/messages/fr/common.json";
import frContact from "@/messages/fr/contact.json";
import frCv from "@/messages/fr/cv.json";
import frExperience from "@/messages/fr/experience.json";
import frFooter from "@/messages/fr/footer.json";
import frHero from "@/messages/fr/hero.json";
import frMetadata from "@/messages/fr/metadata.json";
import frNav from "@/messages/fr/nav.json";
import frWorks from "@/messages/fr/works.json";

import type { Locale } from "./config";

// one file per section in messages/<locale>/, merged under the section name
const en = {
  common: enCommon,
  nav: enNav,
  metadata: enMetadata,
  hero: enHero,
  about: enAbout,
  experience: enExperience,
  works: enWorks,
  contact: enContact,
  footer: enFooter,
  cv: enCv
};

export type Messages = typeof en;

// typed against English, so a missing French key fails yarn ts-check
const fr: Messages = {
  common: frCommon,
  nav: frNav,
  metadata: frMetadata,
  hero: frHero,
  about: frAbout,
  experience: frExperience,
  works: frWorks,
  contact: frContact,
  footer: frFooter,
  cv: frCv
};

export const messages: Record<Locale, Messages> = { en, fr };
