import React from 'react'

function Offer5() {
  return (
    <div className='flex w-full h-screen flex-col '>
        <div className='grid grid-cols-3 h-7 pt-[50px] px-12' >
            <a href="/teklifal4"><ion-icon size='large' name="chevron-back"></ion-icon></a>
            <h1 className='font-bold text-2xl flex justify-center'>Teklif Al</h1>
        </div>
       
    <div className='flex w-full h-full flex-col justify-center items-center gap-y-4'>
        <h1 className='w-[400px] text-left text-xl'>5. Hedef kitlenizini niteleyen 5 adet anahtar kelime giriniz</h1>
        <input className='border-[1px] max-w-[400px] border-[#B9B9B9] px-5 py-2 rounded-xl w-full focus:outline-none' type="text" name="" id="" placeholder='Örneğin: girişim, startup, iş, işletme, ticari kre..' />
        <div className='flex w-full max-w-[400px] justify-end'>
        <a href='/teklifal6' className='gap-x-3 rounded-xl my-4 bg-primary max-w-[400px] text-white border-[1px] items-end float-right flex  justify-center py-2 w-[200px]'>Sonraki</a>
        </div>
    </div>
    </div>
  )
}

export default Offer5