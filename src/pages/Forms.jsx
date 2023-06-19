import { googleFormsToJson } from 'react-google-forms-hooks'
import React from 'react'
// can use both full and shortened form url


function Forms(){
    return (
        <div className='w-full flex justify-center'>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSegvFuYaqnIATXxVTEuzcMhX70AmLuPyWnKjoe5y04hUXV4Gg/viewform?embedded=true" width="640" height="850" frameborder="0" marginheight="0" marginwidth="0">Yükleniyor…</iframe>
        </div>
    );
}

export default Forms;
