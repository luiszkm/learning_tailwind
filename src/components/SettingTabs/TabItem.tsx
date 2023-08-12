import * as Tabs from '@radix-ui/react-tabs'
import {motion} from 'framer-motion'

interface TabItemProps {
  title: string
  value: string
  is_Selected?: boolean
}

export function TabItem({ title, value, is_Selected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      className="px-1 pb-4 relative text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
      value={value}
    >
      <span>{title}</span>
      {is_Selected && (
        <motion.div layoutId='activeTab'
        className=" absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700" />
      )}
    </Tabs.Trigger>
  )
}
