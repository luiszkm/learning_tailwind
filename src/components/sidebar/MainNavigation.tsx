import {
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineCheckSquare,
  AiOutlineFlag
} from 'react-icons/ai'
import { BiLayer } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={AiOutlineHome} />
      <NavItem title="Dashboard" icon={AiOutlineBarChart} />
      <NavItem title="Projects" icon={BiLayer} />
      <NavItem title="Tasks" icon={AiOutlineCheckSquare} />
      <NavItem title="Reporting" icon={AiOutlineFlag} />
      <NavItem title="Users" icon={FiUsers} />
    </nav>
  )
}
