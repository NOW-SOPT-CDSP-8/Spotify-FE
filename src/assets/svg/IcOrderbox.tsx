import type { SVGProps } from 'react';
const SvgIcOrderbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 30 30'
    {...props}
  >
    <rect width={30} height={30} fill='#323232' rx={4} />
    <path
      stroke='#A5A5A5'
      strokeWidth={1.5}
      d='M12.066 12.733h5.818m-5.818 3.387h5.818m-8.92-7.757v13.274L10.93 20.6l2.076 1.037 2.021-1.037 2.131 1.037 2.076-1.037 1.803 1.037V8.363z'
    />
  </svg>
);
export default SvgIcOrderbox;
