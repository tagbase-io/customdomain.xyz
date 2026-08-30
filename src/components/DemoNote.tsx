interface DemoNoteProps {
  /** The counterfeit page runs on a dark ground. */
  onDark?: boolean;
}

const DemoNote = ({ onDark = false }: DemoNoteProps) => (
  <p
    className={`mt-12 font-body text-sm leading-relaxed ${
      onDark ? "text-[#a9808c]" : "text-muted-foreground"
    }`}
  >
    This page demonstrates how a TAGBASE check can look on your own website.{" "}
    <a href="/" className={onDark ? "text-[#f0a8b6]" : "text-accent"}>
      Read how it works
    </a>
    .
  </p>
);

export default DemoNote;
