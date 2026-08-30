import logoOnLight from "@/assets/tagbase-on-light.png";
import logoOnDark from "@/assets/tagbase-on-dark.png";

const WEBSITE = "https://www.tagbase.io";

interface HeaderProps {
  /** The counterfeit page runs on a dark ground and needs the light mark. */
  onDark?: boolean;
}

const Header = ({ onDark = false }: HeaderProps) => (
  <header
    className={`flex items-center justify-between border-b px-5 py-4 sm:px-14 sm:py-5 ${
      onDark ? "border-[#3a1c24]" : "border-border"
    }`}
  >
    <div className="flex flex-col gap-0.5">
      <span
        className={`font-display text-[17px] tracking-[0.16em] sm:text-[22px] ${
          onDark ? "text-[#f7ecee]" : "text-foreground"
        }`}
      >
        YOUR BRAND
      </span>
      <span
        className={`hidden text-[10px] uppercase tracking-[0.14em] sm:block ${
          onDark ? "text-[#a9808c]" : "text-muted-foreground"
        }`}
      >
        customdomain.xyz
      </span>
    </div>

    <a
      href={WEBSITE}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
    >
      <span
        className={`hidden text-[10px] uppercase tracking-[0.14em] sm:block ${
          onDark ? "text-[#a9808c]" : "text-muted-foreground"
        }`}
      >
        {onDark ? "Checked with" : "Verified with"}
      </span>
      {onDark ? (
        <img src={logoOnDark} alt="TAGBASE" className="h-[11px] w-auto opacity-90 sm:h-[13px]" />
      ) : (
        <>
          <img
            src={logoOnLight}
            alt="TAGBASE"
            className="h-[11px] w-auto opacity-90 sm:h-[13px] dark:hidden"
          />
          <img
            src={logoOnDark}
            alt=""
            aria-hidden
            className="hidden h-[11px] w-auto opacity-90 sm:h-[13px] dark:block"
          />
        </>
      )}
    </a>
  </header>
);

export default Header;
