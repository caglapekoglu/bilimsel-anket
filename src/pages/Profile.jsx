import React from 'react'
import User from '../assets/user1.svg'

function Profile() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);


  const handleOpen = () => {
      setOpen(!open);
      setOpen2(false);
      setOpen3(false);
      setOpen4(false);
  };
  const handleOpen2 = () => {
    setOpen2(!open2);
    setOpen(false);
    setOpen3(false);
    setOpen4(false);

};
const handleOpen3 = () => {
    setOpen3(!open3);
    setOpen2(false);
    setOpen(false);
    setOpen4(false);

};
const handleOpen4 = () => {
    setOpen3(false);
    setOpen2(false);
    setOpen(false);
    setOpen4(!open4);

};

  return (
    <div className='flex flex-col items-center w-full '>
            <p className='text-black  font-bold text-2xl pt-[50px]'>Hesap</p>
            <div className='w-full h-full rounded-xl  my-5 shadow-xl flex flex-col  px-[172px] py-[62px] gap-x-8'>
                <img className="w-[90px]" src={User} alt="" />
                <div className="grid grid-cols-3 gap-y-2 pt-3">
                    <div className="col-span-1">
                        <h1 className="text-2xl font-bold">Nihat Yuva</h1>
                        <p className="text-greyText">@nihatyuvaa</p>
                        <p className="text-greyText">Referans ID: 99999937</p>
                        <p>Mersin Üniversitesi Bilgisayar Mühendisliği Doçent Doktor</p>
                    </div>
                    <div className="col-span-2">
                    <Dropdown
                            open={open}
                            trigger={<button className='gap-x-3 rounded-xl text-primary items-center flex text-left px-3 py-2 w-full' onClick={handleOpen}>Hesap bilgileri<ion-icon name="chevron-down-outline"></ion-icon></button>}
                            menu={[
                                <input className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1" defaultValue="@nihatyuva"/>,
                                <input className="border-[1px] rounded-lg justify-center flex border-greyText focus:outline-none w-full px-3 py-1" defaultValue="hello@nihatyuva.com"/>,
                                <input className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1" defaultValue="+90 555 444 33 22"/>,
                                <input type="password" className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1" defaultValue={"fkjfsfs"}/>,

                            ]}
                        />
                        <Dropdown
                            open={open2}
                            trigger={<button className='gap-x-3 rounded-xl text-primary items-center flex text-left px-3 py-2 w-full' onClick={handleOpen2}>Kişisel bilgiler<ion-icon name="chevron-down-outline"></ion-icon></button>}
                            menu={[
                                <input className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1" defaultValue="Nihat"/>,
                                <input className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1" defaultValue="Yuva"/>,
                                <input className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1" defaultValue="333********"/>,
                                <select className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1">
                                    <option value="">Erkek</option>
                                    <option value="">Kız</option>
                                </select>,

                            ]}
                        />
                        <Dropdown
                            open={open3}
                            trigger={<button className='gap-x-3 rounded-xl text-primary items-center flex text-left px-3 py-2 w-full' onClick={handleOpen3}>Akademik bilgiler<ion-icon name="chevron-down-outline"></ion-icon></button>}
                            menu={[
                                <select className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1">
                                    <option value="">Mersin Üniversitesi</option>
                                    <option value="">Çukurova Üniversitesi</option>
                                    <option value="">Marmara Üniversitesi</option>
                                    <option value="">Boğaziçi Üniversitesi</option>

                                </select>,
                                <select className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1">
                                    <option value="">Bilgisayar Mühendisliği</option>
                                    <option value="">Makina Mühendisliği</option>
                                    <option value="">Programlama</option>

                                </select>,
                                <input className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1" defaultValue="Doktor"/>,

                            ]}
                        />
                                                <Dropdown
                            open={open4}
                            trigger={<button className='gap-x-3 rounded-xl text-primary items-center flex text-left px-3 py-2 w-full' onClick={handleOpen4}>Fatura bilgileri<ion-icon name="chevron-down-outline"></ion-icon></button>}
                            menu={[
                                <input className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1" defaultValue='Adres'/>,
                                <select className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1">
                                    <option value="" selected disabled hidden>İl</option>
                                    <option value="">Mersin</option>
                                    <option value="">İstanbul</option>
                                    <option value="">Adana</option>
                                    <option value="">İzmir</option>

                                </select>,
                                <select className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1">
                                    <option value="" selected disabled hidden>İlçe</option>
                                    <option value="">Mezitli</option>
                                    <option value="">Yenişehir</option>
                                    <option value="">Akdeniz</option>

                                </select>,
                                <select className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1">
                                <option value="" selected disabled hidden>Ülke</option>
                                <option value="">Türkiye</option>
                                <option value="">Almanya</option>
                                <option value="">Hollanda</option>

                                </select>,
                                <input className="border-[1px] rounded-lg flex border-greyText focus:outline-none w-full px-3 py-1" defaultValue='IBAN'/>,
                            ]}
                        />
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default Profile

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