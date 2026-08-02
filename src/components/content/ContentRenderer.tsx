function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-zinc-200">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

interface ContentRendererProps {
  content: string;
}

export function ContentRenderer({ content }: ContentRendererProps) {
  const blocks = content.trim().split("\n\n");

  return (
    <div className="prose-gamepk space-y-4">
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="mt-8 text-2xl font-bold text-white first:mt-0"
            >
              {block.replace("## ", "")}
            </h2>
          );
        }

        if (block.startsWith("- **")) {
          const items = block.split("\n").filter((line) => line.startsWith("- "));
          return (
            <ul key={index} className="list-none space-y-2 pl-0">
              {items.map((item, i) => (
                <li key={i} className="flex gap-2 text-zinc-400 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  <span>{renderInline(item.replace(/^- /, ""))}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (/^\d+\.\s/.test(block)) {
          const items = block.split("\n").filter((line) => /^\d+\.\s/.test(line));
          return (
            <ol key={index} className="list-decimal space-y-2 pl-6 text-zinc-400">
              {items.map((item, i) => (
                <li key={i} className="leading-relaxed pl-1">
                  {renderInline(item.replace(/^\d+\.\s/, ""))}
                </li>
              ))}
            </ol>
          );
        }

        return (
          <p key={index} className="text-zinc-400 leading-relaxed">
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}

import Link from "next/link";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-red-400">
                {item.label}
              </Link>
            ) : (
              <span className="text-zinc-300">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
