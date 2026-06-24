import { useEffect, useRef, useState } from 'react'
import SettingsNav from '../components/SettingsNav'
import SettingsSection from '../components/SettingsSection'
import TextField from '../components/TextField'
import NotificationRow from '../components/NotificationRow'
import Button from '../components/Button'
import './Settings.css'

const NAV_ITEMS = ['Account', 'Notifications', 'Security']
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Settings() {
  const [activeNav, setActiveNav] = useState('Account')
  const [name, setName] = useState('Jane Doe')
  const [email, setEmail] = useState('jane@example.com')
  const [emailError, setEmailError] = useState<string | undefined>()
  const [accountDirty, setAccountDirty] = useState(false)
  const [showSaved, setShowSaved] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(false)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const savedTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    return () => clearTimeout(savedTimeoutRef.current)
  }, [])

  const handleNameChange = (value: string) => {
    setName(value)
    setAccountDirty(true)
  }

  const handleEmailChange = (value: string) => {
    setEmail(value)
    setAccountDirty(true)
    if (emailError) setEmailError(undefined)
  }

  const handleEmailBlur = () => {
    setEmailError(email && !EMAIL_PATTERN.test(email) ? 'Enter a valid email address.' : undefined)
  }

  const handleSave = () => {
    setAccountDirty(false)
    setShowSaved(true)
    clearTimeout(savedTimeoutRef.current)
    savedTimeoutRef.current = setTimeout(() => setShowSaved(false), 3000)
  }

  const handleNavSelect = (item: string) => {
    if (item === activeNav) return
    if (accountDirty) {
      const discard = window.confirm('You have unsaved changes. Discard them?')
      if (!discard) return
      setAccountDirty(false)
      setEmailError(undefined)
    }
    setActiveNav(item)
  }

  return (
    <div className="settings">
      <header className="settings__header">
        <h1 className="settings__title">Settings</h1>
        <p className="settings__description">Manage your account preferences and configuration.</p>
      </header>
      <div className="settings__body">
        <SettingsNav items={NAV_ITEMS} active={activeNav} onSelect={handleNavSelect} />
        <div className="settings__content">
          {activeNav === 'Account' && (
            <SettingsSection title="Account" description="Update your personal information and contact details.">
              <div className="settings__fields">
                <TextField label="Name" value={name} onChange={handleNameChange} placeholder="Enter your name" />
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  placeholder="Enter your email"
                  error={emailError}
                />
              </div>
              <div className="settings__save">
                <Button onClick={handleSave}>Save</Button>
                {showSaved && <span className="settings__saved">Changes saved ✓</span>}
              </div>
            </SettingsSection>
          )}
          {activeNav === 'Notifications' && (
            <SettingsSection title="Notifications" description="Choose how you want to be notified.">
              <NotificationRow
                title="Email notifications"
                description="Receive updates and summaries in your inbox."
                checked={emailNotifications}
                onChange={setEmailNotifications}
              />
              <NotificationRow
                title="Push notifications"
                description="Get real-time alerts on your devices."
                checked={pushNotifications}
                onChange={setPushNotifications}
              />
              <NotificationRow
                title="SMS notifications"
                description="Receive important alerts via text message."
                checked={smsNotifications}
                onChange={setSmsNotifications}
                showDivider={false}
              />
            </SettingsSection>
          )}
          {activeNav === 'Security' && (
            <SettingsSection title="Security" description="Manage your password and account security.">
              <p className="settings__placeholder">Security settings are coming soon.</p>
            </SettingsSection>
          )}
        </div>
      </div>
    </div>
  )
}
