export default function Navbar() {
  type NavItem = {
    label: string
    href: string
  }

  const navItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Case studies', href: '#case-studies' },
    { label: 'Experience', href: '#experience' },
    { label: 'Recommendations', href: '#recommendations' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="fixed top-0 right-0 left-0">
      <nav className="p-2 bg-surface-default-subtle border-b border-border-primary ">
        <ul className="text-base flex flex-row justify-center gap-6">
          {navItems.map((el) => (
            <li key={el.href}>
              <a
                href={el.href}
                label={el.label}
                className="font-normal text-content-secondary px-2 py-1 rounded-md hover:bg-surface-default-subtle active:text-content-brand-secondary">
                {el.label}
              </a>
            </li>
          ))}
          {/* <li>
            <a
              className="font-normal text-content-brand-secondary px-2 py-1 rounded-md hover:bg-surface-default-subtle active:text-content-brand-secondary"
              href="#">
              Home
            </a>
          </li>
          <li>
            <a
              className="font-normal text-content-secondary px-2 py-1 rounded-md hover:bg-surface-default-subtle active:text-content-brand-secondary"
              href="#">
              Case studies
            </a>
          </li>
          <li>
            <a
              className="font-normal text-content-secondary px-2 py-1 rounded-md hover:bg-surface-default-subtle active:text-content-brand-secondary"
              href="#">
              Experience
            </a>
          </li>
          <li>
            <a
              className="font-normal text-content-secondary px-2 py-1 rounded-md hover:bg-surface-default-subtle active:text-content-brand-secondary"
              href="#">
              Recommendations
            </a>
          </li>
          <li>
            <a
              className="font-normal text-content-secondary px-2 py-1 rounded-md hover:bg-surface-default-subtle active:text-content-brand-secondary"
              href="#">
              About
            </a>
          </li>
          <li>
            <a
              className="font-normal text-content-secondary px-2 py-1 rounded-md hover:bg-surface-default-subtle active:text-content-brand-secondary"
              href="#">
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}
