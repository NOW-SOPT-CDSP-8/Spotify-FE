import type { SVGProps } from 'react';
const SvgIcBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 20 20'
    {...props}
  >
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeWidth={2}
      d='M2 9.78h17m-17 0 8.701-8.28M2 9.78l8.701 8.72'
    />
  </svg>
);
export default SvgIcBack;
