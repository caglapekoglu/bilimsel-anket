import React from 'react'
function Publish() {
    return (
        <div className='flex flex-col items-center w-full '>
            <p className='text-black  font-bold text-2xl pt-[50px]'>Anketi yayınla</p>
            <div className='w-full h-full my-5 rounded-xl shadow-xl grid px-[200px] py-[62px] gap-x-8'>
                <input className='border-[1px] border-[#B9B9B9] px-5 py-4 rounded-xl w-full h-[40px] focus:outline-none' type="text" defaultValue={"Nihat bey Anket"} />
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-2xl font-[400]'>Toplamak istediği sayı</h1>
                        <p className='text-[13px] text-greyText'>Anketin ulaşmasını istediği kişi sayısı</p>
                    </div>
                    <input className="border-[1px] focus:outline-none w-[140px] border-[#B9B9B9] h-[50px] px-2 py-2 text-center rounded-xl" type="text" defaultValue={50} />

                </div>
                <h1 className='text-2xl font-[400]'>Onay iletisi</h1>
                <textarea className='border-[1px] border-[#B9B9B9] px-5 py-4 rounded-xl w-full h-[200px] focus:outline-none' type="text" placeholder='Örn: Ankete katıldığınız için teşekkürler' />
                <a href='teklifal' className='underline text-primary'>Ücretli anket toplama teklifi almak istiyorum</a>
                <div className="flex flex-end justify-end items-end bottom-0">
                                        <a href='/odeme' className='rounded-xl border-2 border-primary my-5 py-2 px-8 bg-primary text-white flex items-center justify-center  mx-5 gap-x-2'>Yayınla</a>

                                    </div>
            </div>
        </div>
    )
}

export default Publish