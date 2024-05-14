import type { SVGProps } from 'react';
const SvgIcLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 18 24'
    {...props}
  >
    <mask id='ic_location_svg__a' fill='#fff'>
      <path
        fillRule='evenodd'
        d='M14.986 16.594C16.836 14.854 18 12.321 18 9.5 18 4.253 13.97 0 9 0S0 4.253 0 9.5c0 2.82 1.165 5.354 3.014 7.094L9 24z'
        clipRule='evenodd'
      />
    </mask>
    <path
      fill='#fff'
      d='m14.986 16.594-1.37-1.457-.1.094-.085.106zm-11.972 0 1.555-1.257-.085-.106-.1-.094zM9 24l-1.555 1.257L9 27.182l1.555-1.925zm7-14.5c0 2.265-.934 4.272-2.384 5.637l2.74 2.914C18.605 15.936 20 12.877 20 9.5zM9 2c3.765 0 7 3.255 7 7.5h4C20 3.252 15.176-2 9-2zM2 9.5C2 5.255 5.235 2 9 2v-4C2.824-2-2 3.252-2 9.5zm2.384 5.637C2.934 13.772 2 11.765 2 9.5h-4c0 3.377 1.396 6.436 3.643 8.55zm6.171 7.606L4.57 15.337 1.46 17.85l5.986 7.406zm2.876-7.406-5.986 7.406 3.11 2.514 5.987-7.406z'
      mask='url(#ic_location_svg__a)'
    />
    <circle cx={9} cy={9} r={3} stroke='#fff' strokeWidth={2} />
  </svg>
);
export default SvgIcLocation;
