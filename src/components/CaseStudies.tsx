import triangleLogo from '../assets/triangle.svg'
import CaseStudyCard from './CaseStudyCard'

export default function CaseStudies() {
  return (
    <div
      className="
        box-border
        flex flex-col
        items-center
        w-full
        bg-[url(src/assets/px-pattern.png)]
        bg-repeat
        bg-size-[5%_5%]
        bg-surface-default-subtle
        border border-border-primary
        px-0
        pt-46
        pb-12
      ">
      <div className="bg-surface-default-subtle">
        <div className="flex flex-row justify-center items-center gap-2 ">
          <h2 className="font-black text-2xl leading-[1.6] text-center text-content-brand-primary">
            Case Studies
          </h2>

          <img
            src={triangleLogo}
            alt="triangle logo"
            width={24}
            height={16}
            className="inline-block"
          />
        </div>

        <CaseStudyCard
          imageUrl=""
          projectTitle="Project"
          company="Company"
          description="Cupcake ipsum dolor sit amet. Ice cream I love chupa chups candy gingerbread halvah I love jelly."
        />
      </div>
    </div>
  )
}
