'use client';
import { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./Root";


type FileInputControlProps = ComponentProps<'input'> 

export function Control({multiple= false,...props}:FileInputControlProps) {
  const {id,onFilesSelected} = useFileInput()
  function handleFilesSelected(event:ChangeEvent<HTMLInputElement>) {
    if(!event.target.files?.length) return
    const files= Array.from(event.target.files)
    onFilesSelected(files, multiple)
  }
  return (
    <input
    className="sr-only"
    type="file"
    name="photo-select"
    onChange={handleFilesSelected}
    multiple={multiple}
    id={id}
    {...props}
  />
  )
}