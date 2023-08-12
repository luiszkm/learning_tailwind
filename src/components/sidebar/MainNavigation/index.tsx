import { AiOutlineHome } from "react-icons/ai";
import {  BsChevronCompactDown} from "react-icons/bs";


export function MainNavigation() {
  return(
    <nav className="space-y-0.5">
      <a href="" className="flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50">
        <AiOutlineHome className="h-5 w-5 text-zinc-500" />
        <span className="font-medium text-zinc-700">Home</span>
        <BsChevronCompactDown className="ml-auto h-5 w-5 text-zinc-400 " />
      </a>

    </nav>
  )
}