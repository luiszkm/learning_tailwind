import { ComponentProps } from 'react'


type InputRootProps = ComponentProps<'div'>
type InputPrefixProps = ComponentProps<'div'>
type InputControlProps = ComponentProps<'input'>

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1  border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  )
}


export function InputRoot(props: InputRootProps) {
  return (
    <div className=" flex  w-full items-center  gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm" {...props}></div>
  )
}
