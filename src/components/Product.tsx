import { ExternalLink } from "lucide-react";

interface ProductProps {
  title: string;
  description: string;
  website?: string;
  data: Record<string, unknown>;
}

const Product = ({ title, description, website, data }: ProductProps) => {
  const details = [...edition(data), ...rows(data)];

  return (
    <div>
      {title && <h1 className="font-display text-4xl leading-tight sm:text-5xl">{title}</h1>}

      {description && (
        <p className="mt-4 font-body leading-relaxed text-muted-foreground">{description}</p>
      )}

      {details.length > 0 && (
        <dl className="mt-8 divide-y divide-border border-y border-border">
          {details.map(([key, value]) => (
            <div key={key} className="flex justify-between gap-6 py-3">
              <dt className="font-body text-sm tracking-wide text-muted-foreground">{key}</dt>
              <dd className="font-body text-sm">{String(value)}</dd>
            </div>
          ))}
        </dl>
      )}

      {website && (
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 font-body text-sm tracking-wide text-foreground underline underline-offset-4 transition-colors hover:text-accent"
        >
          Product page
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      )}
    </div>
  );
};

// `number` and `total` are a convention across TAGBASE tags: which one of how
// many. They read as one fact, so they print as one row rather than two, and a
// one-of-one piece has no edition to speak of.
function edition(data: Record<string, unknown>): [string, string][] {
  const number = data.number;
  const total = data.total;

  if (!scalar(number) || !scalar(total) || Number(total) <= 1) return [];

  return [["Edition", `${number} of ${total}`]];
}

// A tag carries whatever the brand put on it. A nested object, such as a
// distributor with a name and a country, unfolds into one row per value, and
// anything empty stays out of the list.
function rows(data: Record<string, unknown>, prefix: string[] = []): [string, string][] {
  return Object.entries(data).flatMap(([key, value]): [string, string][] => {
    if (prefix.length === 0 && ["number", "total"].includes(key)) return [];
    if (scalar(value)) return [[label([...prefix, key]), text(value)]];
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return rows(value as Record<string, unknown>, [...prefix, key]);
    }
    return [];
  });
}

function text(value: unknown): string {
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return String(value);
}

function scalar(value: unknown): boolean {
  return (
    (typeof value === "string" && value.trim() !== "") ||
    typeof value === "number" ||
    typeof value === "boolean"
  );
}

// `distributor.country` reads as "Distributor Country".
function label(keys: string[]): string {
  return keys
    .join(" ")
    .split(/[_\-\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default Product;
