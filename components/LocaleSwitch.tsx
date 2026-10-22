"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useOptimistic, useTransition } from "react";

import { setLocale } from "@/i18n/actions";
import { locales, type Locale } from "@/i18n/config";
import { springs } from "@/lib/motion";

// each option names itself in its own language
const NAMES: Record<Locale, string> = { en: "English", fr: "Français" };

const OPTION = 32;

const LocaleSwitch = () => {
  const t = useTranslations("common");
  const router = useRouter();
  const locale = useLocale();
  const [, startTransition] = useTransition();
  // the knob moves at once; the text follows when the refresh lands
  const [shown, setShown] = useOptimistic(locale);

  const choose = (next: Locale) => {
    if (next === shown) return;
    startTransition(async () => {
      setShown(next);
      await setLocale(next);
      router.refresh();
    });
  };

  return (
    <div
      role="group"
      aria-label={t("language")}
      className="bg-track shadow-pressed relative flex h-8 shrink-0 items-center rounded-full p-1"
    >
      <motion.span
        aria-hidden
        initial={false}
        animate={{ x: locales.indexOf(shown) * OPTION }}
        transition={springs.ui}
        className="bg-knob shadow-raised absolute top-1 left-1 h-6 w-8 rounded-full"
      />
      {locales.map(option => (
        <motion.button
          key={option}
          type="button"
          lang={option}
          aria-label={NAMES[option]}
          aria-pressed={option === shown}
          onClick={() => choose(option)}
          whileTap={{ scale: 0.92 }}
          transition={springs.press}
          className={`relative h-6 w-8 rounded-full text-[0.6875rem] font-semibold tracking-wide uppercase transition-colors duration-200 ${
            option === shown ? "text-ink" : "text-ink-soft hover:text-ink"
          }`}
        >
          {option}
        </motion.button>
      ))}
    </div>
  );
};

export default LocaleSwitch;
