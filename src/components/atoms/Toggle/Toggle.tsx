import {useState } from "react";


const Toggle = () => {
    const [isChecked, setIsChecked] = useState(false)
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
    }
  
    return (
      <>
        <label className='relative inline-flex cursor-pointer select-none items-center'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='sr-only'
            />
            <div
              className={`box block h-8 w-14 rounded-full ${
                isChecked ? 'bg-primary' : 'bg-pokecard'
              }`}
            ></div>
            <div
              className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                isChecked ? 'translate-x-full' : ''
              }`}
            ></div>
        </label>
      </>
    )
  }
  

export default Toggle;