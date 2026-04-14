import type { SerializedEditorState, SerializedLexicalNode } from "lexical";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function getTextFromChildren(children: SerializedLexicalNode[]): string {
  return children
    .map((child: any) => {
      if (child.text) return child.text;
      if (child.children) return getTextFromChildren(child.children);
      return "";
    })
    .join("");
}

export function extractH2Headings(
  data: SerializedEditorState | null | undefined
): { id: string; text: string }[] {
  if (!data?.root?.children) return [];

  return (data.root.children as any[])
    .filter((node) => node.type === "heading" && node.tag === "h2")
    .map((node) => {
      const text = getTextFromChildren(node.children || []).trim();
      return { id: slugify(text), text };
    })
    .filter((item) => item.text.length > 0);
}
