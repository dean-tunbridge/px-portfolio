import ArrowLeft from '../assets/left-arrow.svg'
import ArrowRight from '../assets/right-arrow.svg'
import ArrowClockwise from '../assets/clockwise.svg'
import CloseTab from '../assets/x.svg'

type NavIconProps = {
  icon: string
  size: string
}

function NavIcon({ icon, size }: NavIconProps) {
  return (
    <div
      className={`flex items-center justify-center text-content-brand-primary flex-none grow-0 ${size}`}>
      <img src={icon} alt={icon} />
    </div>
  )
}

export default function BrowserBar() {
  return (
    <div
      className="box-border flex flex-col justify-center items-start w-full h-8
                 bg-surface-default-subtle border border-border-primary rounded-t-md
                 flex-none order-0 self-stretch grow-0">
      <div
        className="hidden box-border flex-row justify-between items-center p-2 gap-3
                   w-full h-10.5 border-b border-surface-brand-butter-subtle
                   flex-none order-0 self-stretch grow-0"
      />

      {/* SEARCH BAR */}
      <div className="flex flex-row items-center px-3 py-2 gap-6 w-full h-8 flex-none order-1 self-stretch grow-0">
        <div className="flex flex-row items-center gap-2 w-11.25 h-2 flex-none order-0 grow-0">
          {/* BUTTON GROUP */}
          <NavIcon icon={ArrowLeft} size="w-2.5 h-2" />
          <NavIcon icon={ArrowRight} size="w-2.5 h-2" />
          <NavIcon icon={ArrowClockwise} size="w-2.25 h-2" />
        </div>

        {/* FRAME */}
        <div className="flex flex-col justify-center items-center p-0 h-4 bg-butter-200 flex-none order-1 grow" />

        {/* CLOSE TAB */}
        <div className="flex flex-row items-center gap-2 w-2 h-2 flex-none order-2 grow-0">
          <NavIcon icon={CloseTab} size="w-2 h-2" />
        </div>
      </div>
    </div>
  )
}
