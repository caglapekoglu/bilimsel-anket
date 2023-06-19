import React from 'react'
import slider from '../../assets/slider4.svg'
function SignUp5() {
  return (
    <div className='w-screen absolute bg-white flex flex-col z-100 h-screen pt-[120px] items-center gap-y-3'>
        <h1 className='font-bold text-4xl'>Kayıt Ol</h1>
        <p>Referans Bilgileri</p>
        <img src={slider} alt="" />
        <p className='max-w-[400px] text-left'>Bilimsel Anketleri size referans eden tanıdığınızın “Referans ID” numarasını giriniz</p>
        <input className='border-[1px] max-w-[400px] border-[#B9B9B9] px-5 py-2 rounded-xl w-full focus:outline-none' type="text" name="" id="" placeholder='Referans ID giriniz' />
        <p className='w-[400px] text-left mt-5'>Bilimsel Anketleri nereden duydunuz?</p>
        <textarea className='border-[1px] max-w-[400px] border-[#B9B9B9] px-5 py-2 rounded-xl w-full focus:outline-none' type="text" name="" id="" placeholder='Yanıtınızı giriniz' />
        <a href='/anasayfa' className='gap-x-3 rounded-xl my-4 bg-primary max-w-[400px] text-white border-[1px] items-center flex  justify-center py-2 w-full'>Kayıt Ol </a>
        <p>Hesabınız var mı? <a className='text-primary' href="/giris">Giriş Yapın</a></p>
    </div>
  )
}

export default SignUp5