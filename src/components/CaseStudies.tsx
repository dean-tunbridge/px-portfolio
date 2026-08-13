import triangleLogo from '../assets/triangle.svg'
import CaseStudyCard, { type CaseStudyCardProps } from './CaseStudyCard'

const CASE_STUDY_TEST: CaseStudyCardProps[] = [
  {
    size: 'small',
    colour: 'tan',
    imageUrl: 'https://placecats.com/580/338',
    projectTitle: 'Project',
    company: 'Company',
    description:
      'Cupcake ipsum dolor sit amet. Ice cream I love chupa chups candy gingerbread halvah I love jelly.',
  },
  {
    size: 'small',
    colour: 'butterStrong',
    imageUrl: 'https://placecats.com/580/338',
    projectTitle: 'Project',
    company: 'Company',
    description:
      'Cupcake ipsum dolor sit amet. Ice cream I love chupa chups candy gingerbread halvah I love jelly.',
  },
  {
    size: 'small',
    colour: 'brick',
    imageUrl: 'https://placecats.com/580/338',
    projectTitle: 'Project',
    company: 'Company',
    description:
      'Cupcake ipsum dolor sit amet. Ice cream I love chupa chups candy gingerbread halvah I love jelly.',
  },
  {
    size: 'small',
    colour: 'amethystStrong',
    imageUrl: 'https://placecats.com/580/338',
    projectTitle: 'Project',
    company: 'Company',
    description:
      'Cupcake ipsum dolor sit amet. Ice cream I love chupa chups candy gingerbread halvah I love jelly.',
  },
]

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
        px-24
        py-60
      ">
      <div className="bg-surface-default-subtle px-12 py-24 gap-24">
        <div className="flex flex-row justify-center items-center">
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
        <ul>
          {CASE_STUDY_TEST.map((card) => (
            <li key={card.projectTitle}>
              <CaseStudyCard
                size={card.size}
                colour={card.colour}
                imageUrl={card.imageUrl}
                projectTitle={card.projectTitle}
                company={card.company}
                description={card.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
