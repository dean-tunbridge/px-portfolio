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
      <CardComponent size="small" colour={colour}></CardComponent>
    </div>
  )
}
