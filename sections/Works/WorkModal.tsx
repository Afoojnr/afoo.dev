import { WorkItem } from "@/types";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import {
  FaExternalLinkAlt,
  FaMobileAlt,
  FaGithub,
  FaTimes
} from "react-icons/fa";

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
  item: WorkItem;
}

const WorkModal = ({ open, setOpen, item }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-101 bg-black/40 backdrop-blur-sm" />

        <Dialog.Content className="bg-card text-foreground fixed top-1/2 left-1/2 z-102 h-[90vh] w-[90%] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl p-0 shadow-xl">
          <div className="border-border flex items-center justify-between border-b p-6">
            <Dialog.Title className="text-primary text-xl font-semibold">
              {item.title}
            </Dialog.Title>

            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close"
                className="text-card-foreground hover:text-destructive cursor-pointer text-xl"
              >
                <FaTimes />
              </button>
            </Dialog.Close>
          </div>

          <div className="max-h-[75vh] overflow-y-auto px-6 py-4">
            <Image
              width={500}
              height={300}
              src={item.image}
              alt={item.title}
              className="h-48 w-full rounded-lg object-cover"
            />

            <p className="text-foreground mt-4 whitespace-pre-line">
              {item.fullDescription}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.tech.map(t => (
                <span
                  key={t}
                  className="bg-muted text-muted-foreground border-border rounded-full border px-3 py-1 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 md:flex-row">
              {item.webUrl && (
                <a
                  href={item.webUrl}
                  target="_blank"
                  className="text-primary flex items-center gap-2 hover:underline"
                >
                  <FaExternalLinkAlt /> Visit Website
                </a>
              )}

              {item.mobileUrl && (
                <a
                  href={item.mobileUrl}
                  target="_blank"
                  className="text-secondary flex items-center gap-2 hover:underline"
                >
                  <FaMobileAlt /> Mobile App
                </a>
              )}

              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  className="text-foreground flex items-center gap-2 hover:underline"
                >
                  <FaGithub /> GitHub Repo
                </a>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default WorkModal;
