import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
function BannerUploader() {
  const [selectImage, setSelectedImage] = useState<string | undefined>(undefined)
  return (
    <div className={`bg-zinc-800 ${selectImage? '' : 'p-6'} rounded-md flex items-center justify-center`}>
      <label htmlFor='uploadFile' className="w-full flex flex-col items-center justify-center cursor-pointer">
        {!selectImage && (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path opacity="0.4" d="M58.6671 50.6663V42.6663C58.6671 38.248 55.0854 34.6663 50.6671 34.6663H48.0004C46.3217 34.6663 44.741 35.4566 43.7337 36.7996L40.5337 41.0663C38.5193 43.7522 35.3578 45.3329 32.0004 45.3329C28.643 45.3329 25.4815 43.7522 23.4671 41.0663L20.2671 36.7996C19.2598 35.4566 17.6791 34.6663 16.0004 34.6663H13.3337C8.91546 34.6663 5.33374 38.248 5.33374 42.6663V50.6663C5.33374 55.0845 8.91546 58.6663 13.3337 58.6663H50.6671C55.0854 58.6663 58.6671 55.0845 58.6671 50.6663Z" fill="#4FF6B1"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.3332 34.6668H15.9998C17.6785 34.6668 19.2593 35.4572 20.2665 36.8002L23.4665 41.0668C25.481 43.7528 28.6424 45.3335 31.9998 45.3335C35.3573 45.3335 38.5187 43.7528 40.5332 41.0668L43.7332 36.8002C44.7404 35.4572 46.3211 34.6668 47.9998 34.6668H50.6665C51.6015 34.6668 52.4991 34.8272 53.3332 35.122V16.0002C53.3332 10.1091 48.5575 5.3335 42.6665 5.3335H21.3332C15.4421 5.3335 10.6665 10.1091 10.6665 16.0002V35.122C11.5006 34.8272 12.3981 34.6668 13.3332 34.6668ZM29.6433 18.5186C29.7565 18.4054 29.8759 18.302 30.0003 18.2085V29.3332C30.0003 30.4377 30.8958 31.3332 32.0003 31.3332C33.1049 31.3332 34.0003 30.4377 34.0003 29.3332V18.2085C34.1247 18.302 34.2441 18.4054 34.3573 18.5186L38.5861 22.7474C39.3672 23.5284 40.6335 23.5284 41.4145 22.7474C42.1956 21.9663 42.1956 20.7 41.4145 19.919L37.1858 15.6902C34.3219 12.8264 29.6787 12.8264 26.8149 15.6902L22.5861 19.919C21.8051 20.7 21.8051 21.9663 22.5861 22.7474C23.3672 23.5284 24.6335 23.5284 25.4145 22.7474L29.6433 18.5186Z" fill="#4FF6B1"/>
            </svg>
            <p className="mt-2">Click or drop image</p>
          </>
        )}
      {selectImage && <img src={selectImage} alt="Uploaded preview" className="rounded-md h-full w-full z-10" />}
      </label>
      <Input 
        id='uploadFile' 
        accept="image/*" 
        hidden data-testid="download"
        onChange={(e) => {
          const file = e.target.files?.[0]
          setSelectedImage(file ? URL.createObjectURL(file) :undefined)
        }}
        type='file'  />
    </div>
  );
}

export default BannerUploader;
