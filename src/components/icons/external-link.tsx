import type { Icon } from "@/types/icon";

function ExternalLinkIcon({ size, title, color, className }: Icon = {}) {
  const strokeColor = color ?? "currentColor";

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size || "1em"}
      height={size || "1em"}
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {title && <title>{title}</title>}
      <path
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
      />
      <path
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 3L21 3 21 9"
      />
      <path
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14L21 3"
      />
    </svg>
  );
}

export default ExternalLinkIcon;
