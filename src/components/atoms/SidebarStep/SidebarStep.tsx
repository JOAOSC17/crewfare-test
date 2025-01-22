import React, { HtmlHTMLAttributes } from 'react';
interface SidebarStepType extends HtmlHTMLAttributes<HTMLDivElement> {
    stepNumber: string;
    stepLabel: string;
    isActive?: boolean;
    isCompleted?: boolean;
    textClassName?: string;
}
function SidebarStep({ stepNumber, stepLabel, isActive, isCompleted, textClassName }: SidebarStepType) {
  const backgroundStep = () => {
    if(isActive && !isCompleted) {
      return 'bg-indigo text-white '
    }
    if(isCompleted) {
      return 'bg-green-300'
    }
    return 'bg-light-gray'
  }
  return (
    <div className={`flex items-center space-x-2 p-2 rounded-md ${isActive ? 'bg-light-gray text-white border-extra-thin' : 'text-gray-400'}`}>
      <div className={`w-6 h-6 flex items-center justify-center rounded-full ${backgroundStep()}`}>
      {isCompleted ? 
      <svg data-testid="completed" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3.33337 9.33333L5.48871 10.95C5.62628 11.0532 5.79839 11.0992 5.96908 11.0784C6.13977 11.0577 6.29585 10.9718 6.40471 10.8387L12 4" stroke="#141416" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      :
      stepNumber
      }
      </div>
      <span className={`text-sm ${textClassName}`}>{stepLabel}</span>
    </div>
  );
}

export default SidebarStep;
