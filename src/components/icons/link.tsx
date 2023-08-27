import type { Icon } from "@/types/icon";

function LinkIcon({ size, title, color, className }: Icon = {}) {
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
      <path d='M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71'></path>
      <path d='M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71'></path>
    </svg>
  );
}

export default LinkIcon;
