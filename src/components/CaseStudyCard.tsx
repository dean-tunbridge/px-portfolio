import CardComponent from './CardComponent'

type CaseStudyCardProps = {
  colour?:
    | 'butterSubtle'
    | 'butterStrong'
    | 'amethystSubtle'
    | 'amethystStrong'
    | 'tan'
    | 'brick'
}

export default function CaseStudyCard({
  colour = 'butterStrong',
}: CaseStudyCardProps) {
  return (
    <div className="flex flex-row flex-wrap items-center content-center pr-6 gap-6 isolate w-full max-w-7xl">
      <CardComponent
        size="small"
        colour={colour}
        className="w-full max-w-154 min-w-85.5 z-1 flex flex-row justify-center items-center">
        <div className="flex flex-col items-start w-full"></div>
      </CardComponent>
    </div>
  )
}
