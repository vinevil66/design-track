import './Card.css'

interface CardProps {
  title: string
  body: string
  className?: string
}

export default function Card({ title, body, className }: CardProps) {
  return (
    <div className={className ? `card ${className}` : 'card'}>
      <p className="card__title">{title}</p>
      <p className="card__body">{body}</p>
    </div>
  )
}
