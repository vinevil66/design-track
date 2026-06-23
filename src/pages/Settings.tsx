import { useState } from 'react'
import SettingsNav from '../components/SettingsNav'
import SettingsSection from '../components/SettingsSection'
import TextField from '../components/TextField'
import NotificationRow from '../components/NotificationRow'
import Button from '../components/Button'
import './Settings.css'

const NAV_ITEMS = ['Account', 'Notifications', 'Security']

export default function Settings() {
  const [activeNav, setActiveNav] = useState('Account')
  const [name, setName] = useState('Jane Doe')
  const [email, setEmail] = useState('jane@example.com')
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(false)
  const [smsNotifications, setSmsNotifications] = useState(false)

  return (
    <div className="settings">
      <header className="settings__header">
        <h1 className="settings__title">Settings</h1>
        <p className="settings__description">Manage your account preferences and configuration.</p>
      </header>
      <div className="settings__body">
        <SettingsNav items={NAV_ITEMS} active={activeNav} onSelect={setActiveNav} />
        <div className="settings__content">
          <SettingsSection title="Account" description="Update your personal information and contact details.">
            <div className="settings__fields">
              <TextField label="Name" value={name} onChange={setName} />
              <TextField label="Email" type="email" value={email} onChange={setEmail} />
            </div>
            <Button onClick={() => {}}>Save</Button>
          </SettingsSection>
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
        </div>
      </div>
    </div>
  )
}
