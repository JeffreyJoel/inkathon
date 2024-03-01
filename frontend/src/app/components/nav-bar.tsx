'use client'

import { Gluten } from 'next/font/google'
// import Link from 'next/link'
import { FC } from 'react'

import { Button } from '@/components/ui/button'

export const gluten = Gluten({ subsets: ['latin'] })

export const NavBar: FC = () => {
  return (
    <>
      <nav className="fixed top-0 z-10 w-full   bg-opacity-30 backdrop-blur-lg backdrop-filter">
        <div className="mx-auto w-11/12 px-4 md:w-10/12">
          <div className="flex h-24 items-center justify-between">
            <span
              className={`text-3xl font-semibold text-gray-100 lg:text-5xl ${gluten.className}`}
            >
              Badger
            </span>
            <div className="hidden space-x-6 text-gray-100 lg:flex">
              {/* <a href="#" className="font-mono text-sm font-bold uppercase">
                Dashboard
              </a>
              <a href="#" className="font-mono text-sm font-bold uppercase">
                About
              </a>
              <a href="#" className="font-mono text-sm font-bold uppercase">
                Projects
              </a> */}
              {/* <a href="# " className="font-semi-bold text-xl ">
                Contact
              </a> */}
            </div>
            {/* <ConnectButton /> */}
            <Button
              variant={'default'}
              // className="h-12 min-w-[4rem] gap-2 rounded-xl border border-white/10 bg-primary px-4 py-3 font-bold text-foreground lg:min-w-[8rem] lg:rounded-2xl"
              className="h-12 min-w-[4rem] gap-2 rounded-xl border border-white/10  px-4 py-3 font-bold text-foreground lg:min-w-[8rem] lg:rounded-2xl"
              translate="no"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}
