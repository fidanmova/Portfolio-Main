import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen  bg-[#0a192f] flex justify-center items-center p-4 mt-12'>
      {/* copy  Form Endpoint Codes from getform.io and paste it inside for action, and make method POST in the form */}
          <form method='POST' action="https://getform.io/f/ab7251eb-9015-446b-8084-70a284162fd5" className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                  <p className='text-gray-300 py-4'> // Submit the form below or shoot me an email</p>
              </div>
              <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Your Name' name="name" />
              <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Your Email' name="email" />
              <textarea className='bg-[#ccd6f6] p-2' name="message" placeholder='Message' rows="10"></textarea>
              <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-6 py-2 my-8 mx-auto flex items-center'>Submit</button>
          </form>
    </div>
  )
}

export default Contact