import React, { useState } from "react";
import { Container } from 'react-bootstrap';

function Selectdropdown() {
    const [showhide, setShowhide] = useState('');

    const handleshowhide = (event) => {
        const getuser = event.target.value;
        setShowhide(getuser);

    }

    return (
        <div className='flex flex-col items-center w-full '>
            <p className='text-black  font-bold text-2xl pt-[50px]'>Anket Oluştur</p>
            <div className='w-full h-full my-5 rounded-xl shadow-xl gap-x-8 px-[200px] py-[60px] flex flex-col gap-y-4'>
                <input className='border-[1px] border-[#B9B9B9] px-5 py-4 rounded-xl w-full focus:outline-none' type="text" defaultValue={"Nihat bey Anket"} />
                <div className='border-[1px]  border-[#B9B9B9] rounded-xl flex '>
                    <div className="flex py-4  flex-col justify-center items-center px-5 border-r-[1px] border-[#DADADA]">
                        <button className="border-[1px] border-primary w-6 rounded-lg flex items-center justify-center text-primary h-6"><ion-icon name="chevron-forward-outline"></ion-icon></button>
                        <span>1</span>
                        <button className="border-[1px] border-primary w-6 rounded-lg flex items-center justify-center text-primary h-6">
                            <ion-icon name="chevron-back-outline"></ion-icon>
                        </button>
                    </div>
                    <div className="flex py-4 flex-col px-5">
                        <input className="w-full focus:outline-none" type="text" placeholder="Bölüm adı" />
                        <input className="w-full focus:outline-none pb-5" type="text" placeholder="Bölüm açıklaması" />
                    </div>

                </div>
                <div className='border-[1px] h-[70%]  border-[#B9B9B9] px-5 py-4 rounded-xl'>
                    <React.Fragment>
                        <Container>
                            <div className="row fthight">

                                <div className="col-sm-6 gap-y-3 flex flex-col">
                                    <input className='border-[1px] border-[#B9B9B9] px-5 py-2 rounded-xl w-full focus:outline-none' type="text" placeholder="Soru 1" />

                                    <div className="border-[1px] border-[#B9B9B9] px-5 py-2 rounded-xl w-full">
                                        <select name="usertype" className="form-control focus:outline-none" onChange={(e) => (handleshowhide(e))}>
                                            <option value="">--Seçiniz--</option>
                                            <option value="1">Çoktan seçmeli</option>
                                            <option value="2">Doğrusal ölçek</option>
                                            <option value="3">Onay kutuları</option>
                                            <option value="4">Kısa Cevap</option>
                                            <option value="5">Paragraf</option>
                                            <option value="6">Çoktan seçmeli tablosu</option>


                                        </select>
                                    </div>

                                    {
                                        showhide === '1' && (
                                            <div className="col-md-10 form-group flex flex-col gap-y-3">
                                                <div className="flex gap-x-3">
                                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                                    <input className=" px-5 py-2  w-full focus:outline-none border-b-[1px] border-greyText" type="text" placeholder="1. seçenek" />
                                                </div>
                                                <div className="flex gap-x-3">
                                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                                    <input className=" px-5 py-2  w-full focus:outline-none border-b-[1px] border-greyText" type="text" placeholder="2. seçenek" />
                                                </div>
                                            </div>
                                        )}

                                    {
                                        showhide === '2' && (
                                            <div className="col-md-10 flex flex-col gap-y-4 form-group">
                                                <div className="flex gap-x-4 items-center">
                                                    <input className="border-[1px] focus:outline-none w-[60px] border-[#B9B9B9] px-2 py-2 text-center rounded-xl" type="text" defaultValue={1} />
                                                    <span>-</span>
                                                    <input className="border-[1px] focus:outline-none w-[60px] border-[#B9B9B9] px-2 py-2 text-center rounded-xl" type="text" defaultValue={5} />
                                                </div>
                                                <div className="grid grid-cols-2 gap-x-12">
                                                    <div className="flex gap-x-3 items-center">
                                                        <span>1</span>
                                                        <input className=" px-5 py-2  w-full focus:outline-none border-b-[1px] border-greyText" type="text" placeholder="Kesinlikle katılmıyorum" />
                                                    </div>
                                                    <div className="flex gap-x-3 items-center">
                                                        <span>5</span>
                                                        <input className=" px-5 py-2  w-full focus:outline-none border-b-[1px] border-greyText" type="text" placeholder="Kesinlikle katılıyorum" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                    {
                                        showhide === '3' && (
                                            <div className="col-md-10 form-group flex flex-col gap-y-3">
                                                <div className="flex gap-x-3">
                                                    <input type="checkbox" />
                                                    <input className=" px-5 py-2  w-full focus:outline-none border-b-[1px] border-greyText" type="text" placeholder="1. seçenek" />
                                                </div>
                                                <div className="flex gap-x-3">
                                                    <input type="checkbox" />
                                                    <input className=" px-5 py-2  w-full focus:outline-none border-b-[1px] border-greyText" type="text" placeholder="2. seçenek" />
                                                </div>
                                            </div>
                                        )}
                                    {
                                        showhide === '4' && (
                                            <div className="col-md-10 form-group flex flex-col gap-y-3">

                                                <input className=" px-5 py-2  w-full focus:outline-none border-b-[1px] border-greyText" placeholder="Yanıt" />
                                            </div>
                                        )}
                                    {
                                        showhide === '5' && (
                                            <div className="col-md-10 form-group flex flex-col gap-y-3">

                                                <textarea className=" px-5 py-2 h-[140px] w-full focus:outline-none border-[1px] rounded-xl border-[#B9B9B9]" placeholder="Yanıt" />
                                            </div>
                                        )}
                                    {showhide === '6' && (
                                        <div className="grid grid-cols-2 gap-x-12">
                                            <div>
                                                <h1>Satırlar</h1>
                                                <div className="flex gap-x-3 items-center">
                                                    <span>1.</span>
                                                    <input className=" px-5 py-2  w-full focus:outline-none border-b-[1px] border-greyText" type="text" placeholder="1. satır" />
                                                </div>
                                                <div className="flex gap-x-3 items-center">
                                                    <span>2.</span>
                                                    <input className=" px-5 py-2  w-full focus:outline-none border-b-[1px] border-greyText" type="text" placeholder="2. satır" />
                                                </div>
                                            </div>
                                            <div>
                                                <h1>Sütunlar</h1>
                                                <div className="flex gap-x-3 items-center">
                                                    <span>1.</span>
                                                    <input className=" px-5 py-2  w-full focus:outline-none border-b-[1px] border-greyText" type="text" placeholder="1. sütun" />
                                                </div>
                                                <div className="flex gap-x-3 items-center">
                                                    <span>2.</span>
                                                    <input className=" px-5 py-2  w-full focus:outline-none border-b-[1px] border-greyText" type="text" placeholder="2. sütun" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    

                                </div>
                                

                            </div>

                        </Container>
                    </React.Fragment>
                </div><div className="flex flex-end justify-end items-end bottom-0">
                                        <a href="/yayinla" className='rounded-xl border-2 border-primary my-5 py-2 px-8 bg-primary text-white flex items-center justify-center  mx-5 gap-x-2'>Yayınla</a>

                                    </div></div></div>
    );
}
export default Selectdropdown;