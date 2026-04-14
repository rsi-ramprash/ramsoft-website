import {
  RichText as PayloadRichText,
  type JSXConvertersFunction,
} from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "lexical";
import { slugify } from "@/lib/lexical-utils";

function getTextFromNode(node: any): string {
  if (node.text) return node.text;
  if (node.children) return node.children.map(getTextFromNode).join("");
  return "";
}

const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  heading: ({ node, nodesToJSX }: any) => {
    const Tag = node.tag as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    const text = getTextFromNode(node).trim();
    const id = Tag === "h2" ? slugify(text) : undefined;

    return (
      <Tag key={text} id={id}>
        {nodesToJSX({ nodes: node.children })}
      </Tag>
    );
  },
});

export default function BlogRichText({
  data,
  className,
}: {
  data: SerializedEditorState;
  className?: string;
}) {
  if (!data) return null;

  return (
    <PayloadRichText
      data={data}
      converters={converters}
      className={`blog-prose ${className ?? ""}`}
    />
  );
}
