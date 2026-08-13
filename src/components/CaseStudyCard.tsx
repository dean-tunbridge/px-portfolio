import BrowserBar from './BrowserBar'
import CardComponent from './CardComponent'

export type CaseStudyCardProps = {
  size?: 'small' | 'base' | 'large'
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
    <div className="flex flex-row flex-wrap items-center content-center p-6 gap-6 w-full max-w-(--width-max-content) hover:bg-sky-700">
      <CardComponent
        size="small"
        colour={colour}
        className="box-border w-full max-w-154 min-w-85.5 h-[379.62px] flex flex-row justify-center items-center p-6">
        <div className="flex flex-col items-start w-full h-full">
          <BrowserBar />
          <img
            src={imageUrl}
            alt={`${company} screenshot`}
            className="box-border w-full h-[299.62px] object-cover border border-border-primary rounded-b-md"
          />
        </div>
      </CardComponent>

      <div className="flex flex-col items-start gap-3 w-full flex-1">
        <div className="flex flex-col items-start gap-1 w-full">
          <p className="w-full font-black text-xl leading-[1.6] text-content-brand-primary">
            {projectTitle}
          </p>

          <p className="w-full font-black text-xl leading-[1.6] text-content-brand-secondary">
            {company}
          </p>
        </div>

        <p className="w-full font-normal text-xl leading-[1.6] text-content-primary">
          {description}
        </p>
      </div>
    </div>
  )
}
