import { useMessages } from "next-intl";

import type { WorkItem, WorkText } from "@/types";

// a work's text in the current language, from messages/<locale>/works.json
export const useWorkText = () => {
  const projects: Record<string, WorkText> = useMessages().works.projects;
  return (work: WorkItem) => projects[work.slug];
};
