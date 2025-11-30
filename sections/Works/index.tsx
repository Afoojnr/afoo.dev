// "use client";

// import { useState } from "react";
// import { WorkItem } from "@/types";
// import { WorkItems } from "@/constants";
// import WorkCard from "./WorkCard";
// import WorkModal from "./WorkModal";
// import SectionWrap from "@/components/SectionWrap";

// const Works = () => {
//   const [selected, setSelected] = useState<WorkItem | null>(null);

//   return (
//     <section id="works" >
//       <h1 className="section-title">
//         My <span className="text-primary">Portfolio</span>
//       </h1>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {WorkItems.map((item) => (
//           <WorkCard key={item.id} item={item} onView={(i) => setSelected(i)} />
//         ))}
//       </div>

//       {selected && (
//         <WorkModal
//           open={!!selected}
//           item={selected}
//           setOpen={(v) => {
//             if (!v) setSelected(null);
//           }}
//         />
//       )}
//     </section>
//   );
// };

// export default SectionWrap(Works, "bg-accent");

"use client";

import { useState } from "react";
import { WorkItem } from "@/types";
import { works } from "@/constants";
import WorkCard from "./WorkCard";
import WorkModal from "./WorkModal";
import SectionWrap from "@/components/SectionWrap";
import { motion, easeOut } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardAnim = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut }
  }
};

const Works = () => {
  const [selected, setSelected] = useState<WorkItem | null>(null);

  return (
    <section id="works">
      <h1 className="section-title">
        My <span className="text-primary">Portfolio</span>
      </h1>

      {/* Animated Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {works.map(item => (
          <motion.div key={item.id} variants={cardAnim}>
            <WorkCard item={item} onView={i => setSelected(i)} />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selected && (
        <WorkModal
          open={!!selected}
          item={selected}
          setOpen={v => {
            if (!v) setSelected(null);
          }}
        />
      )}
    </section>
  );
};

export default SectionWrap(Works, "bg-accent");
