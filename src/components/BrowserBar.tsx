function NavIcon({ widthClass }: { widthClass: string }) {
  return (
    <div className={`relative h-2 ${widthClass} flex-none grow-0`}>
      <span className="absolute inset-x-0 h-2 top-1/2 -translate-y-1/2 bg-content-brand-primary" />
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

      {/* SEARCH */}
      <div className="flex flex-row items-center px-3 py-2 gap-6 w-full h-8 flex-none order-1 self-stretch grow-0">
        <div className="flex flex-row items-center gap-2 w-11.25 h-2 flex-none order-0 grow-0">
          <NavIcon widthClass="w-[10px]" />
          <NavIcon widthClass="w-[10px]" />
          <NavIcon widthClass="w-[9px]" />
        </div>

        {/* URL */}
        <div className="flex flex-col justify-center items-center p-0 h-4 bg-butter-200 flex-none order-1 grow" />

        {/* CLOSE TAB */}
        <div className="flex flex-row items-center gap-2 w-2 h-2 flex-none order-2 grow-0">
          <NavIcon widthClass="w-2" />
        </div>
      </div>
    </div>
  )
}
