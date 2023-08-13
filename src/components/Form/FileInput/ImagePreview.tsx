'use client'
import { AiOutlineUser } from 'react-icons/ai'
import { useFileInput } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { files } = useFileInput()
  const previewURL = useMemo(() => {
    if (!files.length || files.length === 0) return null
    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full">
        <AiOutlineUser className="h-8 w-8 text-violet-500" />
      </div>
    )
  } else {
    return (
      <img
        className="h-16 w-16 rounded-full object-contain"
        src={previewURL}
        alt=""
      />
    )
  }
}
