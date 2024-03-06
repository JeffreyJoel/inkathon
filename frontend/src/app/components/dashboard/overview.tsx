'use client'

import { useState } from 'react'

import { CreateNFT, NFTSelection } from './NFTSelection'
import { NftTable } from './NftTable'
import { CreateToken, TokenSelection } from './TokenSelction'
import { TokenTable } from './TokenTable'

export function OverviewComponent() {
  const [contractCreated, setContractCreated] = useState(true)

  return (
    <div className="mt-14 rounded-lg  border-dashed border-gray-200 p-8  dark:border-gray-700">
      {/* <ConnectButton /> */}
      {!contractCreated ? (
        <div>
          <h2 className="text-center text-2xl font-bold lg:text-3xl">
            You have not created any projects
          </h2>

          <p className="mt-2 text-center text-lg leading-7">
            Pick from one one of our available options
          </p>

          <div className="mt-12 flex flex-wrap justify-center">
            <TokenSelection />
            <NFTSelection />
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold lg:text-3xl">Overview</h2>

          <div className="mt-8 flex justify-center">
            <div className="mr-8 block max-w-sm cursor-pointer rounded-lg border border-gray-600 bg-gray-800 p-6 shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Contracts Deployed
              </h5>
              <p className="text-lg font-normal text-gray-100">2</p>
            </div>
            <div className="mr-8 block max-w-sm cursor-pointer rounded-lg border border-gray-600 bg-gray-800 p-6 shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Tokens Deployed</h5>
              <p className="text-lg font-normal text-gray-100">1</p>
            </div>
            <div className="mr-8 block max-w-sm cursor-pointer rounded-lg border border-gray-600 bg-gray-800 p-6 shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">NFTs Deployed</h5>
              <p className="text-lg font-normal text-gray-100">1</p>
            </div>
          </div>

          <div className="mt-20">
            <div className="align-center mb-5 flex justify-between">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Token Contracts
              </h3>
              <CreateToken />
            </div>
            <TokenTable />
          </div>

          <div className="mt-16">
            <div className="align-center mb-5 flex justify-between">
              <h3 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                NFT Contracts
              </h3>
              <CreateNFT />
            </div>
            <NftTable />
          </div>
        </div>
      )}
    </div>
  )
}
