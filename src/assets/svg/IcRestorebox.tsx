import type { SVGProps } from 'react';
const SvgIcRestorebox = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.3}
      d='m18.234 14 2 2 2-2'
    />
    <mask id='ic_restorebox_svg__a' fill='#fff'>
      <path d='M20.851 16.383a6.5 6.5 0 1 0-2.285 3.688l-.795-.991a5.229 5.229 0 1 1 1.839-2.968z' />
    </mask>
    <path
      stroke='#A7A7A7'
      strokeWidth={2.6}
      d='M20.851 16.383a6.5 6.5 0 1 0-2.285 3.688l-.795-.991a5.229 5.229 0 1 1 1.839-2.968z'
      mask='url(#ic_restorebox_svg__a)'
    />
  </svg>
);
export default SvgIcRestorebox;
