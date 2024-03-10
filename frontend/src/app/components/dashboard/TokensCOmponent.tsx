import useGetAllTokens from '@/app/hooks/useGetAllTokens'

import { TokenOverview } from './TokenOverview'

export function TokensComponent() {
  const { tokenMetadata, isLoading } = useGetAllTokens()
  return (
    <div className="mt-14 rounded-lg  border-dashed border-gray-200 p-4 dark:border-gray-700">
      <div className="mb-4">
        <TokenOverview tableData={tokenMetadata} isLoading={isLoading} />
      </div>
    </div>
  )
}
