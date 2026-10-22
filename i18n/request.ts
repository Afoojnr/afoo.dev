import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "./config";
import { messages } from "./messages";

// "fr-FR,fr;q=0.9,en;q=0.8" -> the first listed language we support
const fromAcceptLanguage = (header: string | null): Locale | undefined =>
  header
    ?.split(",")
    .map(part => part.split(";")[0].trim().slice(0, 2).toLowerCase())
    .find(isLocale);

export default getRequestConfig(async () => {
  const saved = (await cookies()).get(LOCALE_COOKIE)?.value;
  const locale = isLocale(saved)
    ? saved
    : (fromAcceptLanguage((await headers()).get("accept-language")) ??
      defaultLocale);

  return { locale, messages: messages[locale], timeZone: "Europe/Paris" };
});
