import type { SVGProps } from 'react';
const SvgIcInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 22 22'
    {...props}
  >
    <circle cx={11} cy={11} r={10} stroke='#fff' strokeWidth={2} />
    <path fill='#fff' d='M10 5h2v2h-2zM10 9h2v8h-2z' />
  </svg>
);
export default SvgIcInfo;
