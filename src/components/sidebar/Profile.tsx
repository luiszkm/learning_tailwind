import {FiLogOut} from 'react-icons/fi'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        className="w-10 h-10 rounded-full"
        src="https://github.com/luiszkm.png"
        alt="User picture"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm/5 font-semibold text-zinc-700">Luis Soares</span>
        <span className="text-sm/5 text-zinc-500 truncate ">luiszkm@gmail.com</span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <FiLogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  )
}
