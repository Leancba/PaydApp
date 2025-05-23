import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

export default function SpainFlag(props: SvgProps) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_4701_7960)">
        <Path
          d="M0 16c0 1.957.352 3.832.995 5.565L16 22.956l15.005-1.39C31.648 19.831 32 17.956 32 16c0-1.957-.352-3.832-.995-5.565L16 9.043.995 10.435A15.965 15.965 0 000 16z"
          fill="#FFDA44"
        />
        <Path
          d="M31.005 10.435C28.745 4.342 22.88 0 16 0 9.12 0 3.256 4.342.995 10.435h30.01zM.995 21.565C3.255 27.658 9.121 32 16 32c6.88 0 12.744-4.342 15.005-10.435H.995z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4701_7960">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}