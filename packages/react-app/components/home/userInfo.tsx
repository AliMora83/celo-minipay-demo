import React from 'react'

export default function UserInfo() {
  return (
    <div className=''>
       {/* Invest */}
       <div className='flex items-center justify-between space-x-20 my-6'>
        <div className="py-5 px-10 rounded-lg text-xs bg-slate-50">
          <p className=' text-green-600'>Investment Balance</p>
          <h5 className="font-bold text-lg text-slate-700">
            ₦622,135.00
          </h5>
          <div className="flex p-1 bg-slate-200 rounded-lg items-center mt-2 text-green-600">
            <p>4.5%</p>
            <i className="fa-solid fa-arrow-up-right-dots ml-2"></i>
          </div>
        </div>

        <div className="text-xs">
          <p className='text-red-800'>Spending</p>
          <h5 className="font-bold text-lg text-slate-700">
            ₦52,249.00
          </h5>
          <div className="flex p-1 bg-red-100 rounded-lg items-center mt-2">
            <p className='text-red-800'>1.3%</p>
            <i className="fa-solid fa-arrow-trend-down ml-2 text-red-800"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
