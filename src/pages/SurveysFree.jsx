import React from 'react'
import { surveyCards } from '../data'
import AnketIcon from '../assets/anketicon.svg'
import Green from '../assets/green.svg'
function SurveysFree() {
    return (
        <div className='flex flex-col items-center w-full '>
            <p className='text-black  font-bold text-2xl pt-[50px]'>Anketler</p>
            <div className='w-full h-full my-5 rounded-xl shadow-xl gap-x-8'>
                <div className='grid grid-cols-2 text-center'>
                    <a href='/anketler' className='rounded-b-xl py-3 bg-[#EEEEEE]'>Ücretli anketler</a>
                    <a href='/ucretsiz-anketler' className='py-3 '>Ücretsiz anketler</a>
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
                            <a href="/teklifal" className='underline text-primary text-sm'>Ücretli anket toplama teklifi almak istiyorum</a>


                        </div>
                        <div className='flex gap-x-8'>
                            <button className='flex items-center gap-x-1'><ion-icon name="eye-outline"></ion-icon>Yanıtları gör</button>
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
                                <h1 className='flex gap-x-2 font-bold text-lg'>Anket <p>{surveyCards[1].id}</p></h1>
                                <p className='text-[#828282]'>{surveyCards[1].date}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <a href="/teklifal" className='underline text-primary text-sm'>Ücretli anket toplama teklifi almak istiyorum</a>
                        </div>
                        <div className='flex gap-x-8'>
                            <button className='flex items-center gap-x-1'><ion-icon name="eye-outline"></ion-icon>Yanıtları gör</button>
                            <button className='flex items-center gap-x-1'><ion-icon name="create-outline"></ion-icon>Düzenle</button>
                            <button className='flex items-center gap-x-1'><ion-icon name="trash-outline"></ion-icon>Sil</button>





                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-end'>
                <a href='/anketekle' className='bg-primary rounded-full bottom-0 fixed mb-10 px-2 py-2 mr-5'><p className='w-7 h-7 text-white  flex items-center justify-center'><ion-icon name="add-outline"></ion-icon></p></a>
                </div>

            </div>
        </div>
    )
}

export default SurveysFree