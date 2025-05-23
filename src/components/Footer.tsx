import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Footer: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <footer className="w-full absolute bottom-4 flex justify-center">
      <div className="w-auto relative overflow-visible text-xs text-gray-400">
        <hr className="border-t border-gray-300 mb-2" />

        {/* 🏷 trademark + burger on one line */}
        <div className="flex sm:hidden items-center justify-center space-x-3 whitespace-nowrap px-4">
          <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
          <span>rarepackage regd. trademark</span>
        </div>

        {/* ⚙️ Mobile menu: slide up */}
        {open && (
          <nav
            className="
              sm:hidden
              absolute
              bottom-full    /* ⚠️ anchor above the footer line */
              left-0
              w-full
              bg-white
              shadow-lg
              z-50
              flex flex-col space-y-2
              p-4
            "
          >
            <a href="#" className="hover:text-gray-500">TOS</a>
            <a href="#" className="hover:text-gray-500">Policies</a>
            <a href="#" className="hover:text-gray-500">Returns</a>
            <a href="#" className="hover:text-gray-500">Testimonials</a>
            <a href="#" className="hover:text-gray-500">Why?</a>
          </nav>
        )}

        {/* 💻 Desktop links */}
        <div className="hidden sm:flex justify-between items-center w-[58.31rem] h-[1.75rem] pt-2">
          {/* Left list */}
          <div className="flex items-center gap-[2rem] w-[23rem] px-[0.75rem]  text-gray-400 font-normal leading-none text-footer">
            <a href="#" className="hover:text-[#D0D0D0]">TOS</a>
            <a href="#" className="hover:text-[#D0D0D0]">Policies</a>
            <a href="#" className="hover:text-[#D0D0D0]">Returns</a>
            <a href="#" className="hover:text-[#D0D0D0]">Testimonials</a>
            <a href="#" className="hover:text-[#D0D0D0]">Why?</a>
          </div>

          {/* Right trademark */}
          <div className="w-[10.375rem] text-[0.75rem] text-gray-400 text-right font-normal leading-none font-['Inter']">
            rarepackage regd. trademark
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
