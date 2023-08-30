import type { Icon } from "@/types/icon";

function TwitterIcon({ size, title, color, className }: Icon = {}) {
  return (
    <svg
      className={className}
      style={{
        color,
      }}
      width={size || "1em"}
      height={size || "1em"}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
    >
      {title && <title>{title}</title>}
      <path
        fill={color || "currentColor"}
        strokeMiterlimit='10'
        strokeWidth='1'
        d='M.219 2.882l34.748 46.461L0 87.118h7.87l30.614-33.073 24.735 33.073H90L53.297 38.043 85.844 2.882h-7.87L49.781 33.341 27.001 2.882H.219zm11.574 5.797h12.303L78.425 81.32H66.122L11.793 8.679z'
        transform='matrix(2.81 0 0 2.81 1.407 1.407)'
      />
    </svg>
  );
}

export default TwitterIcon;
