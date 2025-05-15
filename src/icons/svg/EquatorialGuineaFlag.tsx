import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

export default function EquatorialGuineaFlag(props: SvgProps) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_4701_7982)">
        <Path
          d="M16 31.042c8.837 0 16-6.947 16-15.516C32 6.959 24.837.011 16 .011S0 6.958 0 15.527c0 8.568 7.163 15.515 16 15.515z"
          fill="#F0F0F0"
        />
        <Path
          d="M9.74 10.13h21.265C28.745 4.222 22.879.011 16 .011c-4.418 0-8.418 1.737-11.313 4.545l5.052 5.574z"
          fill="#6DA544"
        />
        <Path
          d="M9.74 20.923h21.265C28.745 26.831 22.879 31.042 16 31.042c-4.418 0-8.418-1.737-11.313-4.545l5.052-5.574z"
          fill="#D80027"
        />
        <Path
          d="M4.686 4.556c-6.248 6.059-6.248 15.882 0 21.941L16 15.527 4.686 4.556z"
          fill="#0052B4"
        />
        <Path
          d="M18.783 12.828v3.373c0 2.066 2.782 2.698 2.782 2.698s2.783-.632 2.783-2.698v-3.373h-5.565z"
          fill="#DEDDE0"
        />
        <Path d="M20.87 15.594h1.39v1.956h-1.39v-1.956z" fill="#786145" />
        <Path
          d="M22.956 14.852c0-.745-.622-1.35-1.39-1.35-.77 0-1.392.605-1.392 1.35a.685.685 0 00-.696.675c0 .372.312.674.696.674h2.782a.685.685 0 00.696-.675.685.685 0 00-.696-.674z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4701_7982">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}