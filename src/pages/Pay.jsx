import React from 'react'
import { surveyCards } from '../data'
import AnketIcon from '../assets/anketicon.svg'
import card from '../assets/Mastercard.svg'

function Pay() {
    return (
        <div className='flex flex-col items-center w-full '>
            <p className='text-black  font-bold text-2xl pt-[50px]'>Ödeme</p>
            <div className='w-full h-full my-5 rounded-xl space-y-7 shadow-xl px-[120px] py-[62px] gap-x-[190px]'>
                <div className='grid grid-cols-2'>
                    <div>
                        <h1 className='text-xl mb-3'>Seçilen anket: </h1>
                        <div className='flex items-center gap-x-4'>
                            <div>
                                <img className='w-[25px] ' src={AnketIcon} alt="" />
                            </div>
                            <div>
                                <h1 className='flex gap-x-2 font-bold text-lg'>Anket <p>{surveyCards[1].id}</p></h1>
                                <p className='text-[#828282] text-sm'>{surveyCards[1].date}</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-[1px] w-[300px] justify-center h-[90px] border-[#B9B9B9] px-5 py-4 rounded-xl flex gap-x-5'>
                        <p>Ödenecek <br></br> tutar:</p>
                        <input className='bg-[#E5E5E5] focus:outline-none placeholder:text-[#828282] px-3 rounded-sm w-[120px]' placeholder='₺0' />
                    </div>

                </div>
                <div className='grid grid-cols-2'>
                    <div>
                        <div className='flex pt-7  gap-x-2'>
                            <input type="radio" id="html" name="fav_language" value="HTML"></input>
                            <p>Bakiyeyle ödeme</p>
                        </div>

                        <div className='border-[1px] w-[300px] justify-center my-3 h-[90px] border-[#B9B9B9] px-5 py-4 rounded-xl flex gap-x-5'>
                            <p>Toplam <br></br> bakiye:</p>
                            <input className='bg-[#E5E5E5] focus:outline-none placeholder:text-[#828282] px-3 rounded-sm w-[120px]' placeholder='₺0' />
                        </div>
                        <a href="" className='underline text-primary text-sm my-4'>Havale ve ya EFT yoluyla ödeme</a>
                        <div className='flex flex-col mt-[100px] justify-end'>
                        <div className='flex gap-x-3'>
                            <input type="checkbox" />
                            <p className='text-sm'>K.V.K.K aydınlatma metnini okudum, kabul ediyorum</p>
                        </div>
                        <div className='flex gap-x-3'>
                            <input type="checkbox" />
                            <p className='text-sm'>Kullanıcı sözleşmesini okudum, kabul ediyorum</p>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex pt-7  gap-x-2'>
                            <input type="radio" id="html" name="fav_language" value="HTML"></input>
                            <p>Kredi ve ya Banka kartıyla ödeme</p>
                        </div>
                        <div className='border-[1px] border-[#B9B9B9] w-[300px] px-5 py-4 my-3 rounded-xl space-y-3 gap-x-5'>
                            <input className='bg-[#E5E5E5] focus:outline-none placeholder:text-[#828282] w-[80%] px-3 rounded-sm h-7' placeholder='Kartın üzerindeki isim ' />
                            <input className='bg-[#E5E5E5] focus:outline-none placeholder:text-[#828282] px-3 w-full rounded-sm h-7' placeholder='Kart numarası ' />
                            <div className='flex gap-x-3'>
                                <input className='bg-[#E5E5E5] focus:outline-none placeholder:text-[#828282] px-3 w-[90px] rounded-sm h-7' placeholder='AA/YY' />
                                <input className='bg-[#E5E5E5] focus:outline-none placeholder:text-[#828282] px-3 w-[90px] rounded-sm h-7' placeholder='CVV' />

                            </div>
                            <div className='flex justify-end'>
                                <img src={card} alt="" />
                            </div>


                        </div>
                        <div className='flex justify-end w-[300px] items-end'>
                        <button className='rounded-xl w-[100px] border-2 border-primary my-5 py-2 px-5 bg-primary text-white items-center  gap-x-2'>Öde</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pay