// TYPES //
type Size = 'small' | 'base' | 'large'

type Colour =
  | 'butterSubtle'
  | 'butterStrong'
  | 'amethystSubtle'
  | 'amethystStrong'
  | 'tan'
  | 'brick'

type CardProps = React.ComponentProps<'div'> & {
  size?: Size
  colour?: Colour
}

// COLOUR AND SIZE OPTIONS //
const colourOption: Record<Colour, string> = {
  butterSubtle:
    'bg-surface-brand-butter-subtle border rounded-md border-border-primary shadow-sm ',
  butterStrong:
    'bg-surface-brand-butter-base border rounded-md border-border-primary shadow-sm ',
  amethystSubtle:
    'bg-surface-brand-amethyst-subtle border rounded-md border-border-primary shadow-sm ',
  amethystStrong:
    'bg-surface-brand-amethyst-base border rounded-md border-border-primary shadow-sm ',
  tan: 'bg-surface-brand-tan-base border rounded-md border-border-primary shadow-sm ',
  brick:
    'bg-surface-brand-brick-base border rounded-md border-border-primary shadow-sm ',
}

const sizeOption: Record<Size, string> = {
  small: 'p-6',
  base: 'p-12',
  large: 'p-24',
}

// COMPONENT //
export default function CardComponent({
  size = 'base',
  colour = 'butterStrong',
  className,
  children,
  ...rest
}: CardProps) {
  const sizeClass = sizeOption[size] ?? sizeOption.base
  const colourClass = colourOption[colour] ?? colourOption.butterStrong

  return (
    <div className={`${sizeClass} ${colourClass} ${className ?? ''}`} {...rest}>
      {children}
    </div>
  )
}
