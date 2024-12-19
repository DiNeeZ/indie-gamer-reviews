import type { PropsWithChildren } from "react";

type HeadingVariants = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  variant?: HeadingVariants;
}

export default function Heading({
  children,
  variant,
}: PropsWithChildren<HeadingProps>) {
  if (!variant) return <h1 className="pb-3 text-2xl font-bold">{children}</h1>;

  const HeadingTag = variant;

  const headingsClassNames: Partial<Record<HeadingVariants, string>> = {
    h2: "pb-3 text-2xl font-bold",
    h3: "pb-2 text-2xl font-semibold",
    h4: "pb-1 text-xl font-bold",
  };

  return (
    <HeadingTag className={headingsClassNames[variant]}>{children}</HeadingTag>
  );
}
