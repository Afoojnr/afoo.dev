"use client";

import { useState } from "react";

import { featuredWorks, moreWorks } from "@/constants";
import type { WorkItem } from "@/types";
import MoreWork from "./MoreWork";
import WorkSheet from "./WorkSheet";
import WorkStack from "./WorkStack";

type Selection = { list: WorkItem[]; index: number };

// one sheet for both lists, numbered within the list it was opened from
const Catalogue = () => {
  const [selected, setSelected] = useState<Selection | null>(null);

  return (
    <>
      <WorkStack
        works={featuredWorks}
        onOpen={index => setSelected({ list: featuredWorks, index })}
      />

      {/* the stack's own spacer already leaves room, except under reduced motion */}
      <div className="mt-6 motion-reduce:mt-24">
        <MoreWork
          works={moreWorks}
          onOpen={index => setSelected({ list: moreWorks, index })}
        />
      </div>

      <WorkSheet
        work={selected?.list[selected.index] ?? null}
        index={selected?.index ?? 0}
        total={selected?.list.length ?? 0}
        onClose={() => setSelected(null)}
      />
    </>
  );
};

export default Catalogue;
