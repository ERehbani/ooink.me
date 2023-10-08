import React from 'react'

function Footer() {
  return (
    <div className='absolute bottom-0 max-w-full w-full'>
      <div>
    <footer className="flex z-20 w-full p-4 border-t border-gray-ooink shadow items-center justify-between ">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        <span>© 2023 -</span>
        <a href="https://ooink.me/" className="hover:underline"> OOINK</a>
      </div>
      <ul className="flex items-center text-sm font-medium text-gray-ooink dark:text-gray-ooink">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 input">Privacy Policy</a>
        </li>
        <li>
          <a href="mailto:contact.tktk@proton.me" className="hover:underline">Contact</a>
        </li>
      </ul>
    </footer>
  </div> 
  </div>
  )
}

export default Footer