import React from 'react'
import { surveyCards } from '../data'
import AnketIcon from '../assets/anketicon.svg'
import Slider from '@mui/material/Slider';
import Grafik from '../assets/grafik.svg'
import Grafik2 from '../assets/grafik2.svg'


function Statistics() {
    return (
        <div className='flex flex-col items-center w-full '>
            <p className='text-black  font-bold text-2xl pt-[50px]'>İstatistikler</p>
            <div className='w-full h-full my-5 rounded-xl shadow-xl grid grid-cols-9 px-[70px] py-[62px] gap-x-8'>
                <div className='col-span-3'>
                    <h1>Anketler</h1>
                    <div className='h-full border-[1px] w-full border-[#B9B9B9] px-5 py-4 rounded-xl flex flex-col gap-y-6'>
                        <button className='flex items-center gap-x-3'>
                            <img className='w-[25px] ' src={AnketIcon} alt="" />

                            <div>
                                <h1 className='flex gap-x-2 font-bold text-lg'>Anket <p>{surveyCards[0].id}</p></h1>
                                <p className='text-[#828282] text-xs'>{surveyCards[0].date}</p>
                            </div>
                        </button>
                        <button className='flex items-center gap-x-3'>
                            <img className='w-[25px] ' src={AnketIcon} alt="" />

                            <div>
                                <h1 className='flex gap-x-2 font-bold text-lg'>Anket <p>{surveyCards[1].id}</p></h1>
                                <p className='text-[#828282] text-xs'>{surveyCards[1].date}</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='col-span-6'>
                    <h1>Anket verileri</h1>
                    <div className='h-full border-[1px] w-full border-[#B9B9B9] px-10 py-4 rounded-xl'>
                        <p>Doluluk oranı: 66%</p>
                        <Slider
                            size="none"
                            defaultValue={70}
                            valueLabelDisplay="auto"
                        />
                        <div className='grid-rows-2'>
                            <div className='flex justify-between py-8'>
                                <div>
                                <p>1.Cinsiyetiniz?</p>
                                <p className='text-[#828282] text-sm'>33 yanıt</p>
                                </div>
                                <img src={Grafik} alt="" />
                            </div>
                            <div className='flex justify-between py-8'>
                                <div>
                                <p>2.En sevdiğiniz narenciye?</p>
                                <p className='text-[#828282] text-sm'>33 yanıt</p>
                                </div>
                                <img className='pt-8' src={Grafik2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics