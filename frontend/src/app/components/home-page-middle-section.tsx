'use client'

import { Gluten } from 'next/font/google'
import Image from 'next/image'
import { FC } from 'react'

import { Fade } from 'react-awesome-reveal'

import { Button } from '@/components/ui/button'

import heroImg from '../../../public/images/bananas.png'

export const gluten = Gluten({ subsets: ['latin'] })

export const HomeMidSection: FC = () => {
  return (
    <>
      <section className="mt-10">
        {/* <Image
          src={landingBg}
          alt=""
          width={100}
          height={100}
          className="absolute left-0 right-0 -z-50 h-full w-full"
        /> */}

        <div className="mx-auto grid max-w-screen-2xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
          <div className="order-last mr-auto place-self-center  lg:col-span-7">
            <Fade direction="right">
              <h1 className="mb-4 max-w-3xl text-5xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
                Build and Deploy Polkadot tokens with ease
                <br />
                {/* <span
                className={`text-5xl font-semibold text-primary md:text-5xl xl:text-6xl ${gluten.className}`}
              >
                Badger
              </span> */}
              </h1>
            </Fade>
            <Fade direction="right">
              <p className="md:text-xllg:mb-8 mb-6 max-w-2xl font-mono font-light text-gray-500 lg:text-2xl">
                A comprehensive web3 development platform that enables users to onboard with
                wallets, create and deploy smart contracts and enhance app scalability through
                robust infrastructure.
              </p>
            </Fade>

            <div className="mb-4 space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <Fade direction="right">
                {' '}
                <Button />
              </Fade>
            </div>
          </div>

          <div className=" lg:col-span-5 lg:mt-0 lg:flex">
            <Fade direction="left">
              <Image src={heroImg} alt="" width={500} height={500} className="h-[95%] w-[95%]" />
            </Fade>{' '}
          </div>
        </div>
      </section>
    </>
  )
}
