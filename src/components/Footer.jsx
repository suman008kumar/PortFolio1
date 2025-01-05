import React from 'react'
import { FaLinkedinIn, FaTelegramPlane,} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
function Footer() {
  return (
    <>
    <hr />
    <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
                <FaLinkedinIn size={24}/>
                <FaTelegramPlane size={24}/>
                <MdEmail size={24}/>
                </div>
                <div className="mt-8 border-t border-gray-300 pt-8 flex flex-col items-center text-center space-y-2">
  <p className="text-sm text-gray-600 font-medium">
    &copy; 2024 Your Company. All rights reserved.
  </p>
  <p className="text-sm text-gray-500">
    <span className="font-semibold ">Developer:</span> SUMAN
  </p>
</div>

        </div>
        </div>
    </footer>
    </>
  );
}

export default Footer
