"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, type PanInfo } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import LocaleSwitch from "@/components/LocaleSwitch";
import PowerDot from "@/components/ui/PowerDot";
import TextLink from "@/components/ui/TextLink";
import { socialLinks, type NavItem } from "@/constants";
import { springs } from "@/lib/motion";
import CvKey from "./CvKey";

type MobileSheetProps = {
  items: NavItem[];
  active: string;
};

const DISMISS_DISTANCE = 120;
const DISMISS_VELOCITY = 600;

const MobileSheet = ({ items, active }: MobileSheetProps) => {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const handleDragEnd = (_: PointerEvent, info: PanInfo) => {
    if (
      info.offset.y > DISMISS_DISTANCE ||
      info.velocity.y > DISMISS_VELOCITY
    ) {
      setOpen(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="bg-surface shadow-raised active:shadow-pressed text-ink h-9 rounded-full px-4 text-sm font-semibold active:scale-[0.97] md:hidden">
        {t("menu")}
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={springs.ui}
                className="fixed inset-0 z-60 bg-black/40"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={springs.layout}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{ top: 0.04, bottom: 0.7 }}
                onDragEnd={handleDragEnd}
                className="bg-ground fixed inset-x-0 bottom-0 z-70 rounded-t-[1.75rem] px-6 pt-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_32px_rgb(0_0_0/0.18)] focus:outline-none"
              >
                <div
                  aria-hidden
                  className="bg-line mx-auto mb-6 h-1.5 w-10 rounded-full"
                />
                <Dialog.Title className="sr-only">{t("menu")}</Dialog.Title>
                <Dialog.Description className="sr-only">
                  {t("menuDescription")}
                </Dialog.Description>

                <nav aria-label={t("sections")}>
                  <ul className="border-ink border-t-2">
                    {items.map(item => (
                      <li key={item} className="border-line border-b">
                        <a
                          href={`#${item}`}
                          onClick={() => setOpen(false)}
                          aria-current={
                            item === active ? "location" : undefined
                          }
                          className="flex items-center justify-between py-4 text-2xl font-semibold"
                        >
                          {t(`items.${item}`)}
                          {item === active && <PowerDot />}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-6 flex items-center justify-between">
                  <LocaleSwitch />
                  <CvKey />
                </div>

                <ul className="mt-6 flex gap-5">
                  {socialLinks.map(({ href, label }) => (
                    <li key={label}>
                      <TextLink href={href} external>
                        {label}
                      </TextLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default MobileSheet;
