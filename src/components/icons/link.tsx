import type { Icon } from "@/types/icon";

function LinkIcon({ size, title, color, className }: Icon = {}) {
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
        d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
      />
      <path
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
      />
    </svg>
  );
}

export default LinkIcon;
