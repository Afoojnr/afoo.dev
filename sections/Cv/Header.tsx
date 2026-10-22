import { getTranslations } from "next-intl/server";

import { cvContact } from "@/constants/cv";

const Header = async () => {
  const t = await getTranslations("cv");

  return (
    // contact sits under the name, not in a side column, so text readers
    // and ATS parsers reach it straight after the name
    <header>
      <h1 className="font-[family-name:var(--font-archivo)] text-[24pt] leading-none font-extrabold tracking-[-0.01em] text-(--cv-accent)">
        Abdulhamid Afolabi
      </h1>
      <p className="mt-[2mm] text-[10.5pt] font-semibold">{t("title")}</p>
      <p className="mt-[1mm] text-[8.2pt] text-[#55534e]">
        {`${t("location")} · ${cvContact.phone} · `}
        <a href={`mailto:${cvContact.email}`}>{cvContact.email}</a>
        {cvContact.links.map(link => (
          <span key={link.href}>
            {" · "}
            <a href={link.href}>{link.label}</a>
          </span>
        ))}
      </p>
      <p className="mt-[0.6mm] text-[8.2pt] text-[#55534e]">{t("status")}</p>
    </header>
  );
};

export default Header;
