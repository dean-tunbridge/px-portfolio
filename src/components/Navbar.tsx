import { useState } from 'react'

export default function Navbar() {
  type NavItem = {
    label: string
    href: string
  }

  const [active, setActive] = useState('Home')

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
                onClick={() => {
                  setActive(el.label)
                }}
                href={el.href}
                className={`font-normal  px-2 py-1 rounded-md hover:bg-surface-default-subtle ${active === el.label ? 'text-content-brand-secondary' : 'text-content-secondary'}`}>
                {el.label}
              </a>
            </li>
          ))}

          {/* text-content-brand-secondary */}
        </ul>
      </nav>
    </div>
  )
}
