import React, { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const cartCount = 3; // replace with prop or state from your store

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* left: logo + categories */}
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white font-bold">E</div>
              <span className="hidden sm:inline-block font-semibold text-lg">E-Shop</span>
            </a>

            <div className="relative">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none"
                aria-expanded={categoriesOpen}
              >
                Categories
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              {/* dropdown */}
              {categoriesOpen && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50">Electronics</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50">Fashion</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50">Home & Kitchen</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50">Beauty</a>
                </div>
              )}
            </div>
          </div>

          {/* center: search */}
          <div className="flex-1 mx-4">
            <form className="w-full">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <input
                  id="search"
                  placeholder="Search products, brands and more"
                  className="w-full border border-gray-200 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
                <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full hover:bg-gray-100">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="11" cy="11" r="6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* right: actions */}
          <div className="flex items-center gap-3">
            <a href="#" className="hidden sm:inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-100">Offers</a>

            <button className="hidden sm:inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-100" aria-label="Wishlist">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.6-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"></path>
              </svg>
            </button>

            <a href="#" className="relative inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-100" aria-label="Cart">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartCount}</span>
              )}
            </a>

            <div className="hidden sm:flex items-center gap-2">
              <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100">Sign in</a>
              <a href="#" className="px-3 py-2 bg-teal-500 text-white rounded-md hover:opacity-90">Sign up</a>
            </div>

            {/* mobile menu button */}
            <button
              className="sm:hidden inline-flex items-center p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div className="sm:hidden mt-2 pb-4 border-t border-gray-100">
            <div className="px-2 space-y-2">
              <a href="#" className="block px-3 py-2 rounded-md">Categories</a>
              <a href="#" className="block px-3 py-2 rounded-md">Offers</a>
              <a href="#" className="block px-3 py-2 rounded-md">Wishlist</a>
              <a href="#" className="block px-3 py-2 rounded-md">Cart ({cartCount})</a>
              <a href="#" className="block px-3 py-2 rounded-md">Sign in / Sign up</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
