'use client'
import { formatBytes } from '@/app/util/ConvertBytes'
import { useFileInput } from './Root'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

export function FileList() {
  const { files } = useFileInput()

  return (
    <div className="mt-4 space-y-3">
      {files.map(file => {
        return (
          <div
            className="group flex items-start gap-4 rounded-lg border-zinc-200 p-4 "
            key={file.name}
          >
            <div className="rounded-full border-4 p-2 text-violet-600 border-violet-100 bg-violet-200">
              <AiOutlineCloudUpload className="h-5 w-5 text-violet-600 group-hover:to-violet-600" />
            </div>
            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-zinc-700">
                  {file.name}
                </span>
                <span className="text-sm text-zinc-500">
                  {formatBytes(file.size)}
                </span>
              </div>
              <div className="flex items-center w-full gap-3">
                <div className="h-2 rounded-full bg-zinc-100 flex-1">
                  <div
                    className="h-2 bg-violet-600 rounded-full"
                    style={{ width: '80%' }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-zinc-700">80</span>
              </div>
            </div>

            <button type='button' className=' ml-auto rounded-md p-2 hover:bg-zinc-50'>
            <BsTrash className="h-5 w-5 text-zinc-500" />

            </button>

          </div>
        )
      })}
    </div>
  )
}
