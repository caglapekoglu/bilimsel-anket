import React from 'react'
import slider from '../../assets/slider1.svg'
function SignUp() {
  return (
    <div className='w-screen absolute bg-white flex flex-col z-100 h-screen pt-[120px] items-center gap-y-3'>
        <h1 className='font-bold text-4xl'>Kayıt Ol</h1>
        <p>Hesap Bilgileri</p>
        <img src={slider} alt="" />
        <input className='border-[1px] max-w-[400px] border-[#B9B9B9] px-5 py-2 rounded-xl w-full focus:outline-none' type="text" name="" id="" placeholder='Kullanıcı Adı' />
        <input className='border-[1px] max-w-[400px] border-[#B9B9B9] px-5 py-2 rounded-xl w-full focus:outline-none' type="text" name="" id="" placeholder='E-posta' />
        <input className='border-[1px] max-w-[400px] border-[#B9B9B9] px-5 py-2 rounded-xl w-full focus:outline-none' type="text" name="" id="" placeholder='Cep telefonu' />
        <input className='border-[1px] max-w-[400px] border-[#B9B9B9] px-5 py-2 rounded-xl w-full focus:outline-none' type="password" name="" id="" placeholder='Şifre' />
        <input className='border-[1px] max-w-[400px] border-[#B9B9B9] px-5 py-2 rounded-xl w-full focus:outline-none' type="password" name="" id="" placeholder='Şifre tekrar' />
        <a href='/kayitol2' className='gap-x-3 rounded-xl my-4 bg-primary max-w-[400px] text-white border-[1px] items-center flex  justify-center py-2 w-full'>Devam Et </a>
        <p>Hesabınız var mı? <a className='text-primary' href="/giris">Giriş Yapın</a></p>
    </div>
  )
}

export default SignUp