'use client'

import { ComponentProps } from 'react'
import { BioHeader } from './BioHeader'

interface TextareaProps extends ComponentProps<'textarea'> {}
export function UserBio(props: TextareaProps) {
  return (
    <div className="space-y-3">
      <BioHeader />
      <textarea
        className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 py-2 shadow-sm "
        {...props}
      />
   </div>
  )
}
