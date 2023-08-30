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
      viewBox='0 0 256 256'
    >
      {title && <title>{title}</title>}
      <g fill={color || "currentColor"} strokeMiterlimit='10' strokeWidth='1'>
        <path
          d='M23.575 89.924H1.407V28.439h22.167v61.485zm-17.74-4.428h13.311v-52.63H5.835v52.63zm6.656-60.424C5.603 25.072 0 19.467 0 12.576 0 5.683 5.603.076 12.491.076c6.887 0 12.491 5.608 12.491 12.5 0 6.891-5.603 12.496-12.491 12.496zm0-20.568c-4.446 0-8.063 3.621-8.063 8.072 0 4.448 3.617 8.068 8.063 8.068 4.446 0 8.063-3.619 8.063-8.068 0-4.451-3.617-8.072-8.063-8.072zM90 89.924H67.846V59.962c0-8.75-1.048-12.915-7.001-12.915-6.14 0-8.422 3.371-8.422 12.439v30.438H30.269V28.439h21.439v4.046c3.376-3.03 8.363-5.459 14.806-5.459C87.21 27.025 90 41.883 90 56.417v33.507zm-17.726-4.428h13.298v-29.08c0-15.411-3.189-24.963-19.059-24.963-7.81 0-12.864 4.328-14.819 8.035l-.623 1.181h-3.792v-7.803H34.697v52.63h13.298v-26.01c0-4.614 0-16.867 12.85-16.867 11.429 0 11.429 11.282 11.429 17.343v25.534z'
          transform='matrix(2.81 0 0 2.81 1.407 1.407)'
        />
      </g>
    </svg>
  );
}

export default LinkedInIcon;
