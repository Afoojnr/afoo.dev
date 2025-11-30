import { WorkItem } from "@/types";
import { FaExternalLinkAlt, FaMobileAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

interface Props {
  item: WorkItem;
  onView: (item: WorkItem) => void;
}

const WorkCard = ({ item, onView }: Props) => {
  return (
    <div
      className="border-border bg-card text-card-foreground cursor-pointer overflow-hidden rounded-xl border shadow-md hover:shadow-2xl"
      onClick={() => onView(item)}
    >
      <Image
        width={500}
        height={350}
        src={item.image}
        alt={item.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-dark mb-2 font-bold">{item.title}</h2>

        <p className="text-muted-foreground line-clamp-3">
          {item.shortDescription}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {item.tech.map(t => (
            <span
              key={t}
              className="bg-muted text-muted-foreground border-border rounded-full border px-2 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {item.webUrl && (
              <a
                href={item.webUrl}
                target="_blank"
                onClick={e => e.stopPropagation()}
                className="text-primary hover:opacity-80"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}

            {item.mobileUrl && (
              <a
                href={item.mobileUrl}
                target="_blank"
                onClick={e => e.stopPropagation()}
                className="text-secondary hover:opacity-80"
              >
                <FaMobileAlt size={22} />
              </a>
            )}

            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                onClick={e => e.stopPropagation()}
                className="text-dark hover:opacity-80"
              >
                <FaGithub size={22} />
              </a>
            )}
          </div>

          <button
            onClick={e => {
              e.stopPropagation();
              onView(item);
            }}
            className="text-primary cursor-pointer text-sm hover:underline"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
