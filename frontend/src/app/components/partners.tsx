'use client'

import { Gluten } from 'next/font/google'
import Image from 'next/image'
import { FC } from 'react'

import acurast from '../../../public/images/Acurast_white.svg'
import aleph from '../../../public/images/Aleph_zero.svg'
import polkadot from '../../../public/images/Polkadot_long.svg'
import ink from '../../../public/images/ink.svg'

export const gluten = Gluten({ subsets: ['latin'] })

export const Partners: FC = () => {
  return (
    <>
      <section className="mt-12  w-[80%]">
        <div className="mx-auto rounded-3xl bg-gray-100/20 bg-opacity-30 px-6 py-6 backdrop-blur-lg backdrop-filter">
          <div className="mx-auto flex w-10/12 flex-wrap justify-between">
            <Image src={acurast} alt="" width={150} />
            <Image src={ink} alt="" width={80} />
            <Image src={polkadot} alt="" width={100} />
            <Image src={aleph} alt="" width={150} />
          </div>
        </div>
      </section>
    </>
  )
}
