import type { SVGProps } from 'react';
const SvgIcSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.25}
      d='M10.875 18.75a7.875 7.875 0 1 0 0-15.75 7.875 7.875 0 0 0 0 15.75M16.443 16.444 21 21'
    />
  </svg>
);
export default SvgIcSearch;
