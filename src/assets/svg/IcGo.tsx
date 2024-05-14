import type { SVGProps } from 'react';
const SvgIcGo = (props: SVGProps<SVGSVGElement>) => (
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
      d='M3.523 16.28 16.477 3.72m0 0v9.42m0-9.42h-9.16'
    />
  </svg>
);
export default SvgIcGo;
