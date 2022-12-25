import React from 'react'
import BAIcon from '../assets/ba-icon.svg'
import AnketIcon from '../assets/anketicon.svg'
import User from '../assets/user1.svg'

function Navbar() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className='h-screen px-5 py-5 '>
            <div className='h-full  shadow-xl rounded-xl w-[290px]'>
                <div className='bg-primary rounded-t-xl flex justify-center py-4'>
                    <img src={BAIcon} alt="" />
                </div>
                <div className='flex px-5 py-5 gap-x-3 items-center'>
                    <img src={User} alt="" />
                    <div>
                        <h1 className='text-lg font-bold'>Nihat Yuva</h1>
                        <p className='text-sm'>Admin</p>
                    </div>
                </div>
                <div className='px-5 pb-2 flex gap-x-3'>
                    <div className='flex w-[70px] justify-center py-1 shadow-xl rounded-xl items-center gap-x-2'>
                        <img className='w-3' src={AnketIcon} alt="" />
                        <p>3</p>
                    </div>
                    <div className='flex w-[70px] justify-center py-1 shadow-xl rounded-xl items-center gap-x-2'>
                        <p className='w-3'>₺</p>
                        <p>245</p>
                    </div>
                </div>
                <div className='px-5 gap-y-3'>
                    <a href='/' className='gap-x-3 rounded-xl hover:bg-primary hover:text-white flex items-center px-3 py-2 w-full'>
                        <ion-icon name="home-outline"></ion-icon>
                        <p>Ana Sayfa</p>
                    </a>
                    <a href='anketler' className='gap-x-3 rounded-xl hover:bg-primary hover:text-white flex items-center px-3 py-2 w-full'>
                        <ion-icon name="document-text-outline"></ion-icon>
                        <p>Anketler</p>
                    </a>
                    <a className='gap-x-3 rounded-xl hover:bg-primary hover:text-white flex items-center px-3 py-2 w-full'>
                        <ion-icon name="person-outline"></ion-icon>
                        <p>Hesap</p>
                    </a>
                    <a href="/istatistikler" className='gap-x-3 rounded-xl hover:bg-primary hover:text-white flex items-center px-3 py-2 w-full'>
                        <ion-icon name="bar-chart-outline"></ion-icon>
                        <p>İstatistikler</p>
                    </a>
                    <a href="/bakiyeyukle" className='gap-x-3 rounded-xl hover:bg-primary hover:text-white flex items-center px-3 py-2 w-full'>
                    <ion-icon name="card-outline"></ion-icon>
                        <p>Bakiye Yükle</p>
                    </a>
                    <a className='gap-x-3 rounded-xl hover:bg-primary hover:text-white flex items-center px-3 py-2 w-full'>
                        <ion-icon name="settings-outline"></ion-icon>
                        <p>Ayarlar ve Gizlilik</p>
                    </a>
                    
                      
                        <Dropdown
                            open={open}
                            trigger={<button className='gap-x-3 rounded-xl hover:bg-primary hover:text-white items-center flex text-left px-3 py-2 w-full' onMouseOver={handleOpen}><ion-icon name="menu-outline"></ion-icon>Diğer</button>}
                            menu={[
                                <button className='gap-x-3 rounded-xl hover:bg-primary hover:text-white items-center flex text-left px-10 py-2 w-full'><ion-icon name="help-circle-outline"></ion-icon>Yardım merkezi</button>,
                                <button className='gap-x-3 rounded-xl hover:bg-primary hover:text-white items-center flex text-left px-10 py-2 w-full' ><ion-icon name="chatbox-outline"></ion-icon>Geri bildirim</button>,
                                <button className='gap-x-3 rounded-xl hover:bg-primary hover:text-white items-center flex text-left px-10 py-2 w-full' ><ion-icon name="information-circle-outline"></ion-icon>Hakkımızda</button>,
                                <button className='gap-x-3 rounded-xl hover:bg-primary hover:text-white items-center flex text-left px-10 py-2 w-full' /*onClick={handleMenuFour}*/><ion-icon name="document-outline"></ion-icon>Sözleşmeler</button>,

                            ]}
                        />
                </div>
            </div>
        </div>
    )
}

export default Navbar

const Dropdown = ({ open, trigger, menu }) => {
    return (
        <div className="dropdown">
            {trigger}
            {open ? (
                <ul className="menu">
                    {menu.map((menuItem, index) => (
                        <li key={index} className="menu-item">{menuItem}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};