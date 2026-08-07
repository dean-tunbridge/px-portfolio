type NavLinkProps = {
  label: string
  href: string
  isActive: boolean
  onClick: () => void
}

export default function NavLink({
  label,
  href,
  isActive,
  onClick,
}: NavLinkProps) {
  return (
    <li>
      <a
        onClick={onClick}
        href={href}
        className={`font-normal px-2 py-1 rounded-md hover:bg-surface-default-base  ${isActive ? 'text-content-brand-secondary' : 'text-content-secondary'}`}>
        {label}
      </a>
    </li>
  )
}
