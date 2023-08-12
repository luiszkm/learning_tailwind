import { Logo } from './Logo'
import { AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai'
import { HiOutlineSupport } from 'react-icons/hi'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UseedSpaceWidget'
import { Profile } from './Profile'
import { InputRoot, InputControl, InputPrefix } from '../Input'
export function SideBar() {
  return (
    <aside className="flex flex-col gap-6 border-r  border-zinc-200 px-5 py-8">
      <Logo />

      <InputRoot>
          <AiOutlineSearch className=" h-5 w-5 text-zinc-500 " />
          <InputControl placeholder="Search" />
      </InputRoot>
      <MainNavigation />
      <div className="mt-auto flex flex-col gap-6">
        <nav>
          <NavItem title="Support" icon={HiOutlineSupport} />
          <NavItem title="Settings" icon={AiOutlineSetting} />
        </nav>
        <UsedSpaceWidget />
        <div className="h-px bg-zinc-200"></div>
        <Profile />
      </div>
    </aside>
  )
}
