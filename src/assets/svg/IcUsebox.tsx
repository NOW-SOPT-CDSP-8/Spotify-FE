import type { SVGProps } from 'react';
const SvgIcUsebox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 31 30'
    {...props}
  >
    <rect width={30} height={30} x={0.029} fill='#323232' rx={4} />
    <path
      stroke='#A5A5A5'
      strokeWidth={1.5}
      d='M22.03 10.027 19.941 8l-4.167.08-7.746 7.442L14.5 22l7.371-7.58z'
    />
    <circle cx={19.029} cy={11} r={1} fill='#A5A5A5' />
  </svg>
);
export default SvgIcUsebox;
