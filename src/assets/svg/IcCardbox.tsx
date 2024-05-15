import type { SVGProps } from 'react';
const SvgIcCardbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 30 30'
    {...props}
  >
    <rect width={30} height={30} fill='#323232' rx={4} />
    <path
      stroke='#A7A7A7'
      strokeWidth={1.439}
      d='M8.052 12.945h13.719M11.03 17.236h3.298'
    />
    <rect
      width={13.892}
      height={11.17}
      x={8.188}
      y={9.549}
      stroke='#A7A7A7'
      strokeWidth={1.439}
      rx={1.439}
    />
  </svg>
);
export default SvgIcCardbox;
