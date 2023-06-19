import React,{useState} from 'react'
import { surveyCards } from '../data'
import AnketIcon from '../assets/anketicon.svg'
import Slider from '@mui/material/Slider';
import Grafik from '../assets/grafik.svg'
import Grafik2 from '../assets/grafik2.svg'
import Graf from '../assets/cinsiyet.svg'
import Graf2 from '../assets/sevdiginoyun.svg'

function Statistics() {
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(false);


    const handleOpen = () => {
        setOpen(true);
        setOpen2(false);

    };
    const handleOpen2 = () => {
        setOpen2(true);
        setOpen(false);
    }
    return (
        <div className='flex flex-col items-center w-full '>
            <p className='text-black  font-bold text-2xl pt-[50px]'>İstatistikler</p>
            <div className='w-full h-full my-5 rounded-xl shadow-xl grid grid-cols-9 px-[70px] py-[62px] gap-x-8'>
                <div className='col-span-3'>
                    <h1>Anketler</h1>
                    <div className='h-full border-[1px] w-full border-[#B9B9B9] px-5 py-4 rounded-xl flex flex-col gap-y-6'>
                        <button className='flex items-center gap-x-3' onClick={handleOpen}>
                            <img className='w-[25px] ' src={AnketIcon} alt="" />

                            <div>
                                <h1 className='flex gap-x-2 font-bold text-lg'>Anket <p>{surveyCards[0].id}</p></h1>
                                <p className='text-[#828282] text-xs'>{surveyCards[0].date}</p>
                            </div>
                        </button>
                        <button className='flex items-center gap-x-3' onClick={handleOpen2}>
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
                    <Dropdown
                                open={open}

                                menu={[
                                    <div className='h-full border-[1px] w-full border-[#B9B9B9] px-10 py-4 rounded-xl'>
                                    <h1 className='font-bold text-xl'>Anket 1</h1>
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
                                            <p className='text-[#828282] text-sm'>49 yanıt</p>
                                            </div>
                                            <img className='w-[250px]' src={Grafik} alt="" />
                                        </div>
                                        <div className='flex justify-between py-8'>
                                            <div>
                                            <p>2.En sevdiğiniz narenciye?</p>
                                            <p className='text-[#828282] text-sm'>49 yanıt</p>
                                            </div>
                                            <img className='pt-8 w-[300px]' src={Grafik2} alt="" />
                                        </div>
                                    </div>
                                </div>
                                ]}
                            />
                            <Dropdown
                                open={open2}

                                menu={[
                                    <div className='h-full border-[1px] w-full border-[#B9B9B9] px-10 py-4 rounded-xl'>
                                    <h1 className='font-bold text-xl'>Anket 2</h1>

                                    <p>Doluluk oranı: 30%</p>
                                    <Slider
                                        size="none"
                                        defaultValue={30}
                                        valueLabelDisplay="auto"
                                    />
                                    <div className='grid-rows-2'>
                                        <div className='flex justify-between py-8'>
                                            <div>
                                            <p>1.Cinsiyetiniz?</p>
                                            <p className='text-[#828282] text-sm'>17 yanıt</p>
                                            </div>
                                            <img className='w-[250px]' src={Graf} alt="" />
                                        </div>
                                        <div className='flex justify-between py-8'>
                                            <div>
                                            <p>2.En sevdiğiniz bilgisyar oyunu?</p>
                                            <p className='text-[#828282] text-sm'>13 yanıt</p>
                                            </div>
                                            <img className='pt-8 w-[300px]' src={Graf2} alt="" />
                                        </div>
                                    </div>
                                </div>
                                ]}
                            />
                    
                </div>
            </div>
        </div>
    )
}

export default Statistics
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
