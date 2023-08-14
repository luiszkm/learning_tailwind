'use client'
import * as Select from '@radix-ui/react-select'
import { ReactNode } from 'react'
import { BsChevronCompactDown } from 'react-icons/bs'

interface SelectCountryProps extends Select.SelectProps{
  children: ReactNode
  placeholder: string
}

export function SelectCountry({ children,placeholder}: SelectCountryProps) {
  return (
    <Select.Root>
      <Select.Trigger className="flex h-11 w-full items-center justify-between  gap-2 rounded-lg border border-x-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-300">
        <Select.Value
          className="text-black"
          placeholder={placeholder}
        />
        <Select.Icon>
          <BsChevronCompactDown className="h-5 w-5 text-zinc-500 group-hover:text-violet-300 " />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 rounded-lg border jb border-x-zinc-200 overflow-hidden bg-white w-[--radix-select-trigger-width] shadow-sm"
        >
          <Select.Viewport>
            {children}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
