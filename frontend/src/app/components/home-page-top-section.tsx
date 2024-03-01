'use client'

import { Gluten } from 'next/font/google'
import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/components/ui/button'

import heroImg from '../../../public/images/caeser.svg'
import landingBg from '../../../public/images/landing-bg.png'

export const gluten = Gluten({ subsets: ['latin'] })

export const HomeTopSection: FC = () => {
  return (
    <>
      <section className="mt-10">
        <Image
          src={landingBg}
          alt=""
          width={100}
          height={100}
          className="absolute left-0 right-0 -z-50 h-full w-full"
        />
        <div className="mx-auto grid max-w-screen-2xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-3xl text-5xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
              Spin up web3 projects fast on Polkadot with
              <br />
              <span
                className={`text-5xl font-semibold text-primary md:text-5xl xl:text-6xl ${gluten.className}`}
              >
                Badger
              </span>
            </h1>
            <p className="md:text-xllg:mb-8 mb-6 max-w-2xl font-mono font-light text-gray-500 lg:text-2xl">
              A comprehensive web3 development platform that enables users to onboard with wallets,
              create and deploy smart contracts and enhance app scalability through robust
              infrastructure.
            </p>
            <div className="mb-4 space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              {/* <Button
                className="h-12 min-w-[4rem] gap-2 rounded-xl border border-white/10 bg-gray-900  px-4 py-3 font-bold text-foreground lg:min-w-[8rem] lg:rounded-2xl"
                variant={'outline'}
              >
                Explore
              </Button> */}
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
          <div className=" lg:col-span-5 lg:mt-0 lg:flex">
            {/* <img src={hero} alt="heroimage"/> */}
            <Image src={heroImg} alt="" width={400} height={400} className="h-[90%] w-[90%]" />
          </div>
        </div>
      </section>
    </>
  )
}
