import { SettingsTabs } from '../components/SettingTabs'
import * as FileInput from '../components/Form/FileInput'
import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import { AiOutlineMail } from 'react-icons/ai'
import { SelectCountry } from '@/components/Form/SelectCountry'
import { SelectItem } from '@/components/Form/SelectCountry/selectItem'
import { UserBio } from '@/components/Form/Bio'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-mono text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center border-b border-x-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">Update your profile</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-4 py-2 text-zinc-700 shadow-sm text-sm rounded-lg border border-x-zinc-300 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settingsForm"
              className="px-4 py-2 bg-violet-600 text-white shadow-sm text-sm rounded-lg hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settingsForm"
          className="flex flex-col w-full gap-5 mt-6 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="firstName"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl defaultValue="luis" />
              </InputRoot>
              <InputRoot>
                <InputControl defaultValue="Soares" />
              </InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-6">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="email"
            >
              Email address
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputPrefix>
                  <AiOutlineMail className="h-5 w-5 text-zinc-500" />
                </InputPrefix>
                <InputControl
                  id="email"
                  type="email"
                  defaultValue="luiszkm@gmail.com"
                />
              </InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-6">
            <label
              className="text-sm font-medium text-zinc-700 "
              htmlFor="photo-select"
            >
              Your photo
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                This will be displayed on your profile
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>
          <div className="grid grid-cols-form gap-3 pt-6">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="country"
            >
              Country
            </label>
            <SelectCountry placeholder="Select your country">
              <SelectItem text="Brasil" value="br" />
            </SelectCountry>
          </div>
          <div className="grid grid-cols-form gap-3 pt-6">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="time-zone"
            >
              Time zone
            </label>
            <SelectCountry placeholder="Select your timezone">
              <SelectItem text="Pacific standard Time (UTC-08:00)" value="-8" />
              <SelectItem text="America Brasil (UTC-03:00)" value="-3" />
            </SelectCountry>
          </div>
          <div className="grid grid-cols-form gap-3 pt-6">
            <label className="text-sm font-medium text-zinc-700 " htmlFor="bio">
              Bio
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                Write a short introduction
              </span>
            </label>
            <UserBio />
          </div>
          <div className="grid grid-cols-form gap-3 pt-6">
            <label
              className="text-sm font-medium text-zinc-700 "
              htmlFor="portfolio"
            >
              Portfolio projects
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                share a few snippets of your work
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-6">
            <button
              type="button"
              className="px-4 py-2 text-zinc-700 shadow-sm text-sm rounded-lg border border-x-zinc-300 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-violet-600 text-white shadow-sm text-sm rounded-lg hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
