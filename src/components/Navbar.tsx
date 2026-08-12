import { useState } from 'react'
import NavLink from './NavLink'

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
    <div className="fixed top-0 right-0 left-0 z-1000">
      <nav className="p-2 bg-surface-default-subtle border-b border-border-primary ">
        <ul className="text-base flex flex-row justify-center gap-6">
          {navItems.map((el) => (
            <NavLink
              key={el.href}
              label={el.label}
              href={el.href}
              isActive={active === el.label}
              onClick={() => setActive(el.label)}
            />
          ))}
        </ul>
      </nav>
    </div>
  )
}
