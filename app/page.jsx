import React from 'react'
import Image from 'next/image'
const Signup = () => {
  return (
    <div className='w-[100vw] h-[100%] flex flex-col  py-[80px] px-[32px] md:px-[160px]'>
      <div className='flex justify-center items-center mb-[32px]'>
        <img src='/academy.jpg' alt='IB ACADEMY' width={150} height={150} />
      </div>

      <div className='w-[100%] h-[60px] pl-6 bg-blue-300 flex items-center mb-[80px] rounded-md'>
        <h3 className='text-[18px] font-bold'>Register For Our Training</h3>
      </div>

      <form>
        <div className='md:flex-row flex flex-col justify-center md:justify-between gap-[32px]'>
          <div className='w-[100% md:w-[50%] flex flex-col mb-[24px]'>
            <label htmlFor='name' className='font-bold'>
              FULL NAME
            </label>
            <input
              type='text'
              className='w-[100%] h-[36px] bg-gray-300 rounded-md mt-2 font-bold px-3'
            />
          </div>

          <div className='w-[100%] md:w-[50%] flex flex-col font-bold mb-[24px]'>
            <label htmlFor='email'>EMAIL</label>
            <input
              type='email'
              className='w-[100%] h-[36px] bg-gray-300 rounded-md mt-2 px-3'
            />
          </div>
        </div>

        <div className='w-[100%] font-bold mb-[24px]'>
          <label htmlFor='number'>WHATSAPP NUMBER</label>
          <input
            type='number'
            className='w-[100%] h-[36px] bg-gray-300 rounded-md mt-2 px-3'
          />
        </div>

        <div className='flex md:flex-row flex-col justify-center md:justify-between gap-[32px]'>
          <div className='w-[100% md:w-[50%] flex flex-col mb-[24px]'>
            <label htmlFor='name' className='font-bold'>
              STATE
            </label>
            <input
              type='text'
              className='w-[100%] h-[36px] bg-gray-300 rounded-md mt-2 font-bold px-3'
            />
          </div>

          <div className='w-[100%] md:w-[50%] flex flex-col font-bold mb-[24px]'>
            <label htmlFor='email'>CITY</label>
            <input
              type='email'
              className='w-[100%] h-[36px] bg-gray-300 rounded-md mt-2 px-3'
            />
          </div>
        </div>

        <div className='md:flex-row flex flex-col justify-between gap-[32px]'>
          <div className='flex flex-col w-[100%] md:w-[50%]'>
            <label htmlFor='course' className='mb-[8px] font-bold'>
              COURSE TYPE
            </label>
            <select className='w-[100%] bg-gray-300  px-4 h-[36px] rounded-md flex items-center'>
              <option className='bg-gray-300 h-[36px]'>
                Select Course Type
              </option>
              <option className='bg-gray-300 h-[36px]'>
                Basic beginner course - 100k(4weeks)
              </option>
              <option className='bg-gray-300 h-[36px]'>
                Advanced courses - 150k(8weeks)
              </option>
            </select>
          </div>
          <div className='w-[100%] md:w-[50%] flex flex-col mb-[24px] font-bold'>
            <label htmlFor='email'>CITY</label>
            <input
              type='email'
              className='w-[100%] h-[36px] bg-gray-300 rounded-md mt-2 px-3'
            />
          </div>
        </div>

        <div>
          <h3 className='text-[20px] font-bold mt-[24px]'>
            {' '}
            WHY DO YOU WANT TO LEARN THIS COURSE?{' '}
          </h3>
          <p className='text-gray-500'>
            The Question Is Meant To Help Us Familiarize With Your Interest And
            Specifics Skills.
          </p>
          <textarea className='w-[100%] h-[200px] py-[12px] px-3 border-black my-[12px] bg-gray-300'></textarea>
          <p className='text-gray-500'>
            Submit Your Application For Our Team To Review. Our Team Will Get
            Back To You Within 24 Hours.
          </p>
          <button className='px-[40px] py-[12px] bg-blue-400 my-[20px] rounded-lg font-bold text-white'>
            SEND
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup
