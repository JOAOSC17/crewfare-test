import React from 'react'
import ChevronRight from '../../atoms/ChevronRight/ChevronRight'
import ChevronLeft from '../../atoms/ChevronLeft/ChevronLeft'
interface ChevronGroupType {
    previously?: () => void;
    foward?: () => void;
    disabledLeft?: boolean;
    disabledRight?: boolean;
}
function ChevronGroup({previously, foward, disabledLeft, disabledRight}: ChevronGroupType) {
  return (        
    <div className="flex justify-end mt-3">
        <ChevronLeft className='mr-3' onClick={previously} disabled={disabledLeft}/>
        <ChevronRight onClick={foward} disabled={disabledRight}/>
    </div>
  )
}

export default ChevronGroup