"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import Image from "next/image";

import PowerDot from "@/components/ui/PowerDot";
import TextLink from "@/components/ui/TextLink";
import { experiences, works } from "@/constants";

type CompanyHoverCardProps = {
  // experience company_name and work title to show in the card
  company: string;
  work: string;
  href: string;
  children: React.ReactNode;
  className?: string;
  arrowClassName?: string;
};

const CompanyHoverCard = ({
  company: companyName,
  work: workTitle,
  href,
  children,
  className,
  arrowClassName
}: CompanyHoverCardProps) => {
  const company = experiences.find(role => role.company_name === companyName);
  const product = works.find(work => work.title === workTitle);

  const link = (
    <TextLink
      href={href}
      external
      className={className}
      arrowClassName={arrowClassName}
    >
      {children}
    </TextLink>
  );

  if (!company) return link;

  return (
    <HoverCard.Root openDelay={120} closeDelay={160}>
      <HoverCard.Trigger asChild>{link}</HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content
          side="top"
          align="start"
          sideOffset={10}
          collisionPadding={16}
          className="bg-surface border-line shadow-raised rounded-plate data-[state=closed]:animate-card-out data-[state=open]:animate-card-in z-60 w-72 border p-4 motion-reduce:animate-none"
        >
          <div className="flex items-center gap-3">
            <Image
              src={company.icon}
              alt=""
              width={36}
              height={36}
              className="size-9 rounded-md object-contain"
            />
            <div>
              <p className="text-ink leading-tight font-semibold">
                {company.company_name}
              </p>
              <p className="text-caption text-ink-soft mt-1 flex items-center gap-2 uppercase">
                <PowerDot />
                {company.date}
              </p>
            </div>
          </div>
          <p className="text-ink mt-3 text-sm font-medium">{company.title}</p>
          <p className="text-ink-soft mt-1 text-sm leading-snug">
            {product?.shortDescription}
          </p>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default CompanyHoverCard;
