import type { Icon } from "@/types/icon";

function ExternalLinkIcon({ size, title, color, className }: Icon = {}) {
  return (
    <svg
      className={className}
      style={{
        color,
      }}
      xmlns='http://www.w3.org/2000/svg'
      width={size || "1em"}
      height={size || "1em"}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
    >
      {title && <title>{title}</title>}
      <path d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6'></path>
      <path d='M15 3L21 3 21 9'></path>
      <path d='M10 14L21 3'></path>
    </svg>
  );
}

export default ExternalLinkIcon;
