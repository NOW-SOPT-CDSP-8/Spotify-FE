import type { SVGProps } from 'react';
const SvgIcEditbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 30 30'
    {...props}
  >
    <rect width={30} height={30} fill='#323232' rx={4} />
    <path
      stroke='#A7A7A7'
      strokeWidth={1.25}
      d='M12.796 19.162 9.21 21.156a.313.313 0 0 1-.431-.414l1.917-3.787a.3.3 0 0 1 .06-.082l8.435-8.26a.3.3 0 0 1 .099-.064c1.949-.778 2.734.887 2.256 1.97a.3.3 0 0 1-.061.087l-8.621 8.505a.3.3 0 0 1-.068.05Z'
    />
  </svg>
);
export default SvgIcEditbox;
