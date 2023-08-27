import type { Icon } from "@/types/icon";

function LinkedInIcon({ size, title, color, className }: Icon = {}) {
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
      <path d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z'></path>
      <path d='M2 9H6V21H2z'></path>
      <circle cx='4' cy='4' r='2'></circle>
    </svg>
  );
}

export default LinkedInIcon;
