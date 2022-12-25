import React from 'react'
import { surveyCards } from '../data'
import AnketIcon from '../assets/anketicon.svg'
import Green from '../assets/green.svg'
function Surveys() {
    return (
        <div className='flex flex-col items-center w-full '>
            <p className='text-black  font-bold text-2xl pt-[50px]'>Anketler</p>
            <div className='w-full h-full my-5 rounded-xl shadow-xl gap-x-8'>
                <div className='grid grid-cols-2 text-center'>
                    <a href='/anketler' className='py-3'>Ücretli anketler</a>
                    <a href='/ucretsiz-anketler' className='rounded-b-xl py-3 bg-[#EEEEEE]'>Ücretsiz anketler</a>
                </div>
                <div className='py-[62px]  px-[70px]'>
                <div className='flex justify-between h-[90px] items-center w-full'> { /* Card Comp */}
                    <div className='flex items-center gap-x-4'>
                        <div>
                            <img className='w-[25px] ' src={AnketIcon} alt="" />
                        </div>
                        <div>
                            <h1 className='flex gap-x-2 font-bold text-lg'>Anket <p>{surveyCards[0].id}</p></h1>
                            <p className='text-[#828282]'>{surveyCards[0].date}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <button className='text-[#164A9D] px-3 py-1 rounded-lg bg-[#D2E1F9]'>Teklif alındı</button>
                        <button className='text-[#164A9D] px-3 py-1 rounded-lg bg-[#D2E1F9] ml-3'>278₺</button>

                    </div>
                    <div className='flex gap-x-8'>
                        <button className='flex items-center gap-x-1'><ion-icon name="card-outline"></ion-icon>Kabul et</button>
                        <button className='flex items-center gap-x-1'><ion-icon name="close-circle-outline"></ion-icon>Reddet</button>
                        <button className='flex items-center gap-x-1'><ion-icon name="eye-outline"></ion-icon>Teklif Detayı</button>


                    </div>
                </div>
                <div className='flex justify-between  h-[90px] items-center w-full'> { /* Card Comp */}
                    <div className='flex items-center gap-x-4'>
                        <div>
                            <img className='w-[25px] ' src={AnketIcon} alt="" />
                        </div>
                        <div>
                            <h1 className='flex gap-x-2 font-bold text-lg'>Anket <p>{surveyCards[1].id}</p></h1>
                            <p className='text-[#828282]'>{surveyCards[1].date}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <button className='text-[#B20005] px-3 py-1 rounded-lg bg-[#FFCCCD]'>Teklif reddedildi</button>

                    </div>
                    <div className='flex gap-x-8'>
                        <button className='flex items-center gap-x-1'><ion-icon name="add-circle-outline"></ion-icon>Teklif iste</button>
                        <button className='flex items-center gap-x-1'><ion-icon name="create-outline"></ion-icon>Düzenle</button>
                        <button className='flex items-center gap-x-1'><ion-icon name="trash-outline"></ion-icon>Sil</button>


                    </div>
                </div>
                <div className='flex justify-between  h-[90px] items-center w-full'> { /* Card Comp */}
                    <div className='flex items-center gap-x-4'>
                        <div>
                            <img className='w-[25px] ' src={AnketIcon} alt="" />
                        </div>
                        <div>
                            <h1 className='flex gap-x-2 font-bold text-lg'>Anket <p>{surveyCards[2].id}</p></h1>
                            <p className='text-[#828282]'>{surveyCards[2].date}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <button className='text-[#996200] px-3 py-1 rounded-lg bg-[#FFE4B3]'>Teklif bekleniyor</button>

                    </div>
                    <div className='flex gap-x-8'>
                        <button className='flex items-center gap-x-1'><ion-icon name="add-circle-outline"></ion-icon>Teklif iste</button>
                        <button className='flex items-center gap-x-1'><ion-icon name="create-outline"></ion-icon>Düzenle</button>
                        <button className='flex items-center gap-x-1'><ion-icon name="trash-outline"></ion-icon>Sil</button>


                    </div>
                </div>
                <div className='flex justify-between  h-[90px] items-center w-full'> { /* Card Comp */}
                    <div className='flex items-center gap-x-4'>
                        <div>
                            <img className='w-[25px] ' src={AnketIcon} alt="" />
                        </div>
                        <div>
                            <h1 className='flex gap-x-2 font-bold text-lg'>Anket <p>{surveyCards[3].id}</p></h1>
                            <p className='text-[#828282]'>{surveyCards[3].date}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <button className='text-[#1F9900] px-3 py-1 rounded-lg bg-[#B3FFBA]'>Teklif kabul edildi</button>

                    </div>
                    <div className='flex gap-x-8'>
                        <button className='flex items-center gap-x-1'><ion-icon name="eye-outline"></ion-icon>Yanıtları görüntüle</button>
                        <button className='flex items-center gap-x-1'><img className='w-2' src={Green} alt="" /> Veri toplanıyor</button>



                    </div>
                </div>
                <div className='flex justify-between  h-[90px] items-center w-full'> { /* Card Comp */}
                    <div className='flex items-center gap-x-4'>
                        <div>
                            <img className='w-[25px] ' src={AnketIcon} alt="" />
                        </div>
                        <div>
                            <h1 className='flex gap-x-2 font-bold text-lg'>Anket <p>{surveyCards[4].id}</p></h1>
                            <p className='text-[#828282]'>{surveyCards[4].date}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <button className='text-[#1F9900] px-3 py-1 rounded-lg bg-[#B3FFBA]'>Teklif kabul edildi</button>

                    </div>
                    <div className='flex gap-x-8'>
                        <button className='flex items-center gap-x-1'><ion-icon name="eye-outline"></ion-icon>Yanıtları görüntüle</button>
                        <button className='flex items-center gap-x-1'><img className='w-2' src={Green} alt="" /> Veri toplanıyor</button>



                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Surveys