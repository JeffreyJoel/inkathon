import { HiOutlineDuplicate } from 'react-icons/hi'

export default function ContractDetails() {
  return (
    <div className="mt-20 p-4 sm:container">
      <div className="mb-6 border-b border-gray-700 pb-6">
        <div className="mb-3 flex items-center">
          <h1 className="mr-2 text-2xl font-bold">JeffToken</h1>
          <button className="mr-2 rounded border px-2 py-1 font-sans text-sm font-semibold  text-white no-underline focus:outline-none">
            Aleph Zero
          </button>
        </div>
        <p className="mb-3 text-gray-300">Simple description</p>
        <div className="mr-2 w-fit cursor-pointer rounded border px-2 py-1 font-sans text-xs  font-semibold text-white no-underline focus:outline-none">
          <span className="flex items-center gap-1 text-xs">
            <HiOutlineDuplicate /> 1FRMM...hV24fg
          </span>
        </div>
      </div>
    </div>
  )
}
