import React, { HtmlHTMLAttributes } from 'react';
interface SidebarStepType extends HtmlHTMLAttributes<HTMLDivElement> {
    stepNumber: string;
    stepLabel: string;
    isActive?: boolean;
    textClassName?: string;
}
function SidebarStep({ stepNumber, stepLabel, isActive, textClassName }: SidebarStepType) {
  return (
    <div className={`flex items-center space-x-2 p-2 rounded-md ${isActive ? 'bg-indigo text-white' : 'text-gray-400'}`}>
      <div className={`w-6 h-6 flex items-center justify-center rounded-full ${isActive ? 'bg-white text-indigo' : 'bg-gray-700'}`}>
        {stepNumber}
      </div>
      <span className={`text-sm ${textClassName}`}>{stepLabel}</span>
    </div>
  );
}

export default SidebarStep;
