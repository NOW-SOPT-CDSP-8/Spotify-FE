import type { SVGProps } from 'react';
const SvgIcArtist1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    fill='none'
    viewBox='0 0 43 42'
    {...props}
  >
    <circle cx={21.121} cy={21} r={21} fill='url(#ic_artist1_svg__a)' />
    <defs>
      <pattern
        id='ic_artist1_svg__a'
        width={1}
        height={1}
        patternContentUnits='objectBoundingBox'
      >
        <use
          xlinkHref='#ic_artist1_svg__b'
          transform='matrix(.00132 0 0 .00132 0 -.25)'
        />
      </pattern>
      <image
        id='ic_artist1_svg__b'
        width={760}
        height={1140}
      />
    </defs>
  </svg>
);
export default SvgIcArtist1;