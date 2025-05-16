import React from 'react'

const Footer: React.FC = () => (
  <footer className="w-full absolute bottom-4 flex justify-center">
    {/* shrink-to-fit box */}
    <div className="w-auto">
      {/* line that matches the width of this box */}
      <hr className="border-t border-gray-300" />

      {/* links + trademark all together */}
      <div className="flex items-center justify-center space-x-6 pt-2 text-xs text-gray-400">
        <a href="#" className="hover:text-gray-500">TOS</a>
        <a href="#" className="hover:text-gray-500">Policies</a>
        <a href="#" className="hover:text-gray-500">Returns</a>
        <a href="#" className="hover:text-gray-500">Testimonials</a>
        <a href="#" className="hover:text-gray-500">Why?</a>
        <span className="whitespace-nowrap">rarepackage regd. trademark</span>
      </div>
    </div>
  </footer>
)

export default Footer
