import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-tr from-sky-950 via-gray-900 antialiased to-sky-950'>
      <div className='ml-24 mr-24 grid grid-cols-3 gap-8 justify-items-center bg-[#141C33] min-h-96 rounded-xl'>
        <div className='bg-green-400 w-full text-center m-12'>
          <h2 className='text-left pl-8'>Logo</h2>
          <p className='text-left p-8'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error consectetur debitis incidunt illum veniam deserunt et. Doloribus, minus tempore qui molestiae modi voluptatibus, eius nemo provident laudantium eveniet ullam quae?
          </p>
        </div>
        <div className='w-full text-center m-12'>
        <h2 className='text-left pl-8'>test1</h2>
          <p className='text-left p-8'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error consectetur debitis incidunt illum veniam deserunt et. Doloribus, minus tempore qui molestiae modi voluptatibus, eius nemo provident laudantium eveniet ullam quae?
          </p>
        </div>
        <div className='w-full text-center m-12'>
        <h2 className='text-left pl-8'>test2</h2>
          <p className='text-left p-8'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error consectetur debitis incidunt illum veniam deserunt et. Doloribus, minus tempore qui molestiae modi voluptatibus, eius nemo provident laudantium eveniet ullam quae?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
