type CvKeyProps = {
  className?: string;
};

const DownloadIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <g className="motion-safe:group-hover:animate-dip motion-safe:group-focus-visible:animate-dip">
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </g>
  </svg>
);

const CvKey = ({ className = "" }: CvKeyProps) => (
  <a
    href="/afoo_cv.pdf"
    download
    className={`group bg-surface shadow-raised active:shadow-pressed text-ink inline-flex h-9 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-[transform,box-shadow] duration-100 active:scale-[0.97] ${className}`}
  >
    <DownloadIcon />
    CV
  </a>
);

export default CvKey;
