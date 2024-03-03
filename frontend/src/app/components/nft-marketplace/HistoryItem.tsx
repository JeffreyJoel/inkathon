import Image from 'next/image'

import { FaEthereum } from 'react-icons/fa'

import { default as Nft1, default as Nft2 } from '../../../../public/images/nfts/Nft2.png'
import Nft3 from '../../../../public/images/nfts/Nft3.png'
import Nft4 from '../../../../public/images/nfts/Nft4.png'
import Nft5 from '../../../../public/images/nfts/Nft5.png'
import Nft6 from '../../../../public/images/nfts/Nft6.png'
import Card from '../card'

const HistoryCard = () => {
  const HistoryData = [
    {
      image: Nft1,
      title: 'Colorful Heaven',
      owner: 'Mark Benjamin',
      price: 0.4,
      time: '30s',
    },
    {
      image: Nft2,
      title: 'Abstract Colors',
      owner: 'Esthera Jackson',
      price: 2.4,
      time: '50m',
    },
    {
      image: Nft3,
      title: 'ETH AI Brain',
      owner: 'Nick Wilson',
      price: 0.3,
      time: '20s',
    },
    {
      image: Nft4,
      title: 'Swipe Circles',
      owner: ' Peter Will',
      price: 0.4,
      time: '4h',
    },
    {
      image: Nft5,
      title: 'Mesh Gradients',
      owner: 'Will Smith',
      price: 0.4,
      time: '30s',
    },
    {
      image: Nft6,
      title: '3D Cubes Art',
      owner: ' Manny Gates',
      price: 0.4,
      time: '2m',
    },
  ]

  return (
    <Card extra={'mt-3 !z-5 overflow-hidden'}>
      {/* HistoryCard Header */}
      <div className="flex items-center justify-between rounded-t-3xl p-3">
        <div className="text-navy-700 text-lg font-bold dark:text-white">History</div>
        <button className="linear bg-lightPrimary text-brand-500 rounded-[20px] px-4 py-2 text-base font-medium transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
          See all
        </button>
      </div>

      {/* History CardData */}

      {HistoryData.map((data, index) => (
        <div
          key={index}
          className="dark:!bg-navy-800 dark:hover:!bg-navy-700 flex h-full w-full items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:shadow-none"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center">
              <Image
                width="2"
                height="20"
                className="h-full w-full rounded-xl"
                src={data.image}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-navy-700 text-base font-bold dark:text-white"> {data.title}</h5>
              <p className="mt-1 text-sm font-normal text-gray-600"> {data.owner} </p>
            </div>
          </div>

          <div className="text-navy-700 mt-1 flex items-center justify-center dark:text-white">
            <div>
              <FaEthereum />
            </div>
            <div className="text-navy-700 ml-1 flex items-center text-sm font-bold dark:text-white">
              <p> {} </p>
              {data.price} <p className="ml-1">ETH</p>
            </div>
            <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
              <p>{data.time}</p>
              <p className="ml-1">ago</p>
            </div>
          </div>
        </div>
      ))}
    </Card>
  )
}

export default HistoryCard
