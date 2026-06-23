import './Button.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function Button({ children, onClick, type = 'button' }: ButtonProps) {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  )
}
