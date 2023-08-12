import { SettingsTabs } from '../components/SettingTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-mono text-zinc-900">Settings</h1>
      <nav className="flex">
      <SettingsTabs />
      </nav>
    </>
  )
}
