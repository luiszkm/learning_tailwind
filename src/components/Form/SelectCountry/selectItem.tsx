"use client"
import * as Select from '@radix-ui/react-select'
import { BsCheck } from 'react-icons/bs'

type SelectItemProps = Select.SelectItemProps & {
  text: string
  value: string
}

export function SelectItem({ text, value, ...props }: SelectItemProps) {
  return (
    <Select.Item
      value={value}
      {...props}
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none  data-[highlighted]:bg-zinc-50"
    >
      <Select.ItemText className="text-black">{text}</Select.ItemText>

      <Select.ItemIndicator>
        <BsCheck className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
