const DOCS = "https://verify.tagbase.io/docs/your-domain/external-verification";
const REPO = "https://github.com/tagbase-io/customdomain.xyz";
const SITE = "https://www.tagbase.io";

const Footer = ({ onDark = false }: { onDark?: boolean }) => {
  const link = onDark
    ? "text-[#f0a8b6] transition-colors hover:text-white"
    : "text-accent transition-colors hover:text-[#8a6414] dark:hover:text-[#f0dcae]";

  return (
    <footer
      className={`mt-auto border-t px-5 py-5 sm:px-14 ${onDark ? "border-[#3a1c24]" : "border-border"}`}
    >
      <div className="flex flex-col gap-3 font-body text-xs sm:flex-row sm:items-center sm:justify-between">
        <p className={onDark ? "text-[#a9808c]" : "text-muted-foreground"}>
          &copy; {new Date().getFullYear()} TAGBASE. A demonstration page.
        </p>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="/" className={link}>
            What is this?
          </a>
          <a href={DOCS} className={link}>
            Documentation
          </a>
          <a href={REPO} className={link}>
            Source on GitHub
          </a>
          <a href={SITE} className={`hidden sm:inline ${link}`}>
            tagbase.io
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
