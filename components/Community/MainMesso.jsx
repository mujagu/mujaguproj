import Posu from '@/components/Community/Feed';

const Community = () => {
  return (
    <main className="flex h-full min-h-screen flex-col">
    <div className="overflow-scroll scrollbar-hide mb-4">
        <div className='flex gap-8 w-max'>
            <div className='flex items-center gap-2 cursor-pointer '>
                <button className='border-[0.5px] border-[#DC2DFF] rounded-[9px] p-2 text-black font-semibold text-[12px]'>Tech</button>
                <button className='border-[0.5px] border-[#DC2DFF] rounded-[9px] p-2 text-black font-semibold text-[12px]'>Web Dev</button>
                <button className='border-[0.5px] border-[#DC2DFF] rounded-[9px] p-2 text-black font-semibold text-[12px]'>Java</button>
                <button className='border-[0.5px] border-[#DC2DFF] rounded-[9px] p-2 text-black font-semibold text-[12px]'>Programming</button>
                <button className='border-[0.5px] border-[#DC2DFF] rounded-[9px] p-2 text-black font-semibold text-[12px]'>Hardware</button>
            </div>
        </div>
    </div>

      {/* feeds */}
      <div className='flex flex-col gap-5'>
       <Posu />
       <Posu />
      </div>
    </main>
  )
}

export default Community