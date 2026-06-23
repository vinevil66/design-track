import './Card.css'

interface CardProps {
  title: string
  body: string
  variant?: 'default' | 'disabled'
  className?: string
}

export default function Card({ title, body, variant = 'default', className }: CardProps) {
  const classes = ['card', variant === 'disabled' ? 'card--disabled' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} aria-disabled={variant === 'disabled'}>
      <p className="card__title">{title}</p>
      <p className="card__body">{body}</p>
    </div>
  )
}
