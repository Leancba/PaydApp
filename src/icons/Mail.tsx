import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Mail(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.4}
        d="M14.167 17.083H5.833c-2.5 0-4.166-1.25-4.166-4.166V7.083c0-2.916 1.666-4.166 4.166-4.166h8.334c2.5 0 4.166 1.25 4.166 4.166v5.834c0 2.916-1.666 4.166-4.166 4.166z"
        fill="#035AC5"
      />
      <Path
        d="M10 10.725c-.7 0-1.408-.217-1.95-.658L5.442 7.983a.623.623 0 01.775-.975l2.608 2.084c.633.508 1.708.508 2.342 0l2.608-2.084a.615.615 0 01.875.1.615.615 0 01-.1.875l-2.608 2.084c-.534.441-1.242.658-1.942.658z"
        fill="#035AC5"
      />
    </Svg>
  )
}