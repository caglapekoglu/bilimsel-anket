import React,{useState} from 'react'
import ba from '../../assets/ba.svg'
import baText from '../../assets/baText.svg'


function Auth() {
    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setTimeout(() => {
            setOpen(!open);
          }, 300);
        
    };
  return (
    <div className='bg-primary w-screen absolute h-screen'>
        <button style={{
          maxWidth: open ? '50%' : '100%',
        }} className='gap-x-3 flex flex-col items-center justify-center px-7 underline bg-primary w-screen absolute h-screen' onClick={handleOpen}> <img src={ba}></img> <img src={baText} alt="" /></button>
        <Dropdown
                                open={open}
                                menu={[
                                    <div className='flex justify-end '>
                                    <div className='rounded-l-2xl  bg-white w-[50%] absolute h-screen z-100 flex px-[120px] justify-center flex-col gap-y-2'>
                                        <h1 className='text-4xl font-bold pb-3 '>Akademisyen<br></br> Girişi</h1>
                                        <input className='border-[1px] max-w-[400px] border-[#B9B9B9] px-5 py-2 rounded-xl w-full focus:outline-none' type="text" name="" id="" placeholder='Kullanıcı Adı' />
                                        <input className='border-[1px] max-w-[400px] border-[#B9B9B9] px-5 py-2 rounded-xl w-full focus:outline-none' type="password" name="" id="" placeholder='Şifre' />
                                        <div className='grid grid-cols-2 max-w-[400px] gap-x-3'>
                                        <a href='/anasayfa' className='gap-x-3 rounded-xl bg-primary text-white border-[1px] items-center flex  justify-center py-2 w-full'>Giriş yap</a>
                                        <a href='/kayitol' className='gap-x-3 rounded-xl text-primary bg-white border-[1px] border-primary items-center flex justify-center py-2 w-full'>Kayıt Ol</a>
                                        </div>
                                        <a className='text-primary max-w-[400px] pt-5 flex justify-center' href="">Şifrenizi mi unuttunuz?</a>
                                    </div>
                                    </div>
                                ]}
                            />
    </div>
  )
}

export default Auth

const Dropdown = ({ open, trigger, menu }) => {
    return (
        <div className="dropdown">
            {trigger}
            {open ? (
                <ul className="menu flex flex-col gap-y-3 pl-9">
                    {menu.map((menuItem, index) => (
                        <li key={index} className="menu-item">{menuItem}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};
