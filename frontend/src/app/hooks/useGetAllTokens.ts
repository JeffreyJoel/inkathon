import { useEffect, useState } from 'react'

import { ContractIds } from '@/deployments/deployments'
import FactoryContract from '@inkathon/contracts/typed-contracts/contracts/factory_contract'
import TokenContract from '@inkathon/contracts/typed-contracts/contracts/my_psp'
import { AccountId } from '@inkathon/contracts/typed-contracts/types-arguments/factory_contract'
import {
  contractQuery,
  decodeOutput,
  useInkathon,
  useRegisteredContract,
  useRegisteredTypedContract,
} from '@scio-labs/use-inkathon'
import toast from 'react-hot-toast'

const useGetAllTokens = () => {
  const { api, activeAccount, activeSigner } = useInkathon()
  const { contract, address: contractAddress } = useRegisteredContract(ContractIds.Factory)
  const { typedContract } = useRegisteredTypedContract(ContractIds.Factory, FactoryContract)
  const [tokenIds, setTokenIds] = useState<any>()
  const tokenAddress = useRegisteredTypedContract(ContractIds.Psp22, TokenContract)
  const token = useRegisteredContract(ContractIds.Psp22)
  const [tokenMetadata, setTokenMetadata] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchOwnerTokenIds = async () => {
    if (!contract || !typedContract || !api) return

    try {
      const result = await contractQuery(api, '', contract, 'get_owner_token_ids', {}, [
        activeAccount?.address,
      ])
      const { output, isError, decodedOutput } = decodeOutput(
        result,
        contract,
        'get_owner_token_ids',
      )
      if (isError) throw new Error(decodedOutput)

      // Alternatively: Fetch it with typed contract instance
      const typedResult = await typedContract.query.getOwnerTokenIds(activeAccount?.address || '')
      console.log('Result from typed contract: ', typedResult)
      setTokenIds(typedResult?.value.ok)
      getAllContractDetails(typedResult?.value.ok)
      console.log(tokenIds)
    } catch (e) {
      console.error(e)
      toast.error('Error while fetching token ids. Try again…')
    }
  }

  const fetchTokenById = async (tokenId: any): Promise<AccountId | undefined | null> => {
    if (!contract || !typedContract || !api) {
      return
    }
    try {
      const result = await contractQuery(api, '', contract, 'get_token_by_id', {}, [tokenId])
      const { output, isError, decodedOutput } = decodeOutput(result, contract, 'get_token_by_id')
      if (isError) throw new Error(decodedOutput)
      // Alternatively: Fetch it with typed contract instance
      const typedResult = await typedContract.query.getTokenById(tokenId)
      console.log('Result from fetchTokenById contract: ', typedResult)
      return typedResult.value.ok
    } catch (e) {
      console.error(e)
      toast.error('Error while fetchingTokenById. Try again…')
    }
  }

  const getAllContractDetails = async (tokenIdArray: any): Promise<AccountId[]> => {
    const accountIds: AccountId[] = []
    for (let index = 0; index < tokenIdArray?.length; index++) {
      const accountId = (await fetchTokenById(tokenIdArray[index])) as AccountId
      accountIds.push(accountId)
    }
    return accountIds
  }

  const getContractMetadata = async () => {
    const addresses = await getAllContractDetails([0, 1])
    console.log(addresses)
    const metadatas = []
    for (const address of addresses) {
      console.log(address)
      console.log(token.contract)
      if (!api) return
      const resultName = await tokenAddress.typedContract
        ?.withAddress(`${address}`)
        .query.tokenName()
      const resultSymbol = await tokenAddress.typedContract
        ?.withAddress(`${address}`)
        .query.tokenSymbol()
      const resultDecimal = await tokenAddress.typedContract
        ?.withAddress(`${address}`)
        .query.tokenDecimals()
      const resultSupply = await tokenAddress.typedContract
        ?.withAddress(`${address}`)
        .query.totalSupply()
      console.log(resultName, resultSymbol, resultSupply, resultDecimal)
      metadatas.push({
        name: resultName?.value.ok,
        symbol: resultSymbol?.value.ok,
        address,
        totalSupply: resultSupply?.value.ok,
      })
    }
    setTokenMetadata(metadatas)
    console.log(metadatas)
  }

  useEffect(() => {
    setIsLoading(true)
    if (contract && typedContract && api) {
      fetchOwnerTokenIds()
      console.log(tokenIds)
      getContractMetadata()
    }
    setIsLoading(false)
  }, [typedContract, contract, typedContract, api])

  //   return tokenMetadata
  return { tokenMetadata, isLoading }
}

export default useGetAllTokens
