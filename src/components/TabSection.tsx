import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Events } from './Events'
import Platforms from './Platforms'
import { FaUsers } from 'react-icons/fa'
import { CgCalendarToday } from 'react-icons/cg'

export function TabSection() {
  const tabStyle = `
      text-sm sm:text-md font-medium leading-5
      text-zinc-800 dark:text-zinc-100
      flex items-center justify-center gap-3
      border-b-2
      ui-selected:border-zinc-800 dark:ui-selected:border-zinc-200
      ui-not-selected:border-transparent
      ui-selected:text-zinc-800
      ui-not-selected:hover:text-zinc-800 dark:ui-not-selected:hover:text-zinc-200
      dark:ui-selected:text-zinc-200
      ui-not-selected:text-zinc-500
      dark:ui-not-selected:text-zinc-400
      mx-auto py-4
      focus:outline-none
    `

  return (
    <TabGroup>
      <div className="sticky top-[64px] z-50 w-full border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-[1260px] px-4">
          <TabList className="flex pt-1">
            <div className="flex flex-row gap-8">
              <Tab className={tabStyle}>
                <CgCalendarToday className="h-5 w-5" />
                <span>Events</span>
              </Tab>
              <Tab className={tabStyle}>
                <FaUsers className="h-5 w-5" />
                <span>Communities</span>
              </Tab>
            </div>
          </TabList>
        </div>
      </div>
      <div className="mx-auto max-w-[1260px]">
        <TabPanels>
          <TabPanel className="-mx-2">
            <div className="mb-8 mt-12 max-w-2xl px-6">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
                Attend an Event
              </h2>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                Find events and meetups happening in Calgary&apos;s tech
                community. From in-person gatherings to virtual meetups, explore
                opportunities to learn, connect, and collaborate. Contact
                [contact info] if you have an event you want added to the list.
              </p>
            </div>
            <Events />
          </TabPanel>
          <TabPanel className="-mx-2">
            <div className="mb-8 mt-12 max-w-2xl px-6">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
                Join an Online Community
              </h2>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                Join the conversation and become part of our thriving tech
                community! Connect with like-minded professionals and hobbyists
                across our dedicated Slack channels, Discord servers, and other
                platforms.
              </p>
            </div>
            <Platforms />
          </TabPanel>
        </TabPanels>
      </div>
    </TabGroup>
  )
}
