import './TextField.css'

interface TextFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'email'
}

export default function TextField({ label, value, onChange, type = 'text' }: TextFieldProps) {
  return (
    <label className="text-field">
      <span className="text-field__label">{label}</span>
      <input
        type={type}
        className="text-field__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}
