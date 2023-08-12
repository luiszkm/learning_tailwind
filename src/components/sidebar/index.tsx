import { Logo } from './Logo'
import { AiOutlineSearch } from 'react-icons/ai'
import { MainNavigation } from './MainNavigation'
export function SideBar() {
  return (
    <aside className="space-y-6 border-r  border-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-1 flex w-full items-center  gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <AiOutlineSearch className="h-5 2-5 text-zinc-500" />
        <input
          className="flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
          placeholder="Search"
          type="text"
        />
      </div>
      <MainNavigation />
    </aside>
  )
}
