'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="flex gap-4 mt-6 w-full items-center border-b border-zinc-200">
        <TabItem value="my-details" title="My details" is_Selected={currentTab === 'my-details'} />
        <TabItem
          value="profile"
          title="Profile"
          is_Selected={currentTab === 'profile'} 
        />
        <TabItem
          value="password"
          title="Password"
          is_Selected={currentTab === 'password'}
        />
        <TabItem
          value="team"
          title="Team"
          is_Selected={currentTab === 'team'}
        />
        <TabItem
          value="plan"
          title="Plan"
          is_Selected={currentTab === 'plan'}
        />
        <TabItem
          value="billing"
          title="Billing"
          is_Selected={currentTab === 'billing'}
        />
        <TabItem
          value="email"
          title="Email"
          is_Selected={currentTab === 'email'}
        />
        <TabItem
          value="notification"
          title="Notification"
          is_Selected={currentTab === 'notification'}
        />
        <TabItem
          value="integrations"
          title="Integrations"
          is_Selected={currentTab === 'integrations'}
        />
        <TabItem value="api" title="API" is_Selected={currentTab === 'api'} />
      </Tabs.List>
    </Tabs.Root>
  )
}
