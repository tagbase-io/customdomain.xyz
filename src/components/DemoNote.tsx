const DOCS = "https://verify.tagbase.io/docs/your-domain/external-verification";

interface DemoNoteProps {
  /** The counterfeit page runs on a dark ground. */
  onDark?: boolean;
}

const DemoNote = ({ onDark = false }: DemoNoteProps) => {
  const link = onDark ? "text-[#f0a8b6]" : "text-accent";

  return (
    <p
      className={`mt-12 font-body text-sm leading-relaxed ${
        onDark ? "text-[#a9808c]" : "text-muted-foreground"
      }`}
    >
      This page demonstrates how a{" "}
      <a
        href={DOCS}
        className={`font-mono underline underline-offset-4 ${onDark ? "text-[#f0a8b6] decoration-[#f0a8b6]/40" : "text-accent decoration-accent/40"}`}
      >
        verify.tagbase.io
      </a>{" "}
      check can look on your own website.{" "}
      <a href="/" className={link}>
        Read how it works
      </a>
      .
    </p>
  );
};

export default DemoNote;
