import CardComponent from './CardComponent'

export default function Hero() {
  return (
    <div
      className="box-border flex flex-col justify-center items-center
                 pt-24 px-0 pb-12
                 w-full h-136
                 bg-amethyst-300
                border-b-96 border-brick-500">
      <CardComponent size="base" colour="butterSubtle">
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start w-full gap-2">
            <h1 className="font-sans font-black text-4xl leading-[1.6] w-full">
              <span className="text-content-brand-primary">
                Hello, I&apos;m{' '}
              </span>
              <span className="text-content-brand-secondary">Priscilla</span>
            </h1>

            <p className="font-sans font-black text-4xl leading-[1.6] w-full">
              <span className="text-content-brand-primary">
                a Product Owner turned{' '}
              </span>
              <span className="text-content-brand-secondary [text-shadow:2px_2px_0_0_var(--color-butter-500)]">
                UX Designer
              </span>
            </p>
          </div>

          <p className="font-sans font-normal text-xl leading-[1.6] w-full">
            I am a bonson changing careers in a turbulent IT industry filled
            with techbrodudes and CEO dingleberries that are an absolute waste
            of space in humanity.
          </p>
        </div>
      </CardComponent>
    </div>
  )
}
