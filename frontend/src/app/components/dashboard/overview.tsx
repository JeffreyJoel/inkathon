'use client'

import { NFTSelection } from './NFTSelection'
import { TokenSelection } from './TokenSelction'

export function OverviewComponent() {
  return (
    <div className="mt-14 rounded-lg  border-dashed border-gray-200 p-8  dark:border-gray-700">
      {/* <ConnectButton /> */}
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

      <div></div>
    </div>
  )
}
