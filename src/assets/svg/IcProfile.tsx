import type { SVGProps } from 'react';
const SvgIcProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 34 34'
    {...props}
  >
    <path
      fill='#fff'
      d='M22.246 23.74H12.001c-.186 0-.373-.023-.55-.084-1.088-.372-1.612-.984-1.141-2.171.377-.953 1.402-1.475 2.262-1.782a1.46 1.46 0 0 1 1.41.231c.65.511 1.58 1.194 3.027 1.194 1.663 0 2.495-.711 3.136-1.309a.91.91 0 0 1 .89-.216c.745.23 1.95.735 2.659 1.882.726 1.177-.175 1.894-.944 2.178-.16.06-.333.078-.504.078'
    />
    <circle cx={17} cy={17} r={15.5} stroke='#fff' strokeWidth={2} />
    <path
      fill='#fff'
      d='M20.947 14.174c0 2.166-1.756 5.623-3.923 5.623S13.1 16.34 13.1 14.174a3.924 3.924 0 1 1 7.847 0'
    />
  </svg>
);
export default SvgIcProfile;
