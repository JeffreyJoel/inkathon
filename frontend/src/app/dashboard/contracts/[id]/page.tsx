'use client'

import { useState } from 'react'

import ContractDetails from '@/app/components/dashboard/contracts/ContractInfo'
import { ContractOverview } from '@/app/components/dashboard/contracts/ContractOverview'
import { Explorer } from '@/app/components/dashboard/contracts/Explorer'
import { NavBar } from '@/app/components/nav-bar'

// import tableDataTopCreators from 'variables/nfts/marketplace/tableDataTopCreators';

const SingleContract = () => {
  const [tab, setTab] = useState(0)

  return (
    <>
      <NavBar isDashboard={true} />
      <div className="relative mt-24">
        <nav className=" fixed left-0 right-0 mx-auto mb-4 w-full border bg-background">
          <div className="container px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <div className="flex">
                  <button
                    className={`mr-2 rounded border px-4 py-2 font-sans text-sm font-semibold no-underline  focus:outline-none ${tab === 0 ? 'bg-white text-gray-900' : 'text-white'}`}
                    onClick={() => {
                      setTab(0)
                    }}
                  >
                    Overview
                  </button>
                  <button
                    className={`mr-2 rounded border px-4 py-2 font-sans text-sm font-semibold  no-underline  focus:outline-none ${tab === 1 ? 'bg-white text-gray-900 ' : 'text-white'}`}
                    // className="mr-2 rounded border px-4 py-2 font-sans text-sm font-semibold  text-white  no-underline hover:text-white focus:outline-none active:shadow-none"
                    onClick={() => {
                      setTab(1)
                    }}
                  >
                    Events
                  </button>
                  <button
                    className={`mr-2 rounded border px-4 py-2 font-sans text-sm font-semibold no-underline  focus:outline-none ${tab === 2 ? 'bg-white text-gray-900' : 'text-white'}`}
                    // className="mr-2 rounded border px-4 py-2 font-sans text-sm font-semibold  text-white  no-underline hover:text-white focus:outline-none active:shadow-none"
                    onClick={() => {
                      setTab(2)
                    }}
                  >
                    Permissions
                  </button>
                  <button
                    className={`mr-2 rounded border px-4 py-2 font-sans text-sm font-semibold no-underline  focus:outline-none ${tab === 3 ? 'bg-white text-gray-900' : 'text-white'}`}
                    // className="mr-2 rounded border px-4 py-2 font-sans text-sm font-semibold  text-white  no-underline hover:text-white focus:outline-none active:shadow-none"
                    onClick={() => {
                      setTab(3)
                    }}
                  >
                    Explorer
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ms-3 flex items-center">
                  <div>
                    <button
                      type="button"
                      className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                    >
                      <span className="sr-only">Open user menu</span>
                      {/* <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/> */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <ContractDetails />

        <div className="p-4 sm:container sm:mx-auto">
          <div>
            {tab == 0 ? <ContractOverview /> : ''}
            {tab == 1 ? <ContractOverview /> : ''}
            {tab == 2 ? <ContractOverview /> : ''}
            {tab == 3 ? <Explorer /> : ''}
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleContract
