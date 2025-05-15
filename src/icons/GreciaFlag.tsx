import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export default function GreciaFlag(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_4701_8005)">
        <Path
          d="M16 31.042c8.837 0 16-6.947 16-15.516C32 6.959 24.837.011 16 .011S0 6.958 0 15.527c0 8.568 7.163 15.515 16 15.515z"
          fill="#F0F0F0"
        />
        <Path
          d="M16 11.48h15.449a15.186 15.186 0 00-1.797-4.048H16v4.047zM6.04 27.669h19.92a15.759 15.759 0 003.692-4.048H2.348c.98 1.55 2.232 2.92 3.692 4.048zM5.565 3.765a15.728 15.728 0 00-3.217 3.667h3.217V3.765z"
          fill="#338AF3"
        />
        <Path
          d="M16 15.527v-4.048H9.74v4.048H5.564v-4.048H.551A15.09 15.09 0 000 15.527c0 1.4.193 2.756.551 4.047H31.45c.358-1.29.551-2.647.551-4.048H16zM16 .011c-2.222 0-4.338.44-6.26 1.234v6.187H16V3.384h9.96A16.246 16.246 0 0016 .011z"
          fill="#338AF3"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4701_8005">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}