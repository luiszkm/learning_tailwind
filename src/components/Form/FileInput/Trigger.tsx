'use client';

import { AiOutlineCloudUpload } from 'react-icons/ai'
import { useFileInput } from './Root'


export function Trigger() {
  const {id} = useFileInput()
  return (
    <label
      className="group flex flex-1 flex-col items-center  gap-3 cursor-pointer text-sm font-medium rounded-lg border border-x-zinc-300 px-6 py-4 text-zinc-500 shadow-sm
    hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
      htmlFor={id}
    >
      <div className="rounded-full w-fit  border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100 ">
        <AiOutlineCloudUpload className="h-5 w-5 text-zinc-600 group-hover:to-violet-600" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <strong className="text-violet-700">Click to upload </strong>
          or drag and photo
        </span>
        <span className="text-sm">SVG , PNG, JPG or GIF (max 800x400px)</span>
      </div>
    </label>
  )
}
