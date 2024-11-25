import React from 'react'

const Contact = () => {
  return (
    <>
     <span id="contact"></span>
    <div className='max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md mb-4 mt-4'>
      <h1 className='text-3xl text-center text-primary font-bold mb-6'>Contact Us</h1>
      <form action='https://formspree.io/f/xbljyrqd' method='POST'>
        <div className='mb-4'>
            <label className='block text-white text-sm font-semibold mb-2' htmlFor='username'>Your Name</label>
            <input type="text" name='username' placeholder='John Deo' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 focus:outline-none' required></input>
        </div>
        <div className='mb-4'>
            <label className='block text-white text-sm font-semibold mb-2' htmlFor='useremail'>Your Email</label>
            <input type="email" name='useremail' placeholder='john@gmail.com' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 focus:outline-none' required></input>
        </div>
        <div className='mb-4'>
            <label className='block text-white text-sm font-semibold mb-2' htmlFor='UserMeassage'>Meassage</label>
            <textarea rows='4' type="Meassage" name='UserMeassage' placeholder='Type Your Meassage here..' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 focus:outline-none' required></textarea>
        </div>
        <div className='flex justify-end'>
        <input type="submit" value="send" />
        </div>
      </form>
    </div>
    </>
  )
}

export default Contact
