import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export default function GuyanaFlag(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_4701_8082)">
        <Path
          d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z"
          fill="#F0F0F0"
        />
        <Path
          d="M16 0c-2.829 0-5.486.735-7.791 2.023v27.954A15.925 15.925 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"
          fill="#6DA544"
        />
        <Path
          d="M8.256 1.997a16.034 16.034 0 00-2.543 1.749L17.968 16 5.713 28.254a16.039 16.039 0 002.542 1.749L32 16 8.256 1.997z"
          fill="#F0F0F0"
        />
        <Path
          d="M6.904 2.836c-.488.338-.956.702-1.403 1.09L16 16 5.501 28.074c.447.388.915.752 1.403 1.09L29.261 16 6.904 2.836z"
          fill="#FFDA44"
        />
        <Path
          d="M5.713 3.746a16.11 16.11 0 00-1.027.94L14.61 16 4.686 27.314c.329.328.672.641 1.027.94L17.968 16 5.713 3.746z"
          fill="#000"
        />
        <Path
          d="M4.686 4.686c-6.248 6.249-6.248 16.38 0 22.628L16 16 4.686 4.686z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4701_8082">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}