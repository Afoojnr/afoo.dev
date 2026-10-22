import { useTranslations } from "next-intl";

import ThemeSwitch from "@/components/ThemeSwitch";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="px-gutter max-w-page mx-auto w-full pb-10">
      <div className="border-line flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t pt-6">
        <p className="text-caption text-ink-soft uppercase">
          © {new Date().getFullYear()} Abdulhamid Afolabi
        </p>

        {/* low-priority setting: the theme already follows the system */}
        <div className="flex items-center gap-6">
          <ThemeSwitch />
          <a
            href="#home"
            className="group text-ink text-caption inline-flex shrink-0 items-center gap-2 font-medium whitespace-nowrap uppercase"
          >
            {t("backToTop")}
            <span
              aria-hidden
              className="ease-out-expo inline-block transition-transform duration-300 group-hover:-translate-y-1"
            >
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
