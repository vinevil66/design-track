import './SettingsNav.css'

interface SettingsNavProps {
  items: string[]
  active: string
  onSelect: (item: string) => void
}

const ICONS: Record<string, React.ReactNode> = {
  Account: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M2.5 14c0-2.76 2.46-5 5.5-5s5.5 2.24 5.5 5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  ),
  Notifications: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1.5c-2 0-3.5 1.6-3.5 3.8v2.2c0 .5-.2 1-.6 1.4l-.6.6c-.5.5-.1 1.3.6 1.3h8.4c.7 0 1.1-.8.6-1.3l-.6-.6c-.4-.4-.6-.9-.6-1.4V5.3c0-2.2-1.5-3.8-3.5-3.8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M6.3 13a1.7 1.7 0 0 0 3.4 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  Security: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1.5 13 3.3v3.9c0 3.4-2.3 5.7-5 6.8-2.7-1.1-5-3.4-5-6.8V3.3L8 1.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

export default function SettingsNav({ items, active, onSelect }: SettingsNavProps) {
  return (
    <nav className="settings-nav">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          aria-current={item === active ? 'page' : undefined}
          className={item === active ? 'settings-nav__item settings-nav__item--active' : 'settings-nav__item'}
          onClick={() => onSelect(item)}
        >
          <span className="settings-nav__icon">{ICONS[item]}</span>
          {item}
        </button>
      ))}
    </nav>
  )
}
