import './TextField.css'

interface TextFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  type?: 'text' | 'email'
  placeholder?: string
  error?: string
}

export default function TextField({
  label,
  value,
  onChange,
  onBlur,
  type = 'text',
  placeholder,
  error,
}: TextFieldProps) {
  return (
    <label className="text-field">
      <span className="text-field__label">{label}</span>
      <input
        type={type}
        className={error ? 'text-field__input text-field__input--error' : 'text-field__input'}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
      />
      {error && <span className="text-field__error">{error}</span>}
    </label>
  )
}
