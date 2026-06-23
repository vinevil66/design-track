import './SettingsSection.css'

interface SettingsSectionProps {
  title: string
  description: string
  children: React.ReactNode
}

export default function SettingsSection({ title, description, children }: SettingsSectionProps) {
  return (
    <section className="settings-section">
      <h2 className="settings-section__title">{title}</h2>
      <p className="settings-section__description">{description}</p>
      <div className="settings-section__content">{children}</div>
    </section>
  )
}
