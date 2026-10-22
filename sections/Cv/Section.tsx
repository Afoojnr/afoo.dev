type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => (
  <section className="mt-[3mm] break-inside-avoid-page">
    <h2 className="border-b border-(--cv-accent) pb-[1mm] text-[8pt] font-bold tracking-[0.12em] text-(--cv-accent) uppercase">
      {title}
    </h2>
    <div className="mt-[1.6mm]">{children}</div>
  </section>
);

export default Section;
