import React from 'react';
import icon from './icon.svg'
function BannerUploader() {
  return (
    <div className="bg-zinc-800 p-6 rounded-md flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <img src={icon} alt=''/>
        <p className="mt-2">Click or drop image</p>
      </div>
    </div>
  );
}

export default BannerUploader;
