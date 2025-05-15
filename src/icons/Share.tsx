import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Share(props) {
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
        d="M14 7.5H6c-2.667 0-4.333 1.667-4.333 4.333v2.159c0 2.675 1.666 4.341 4.333 4.341h7.992c2.666 0 4.333-1.666 4.333-4.333v-2.167C18.333 9.167 16.667 7.5 14 7.5z"
        fill="#035AC5"
      />
      <Path
        d="M13.233 4.642L10.441 1.85a.629.629 0 00-.883 0L6.766 4.642a.629.629 0 000 .883.629.629 0 00.884 0L9.375 3.8v8.909a.63.63 0 00.625.625.63.63 0 00.625-.625V3.8l1.725 1.725a.618.618 0 00.441.184.618.618 0 00.442-.184.614.614 0 000-.883z"
        fill="#035AC5"
      />
    </Svg>
  )
}