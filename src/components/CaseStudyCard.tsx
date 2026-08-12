import BrowserBar from './BrowserBar'
import CardComponent from './CardComponent'

type CaseStudyCardProps = {
  colour?:
    | 'butterSubtle'
    | 'butterStrong'
    | 'amethystSubtle'
    | 'amethystStrong'
    | 'tan'
    | 'brick'
  imageUrl: string
  projectTitle: string
  company: string
  description: string
}

export default function CaseStudyCard({
  colour = 'butterStrong',
  imageUrl,
  projectTitle,
  company,
  description,
}: CaseStudyCardProps) {
  return (
    <div className="flex flex-row flex-wrap items-center content-center pr-6 gap-6 isolate w-full max-w-7xl">
      <CardComponent
        size="small"
        colour={colour}
        className="w-full max-w-154 min-w-85.5 z-1 flex flex-row justify-center items-center">
        <div className="flex flex-col items-start w-full">
          <BrowserBar />
          <img
            src={imageUrl}
            alt={`${company} screenshot`}
            className="box-border w-full aspect-[568/299.62] object-cover border border-border-primary rounded-b-md"
          />

          {/* case-study-text */}
          <div className="flex flex-col items-start gap-3 w-full pt-3">
            <div className="flex flex-col items-start gap-1 w-full">
              <p className="w-full font-black text-xl leading-[1.6] text-[#3D000C]">
                {projectTitle}
              </p>
              <p className="w-full font-black text-xl leading-[1.6] text-[#91171F]">
                {company}
              </p>
            </div>
            <p className="w-full font-normal text-xl leading-[1.6] text-[#1C1917]">
              {description}
            </p>
          </div>
        </div>
      </CardComponent>
    </div>
  )
}
