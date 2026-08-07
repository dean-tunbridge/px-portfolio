import CardComponent from './CardComponent'
import triangleLogo from '../assets/triangle.svg'

export default function Hero() {
  return (
    <div
      className="box-border flex flex-col justify-center items-center
                 pt-24 px-0 pb-12
                 w-full h-136
                 bg-amethyst-300
                border-b-96 border-brick-500">
      <CardComponent
        size="large"
        colour="butterSubtle"
        className="w-full max-w-(--width-max-content)">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-2">
            <h1 className=" font-black text-4xl ">
              <span className="text-content-brand-primary">
                Hello, I&apos;m Priscilla
              </span>
              {/* <span className="text-content-brand-secondary">Priscilla</span> */}
            </h1>

            <p className="font-black text-4xl">
              <span className="text-content-brand-secondary">
                a Product Owner turned{' '}
              </span>
              <span className="text-content-brand-secondary text-shadow-sm text-shadow-butter-500">
                UX Designer
                <img
                  src={triangleLogo}
                  alt=""
                  width={24}
                  height={16}
                  className="inline-block ml-2 align-middle"
                />
              </span>
            </p>
          </div>
          <p className=" font-normal text-xl">
            I am a bonson changing careers in a turbulent IT industry filled
            with techbrodudes and CEO dingleberries that are an absolute waste
            of space in humanity.
          </p>
        </div>
      </CardComponent>
    </div>
  )
}
