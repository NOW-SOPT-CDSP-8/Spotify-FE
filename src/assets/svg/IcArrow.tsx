import type { SVGProps } from 'react';
const SvgIcArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeWidth={1.2}
      d='m9 6 6 6-6 6'
    />
  </svg>
);
export default SvgIcArrow;
