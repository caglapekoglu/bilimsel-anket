import React from 'react'
import card from '../assets/Mastercard.svg'
import card2 from '../assets/debitCard.png'

function Balance() {
    return (
        <div className='flex flex-col items-center w-full '>
            <p className='text-black  font-bold text-2xl pt-[50px]'>Bakiye yükleme</p>
            <div className='w-full h-full my-5 rounded-xl shadow-xl grid grid-cols-2 px-[120px] py-[62px] gap-x-[190px]'>
                <div className='gap-y-5 flex flex-col'>
                    <div className='border-[1px] h-[90px] border-[#B9B9B9] px-5 py-4 rounded-xl flex gap-x-5'>
                        <p>Yüklenecek <br></br>
                            tutarı giriniz:</p>
                        <input className='bg-[#E5E5E5] focus:outline-none placeholder:text-[#828282] px-3 rounded-sm w-[120px]' placeholder='₺0' />
                    </div>
                    <div className='flex pt-7  gap-x-2'>
                        <input type="radio" id="html" name="fav_language" value="HTML"></input>
                        <p>Yeni Kart</p>
                    </div>
                    <div className='border-[1px] border-[#B9B9B9] px-5 py-4 rounded-xl space-y-3 gap-x-5'>
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
                    <div className='flex gap-x-3'>
                    <input type="checkbox"/>
                    <p className='text-sm'>K.V.K.K aydınlatma metnini okudum, kabul ediyorum</p>
                    </div>
                    <div className='flex gap-x-3'>
                    <input type="checkbox"/>
                    <p className='text-sm'>Kullanıcı sözleşmesini okudum, kabul ediyorum</p>
                    </div>
                </div>
                <div>
                    <p className=' flex h-[90px] items-center text-[#828282] gap-x-2 text-lg'><ion-icon name="card-outline"></ion-icon>Kayıtlı kartlarım</p>
                    <div className='my-4 flex pt-7  gap-x-2'>
                        <input type="radio" id="html" name="fav_language" value="HTML"></input>
                        <p>Mastercard3</p>
                        
                    </div>
                    <img className='' src={card2} alt="" />
                </div>
                
            </div>
        </div>
    )
}

export default Balance