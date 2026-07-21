import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', href: '#contact' },
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="portfolio-nav">
      <button
        type="button"
        className={`portfolio-nav-toggle ${isOpen ? 'open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={isOpen ? 'open' : ''}>
        {NAV_ITEMS.map((item) => (
          <li key={item.to ?? item.href}>
            {item.to ? (
              <Link to={item.to} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ) : (
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
