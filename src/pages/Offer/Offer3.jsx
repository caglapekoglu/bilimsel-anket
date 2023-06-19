import React from 'react'
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';


function Offer3() {
    const [value, setValue] = React.useState(30);

    return (
        <div className='flex w-full h-screen flex-col '>
            <div className='grid grid-cols-3 h-7 pt-[50px] px-12' >
                <a href="/teklifal2"><ion-icon size='large' name="chevron-back"></ion-icon></a>
                <h1 className='font-bold text-2xl flex justify-center'>Teklif Al</h1>
            </div>

            <div className='flex w-full h-full flex-col justify-center items-center gap-y-4'>
                <h1 className='w-[400px] text-left text-xl'>3. Cinsiyet</h1>
                <div className='flex gap-x-6 pt-5'> 
                <div className='flex max-w-[400px] gap-x-2'>
                    <input type="checkbox" name="" id="" />
                    <p>Erkek</p>
                </div>
                <div className='flex max-w-[400px] gap-x-2'>
                    <input type="checkbox" name="" id="" />
                    <p>Kadın</p>
                </div>
                </div>
                <Stack className='w-[400px]' spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <ion-icon size="large" name="man-outline"></ion-icon>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                        <ion-icon size="large"  name="woman-outline"></ion-icon>
                    </Stack>
                    <p className='text-greyText max-w-[400px]'>Ağırlıklandırmak istediğiniz cinsiyet yönüne doğru kaydırınız.*</p>
                <div className='flex w-full max-w-[400px] justify-end'>
                    
                    <a href='/teklifal4' className='gap-x-3 rounded-xl my-4 bg-primary max-w-[400px] text-white border-[1px] items-end float-right flex  justify-center py-2 w-[200px]'>Sonraki</a>
                </div>
            </div>
        </div>
    )
}

export default Offer3