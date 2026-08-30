import { Download } from "lucide-react";

import type { Document } from "@tagbase-io/verify";

const Documents = ({ documents }: { documents: Document[] }) => {
  if (documents.length === 0) return null;

  return (
    <section className="animate-fade-in mt-12">
      <h2 className="font-display text-2xl">Documents</h2>

      <ul className="mt-4 divide-y divide-border border-y border-border">
        {documents.map((document) => (
          <li key={document.id}>
            <a
              href={document.downloadUrl}
              className="flex items-center justify-between gap-6 py-4 font-body text-sm transition-colors hover:text-accent"
            >
              {document.title}
              <Download className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Documents;
