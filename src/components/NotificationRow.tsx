import Toggle from './Toggle'
import './NotificationRow.css'

interface NotificationRowProps {
  title: string
  description: string
  checked: boolean
  onChange: (checked: boolean) => void
  showDivider?: boolean
}

export default function NotificationRow({
  title,
  description,
  checked,
  onChange,
  showDivider = true,
}: NotificationRowProps) {
  const descriptionId = `${title.replace(/\s+/g, '-').toLowerCase()}-description`

  return (
    <div className={showDivider ? 'notification-row notification-row--divider' : 'notification-row'}>
      <div>
        <p className="notification-row__title">{title}</p>
        <p className="notification-row__description" id={descriptionId}>
          {description}
        </p>
      </div>
      <Toggle checked={checked} onChange={onChange} label={title} describedBy={descriptionId} />
    </div>
  )
}
