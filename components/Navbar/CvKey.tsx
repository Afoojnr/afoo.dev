import { useLocale, useTranslations } from "next-intl";
import { FiArrowUpRight } from "react-icons/fi";

import { cvFor } from "@/i18n/config";

type CvKeyProps = {
  className?: string;
};

// opens in the browser's PDF viewer, which still offers download and print
const CvKey = ({ className = "" }: CvKeyProps) => {
  const locale = useLocale();
  const t = useTranslations("common");

  return (
    <a
      href={cvFor(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("openCv")}
      className={`group bg-surface shadow-raised active:shadow-pressed text-ink inline-flex h-9 items-center gap-1.5 rounded-full px-4 text-sm font-semibold transition-[transform,box-shadow] duration-100 active:scale-[0.97] ${className}`}
    >
      CV
      <FiArrowUpRight
        aria-hidden
        className="ease-out-expo size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
};

export default CvKey;
