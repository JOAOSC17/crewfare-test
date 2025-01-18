import React from 'react';
import icon from './icon.svg'
function BannerUploader() {
  return (
    <div className="bg-zinc-600 p-6 rounded-md flex items-center justify-center">
      <div className="text-center">
        <img src={icon} alt=''/>
        <p className="mt-2">Click or drop image</p>
      </div>
    </div>
  );
}

export default BannerUploader;
