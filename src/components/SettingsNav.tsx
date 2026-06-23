import './SettingsNav.css'

interface SettingsNavProps {
  items: string[]
  active: string
  onSelect: (item: string) => void
}

export default function SettingsNav({ items, active, onSelect }: SettingsNavProps) {
  return (
    <nav className="settings-nav">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          className={item === active ? 'settings-nav__item settings-nav__item--active' : 'settings-nav__item'}
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </nav>
  )
}
