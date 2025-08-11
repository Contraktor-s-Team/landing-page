import React from 'react'

function SectionHeader({subText, text, styledText}) {
  return (
    <div className='font-inter font-medium text-center'>
        <p className="text-xs text-neu-norm-3 tracking-[10px] uppercase">{subText}</p>
        <h2 className="text-[28px] sm:text-[34px] font-manrope font-semibold">{text} <span className="text-pri-norm-3">{styledText}</span></h2>
    </div>
  )
}

export default SectionHeader