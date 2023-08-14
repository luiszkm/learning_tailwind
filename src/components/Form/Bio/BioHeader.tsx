import {  FiItalic, FiBold, FiList, FiLink } from 'react-icons/fi'
import { SelectCountry } from '../SelectCountry'
import { SelectItem } from '../SelectCountry/selectItem'
export function BioHeader() {
  return (
   
      <div className="grid gap-3 grid-cols-2">
        <SelectCountry defaultValue="normal" placeholder="">
          <SelectItem text="Normal Text" value="normal" />
          <SelectItem text="Markdown" value="md" />
        </SelectCountry>
        <div className="flex items-center gap-1">
          <button type="button" className=" p-2 hover:bg-zinc-50 rounded-md">
            <FiBold className="w-4 h-4 text-zinc-500" />
          </button>
          <button type="button" className=" p-2 hover:bg-zinc-50 rounded-md">
            <FiItalic className="w-4 h-4 text-zinc-500" />
          </button>
          <button type="button" className=" p-2 hover:bg-zinc-50 rounded-md">
            <FiLink className="w-4 h-4 text-zinc-500" />
          </button>
          <button type="button" className=" p-2 hover:bg-zinc-50 rounded-md">
            <FiList className="w-4 h-4 text-zinc-500" />
          </button>
        </div>
      </div>
   
  )
}
