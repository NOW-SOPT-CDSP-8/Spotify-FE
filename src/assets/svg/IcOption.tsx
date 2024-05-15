import type { SVGProps } from 'react';
const SvgIcOption = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 17 18'
    {...props}
  >
    <circle cx={8.5} cy={2} r={1.5} fill='#fff' />
    <circle cx={8.5} cy={9} r={1.5} fill='#fff' />
    <circle cx={8.5} cy={16} r={1.5} fill='#fff' />
  </svg>
);
export default SvgIcOption;
