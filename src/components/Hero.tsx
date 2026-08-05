export default function Hero() {
  return (
    <div
      className="box-border flex flex-col justify-center items-center
                 pt-24 px-0 pb-12
                 w-full h-136
                 bg-amethyst-300
                 border-b-96 border-brick-500">
      <div
        className="box-border flex flex-row justify-center items-center
                   p-12
                   w-full max-w-360 min-w-85.5 h-100
                   bg-surface-default-subtle
                   border border-border-primary
                   shadow-sm
                   rounded-md"></div>
    </div>
  )
}

// function AnimatedArrow() {
//   return (
//     <div className="w-8 h-7 relative">
//       <div
//         className="absolute w-8 h-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//                    bg-content-brand-secondary border border-border-primary
//                    shadow-sm
//                    rounded-sm rotate-180"
//       />
//     </div>
//   )
// }
