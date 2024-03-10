import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ContractIds } from '@/deployments/deployments'
import TokenContract from '@inkathon/contracts/typed-contracts/contracts/my_psp'
import {
  useInkathon,
  useRegisteredContract,
  useRegisteredTypedContract,
} from '@scio-labs/use-inkathon'

export function ContractOverview() {
  const router = useRouter()
  const params = useParams()
  const { api, activeAccount, activeSigner } = useInkathon()
  const { contract, address: contractAddress } = useRegisteredContract(ContractIds.Factory)
  // const { typedContract } = useRegisteredTypedContract(ContractIds.Factory, FactoryContract)
  // const [tokenIds, setTokenIds] = useState<any>()
  const tokenAddress = useRegisteredTypedContract(ContractIds.Psp22, TokenContract)
  const token = useRegisteredContract(ContractIds.Psp22)

  const [tokenIds, setTokenIds] = useState<any>()

  console.log(params.id)

  const getContractMetadata = async (address: any) => {
    console.log(token.contract)
    if (!api) return
    // Assuming tokenAddress.typedContract is available and correctly initialized
    const resultName = await tokenAddress.typedContract
      ?.withAddress('5Dha2roPXs7Wi5oBv5QoKhfeE2A7Ctju5vGW3JMLcj8LaFoe')
      .query.tokenName()
    //   .query.tokenName()
    // const resultSymbol = await tokenAddress.typedContract
    //   ?.withAddress(`${address}`)
    //   .query.tokenSymbol()
    // const resultDecimal = await tokenAddress.typedContract
    //   ?.withAddress(`${address}`)
    //   .query.tokenDecimals()
    // const resultSupply = await tokenAddress.typedContract
    //   ?.withAddress(`${address}`)
    //   .query.totalSupply()

    console.log(
      resultName,
      // resultSymbol, resultSupply, resultDecimal
    )

    // const metadata = {
    //   name: resultName?.value.ok,
    //   symbol: resultSymbol?.value.ok,
    //   address,
    //   totalSupply: resultSupply?.value.ok,
    // }

    // setTokenMetadata([metadata]) // Assuming setTokenMetadata is a state setter function
    // console.log(metadata)
  }
  useEffect(() => {
    // if (params.id && api) {
    getContractMetadata('5Dha2roPXs7Wi5oBv5QoKhfeE2A7Ctju5vGW3JMLcj8LaFoe')
    // console.log(tokenMetadata)

    // console.log(tokenIds)
    // getContractMetadata()
    // }
  }, [api, params.id])
  return (
    <div className="mt-4">
      {/* <div className="mb-10 border-b border-gray-700 pb-6">
        <div className="mb-3 flex items-center">
          <h1 className="mr-2 text-2xl font-bold">JeffToken</h1>
          <button className="mr-2 rounded border px-2 py-1 font-sans text-sm font-semibold  text-white no-underline focus:outline-none">
            Aleph Zero
          </button>
        </div>
        <p className="mb-3 text-gray-300">Simple description</p>
        <div className="mr-2 w-fit cursor-pointer rounded border px-2 py-1 font-sans text-xs  font-semibold text-white no-underline focus:outline-none">
          <span className="flex items-center gap-1 text-xs">
            <HiDuplicate /> 1FRMM...hV24fg
          </span>
        </div>
      </div> */}

      <h2 className="text-2xl font-bold">Token Details</h2>

      <div className="mt-6 flex w-[70%]">
        <div className="mr-8 block w-full max-w-sm cursor-pointer rounded-lg border border-gray-600 p-5 shadow">
          <h5 className="mb-2 text-xl font-normal tracking-tight text-gray-900 dark:text-white">
            Total Supply
          </h5>
          <p className="text-xl font-normal text-gray-100">PKT</p>
        </div>
        <div className="mr-8 block w-full max-w-sm cursor-pointer rounded-lg border border-gray-600 p-5 shadow">
          <h5 className="mb-2 text-xl font-normal tracking-tight text-white">Owned by you</h5>
          <p className="text-xl font-normal text-gray-100">0.0 PKT</p>
        </div>
        <div className="mr-8 block w-full max-w-sm cursor-pointer rounded-lg border border-gray-600 p-5 shadow">
          <h5 className="mb-2 text-xl font-normal tracking-tight text-white">Decimals</h5>
          <p className="text-xl font-normal text-gray-100">16</p>
        </div>
      </div>
      {/* Events */}
      <div className="mt-12">
        <div className="flex justify-between">
          <h2 className="mb-4 text-2xl font-bold">Events</h2>
          <p
            className="cursor-pointer text-sm font-bold text-blue-500 underline"
            // onClick={() => {
            //   handleViewEvents
            // }}
          >
            View all
          </p>
        </div>
        <div className="relative overflow-x-auto rounded">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Transaction Hash
                </th>
                <th scope="col" className="px-6 py-3">
                  Events
                </th>
                <th scope="col" className="px-6 py-3">
                  Block Number
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <th scope="row" className="cursor-pointer whitespace-nowrap px-6 py-4 font-medium">
                  JeffToken
                </th>
                <td scope="row" className="px-6 py-4">
                  Mint
                </td>
                <td scope="row" className="px-6 py-4">
                  1FRMM...hV24fg
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Permissions */}
      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-bold">Permissions</h2>
        <div className="relative overflow-x-auto rounded">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Member
                </th>
                <th scope="col" className="px-6 py-3">
                  Roles
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <td scope="col" className="cursor-pointer whitespace-nowrap px-6 py-4 font-medium">
                  0xe2ac869...02254E
                </td>
                <td scope="col" className="px-6 py-4">
                  <div className="flex">
                    <div className="mr-2 w-fit rounded border border-gray-500 px-2 py-1 font-sans text-xs font-semibold  text-gray-400 no-underline focus:outline-none">
                      Member
                    </div>

                    <div className="mr-2 w-fit rounded border border-gray-500 px-2 py-1 font-sans text-xs font-semibold  text-gray-400 no-underline focus:outline-none">
                      Owner
                    </div>
                  </div>
                </td>
                <td scope="col" className="px-6 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
