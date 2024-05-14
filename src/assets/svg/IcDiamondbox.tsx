import type { SVGProps } from 'react';
const SvgIcDiamondbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 30 30'
    {...props}
  >
    <rect width={30} height={30} fill='#323232' rx={4} />
    <path
      stroke='#A7A7A7'
      strokeLinecap='round'
      strokeWidth={1.5}
      d='m21.579 12.79-3.066-3.748h-3.556m6.622 3.747-6.622 8.169-6.536-8.169m13.158 0h-3.747m-9.411 0 2.98-3.747h3.556M8.421 12.79h3.74m5.67 0-2.874 6.113-2.796-6.113m5.67 0-2.874-3.747m2.875 3.747h-5.67m2.795-3.747-2.796 3.747'
    />
  </svg>
);
export default SvgIcDiamondbox;
