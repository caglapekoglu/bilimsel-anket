import React from 'react'
import Slider from '@mui/material/Slider';
import CircularSlider from 'react-circular-slider-bar';
function Home() {
    return (
        <div className='flex flex-col items-center w-full '>
            <p className='text-black  font-bold text-2xl pt-[50px]'>Ana Sayfa</p>
            <div className='w-full h-full my-5 rounded-xl shadow-xl grid grid-cols-2 px-[70px] py-[62px] gap-x-8'>
                <div>
                    <p className='flex items-center gap-x-2 mb-4'><ion-icon name="reload-circle-outline"></ion-icon> En son anketler</p>
                    <div className='border-[1px] h-[70%]  border-[#B9B9B9] px-5 py-4 rounded-xl'>
                        <h1 className='font-bold'>Nihat bey anket</h1>
                        <p className='py-4'>Doluluk oranı</p>
                        <Slider
                            size="none"
                            defaultValue={70}
                            valueLabelDisplay="auto"
                        />
                        <div className='py-6'>
                            <div className='grid-cols-2 grid'>
                                <div>
                                    <div className='absolute flex flex-col justify-center items-center h-[100px] w-[100px]'><ion-icon name="person-outline"></ion-icon> 147</div>
                                    <CircularSlider
                                        r={50}
                                        value={60}
                                        trackWidth={10}
                                        arcColor={"#226CE0"}
                                        thumbWidth={0}
                                        thumbBorderWidth={0}
                                        trackColor={"#FAF9F6"}

                                        onChange={value => console.log(value)}
                                    />
                                    <p>Yanıtlayanlar</p>
                                </div>

                                <div>
                                    <div className='absolute flex flex-col justify-center items-center h-[100px] w-[100px]'><ion-icon name="people-outline"></ion-icon> 200</div>
                                    <CircularSlider
                                        r={50}
                                        value={80}
                                        trackWidth={10}
                                        arcColor={"#226CE0"}
                                        thumbWidth={0}
                                        thumbBorderWidth={0}
                                        trackColor={"#FAF9F6"}

                                        onChange={value => console.log(value)}
                                    />
                                    <p>Toplam hedef</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                    <button className='rounded-xl w-[80%] border-2 border-primary my-5 py-2 px-3 bg-primary text-white flex items-center justify-center  mx-5 gap-x-2'><ion-icon name="add-outline"></ion-icon>Anket oluştur</button>

                    </div>
                </div>
                <div>
                    <p className='flex items-center gap-x-2 mb-4'><ion-icon name="mail-outline"></ion-icon> Anket yükle ve teklif al</p>
                    <div className='border-[1px] h-[70%] border-[#B9B9B9] px-5 py-4 rounded-xl'>
                        <h1>Nihat bey anket</h1>
                        <input
                            type="file"
                            className="w-full px-4 py-3 mt-2 bg-white border-borderColor rounded-lg border-2 mb-4"
                            accept="image/*"
                            required
                            placeholder="a"
                        />
                        <p>Sadece .docx/.pdf formatta dosyalar yüklenebilir
                            Maksimum dosya boyutu: 20Mb *</p>
                        <h1 className='font-bold'>veya</h1>
                        <input placeholder='Anket URL’ni giriniz' className='w-full focus:outline-none  px-4 py-3 mt-2 bg-white rounded-lg border-2 mb-4' type="text" />
                        <div className='flex justify-end'>
                        <button className='bg-primary text-white py-1 px-8 rounded-xl'>Yükle</button>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                    <button className='text-primary rounded-xl w-[80%] bg-white border-2 border-primary my-5 py-2 px-3 hover:bg-primary hover:text-white flex items-center justify-center  mx-5 gap-x-2'><ion-icon name="list-outline"></ion-icon>Anketlerim</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home