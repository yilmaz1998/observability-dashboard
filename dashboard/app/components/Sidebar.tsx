'use client'

import React from 'react'
import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5";
import Link from "next/link"


export default function Sidebar() {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  const toggleSidebar = () => {
    setSideBarOpen(!sideBarOpen)
  }

  return (
    <div className="p-4 overflow-x-hidden">
      <button onClick={toggleSidebar}>
        <FiMenu className="text-2xl hover:text-gray-200" />
      </button>

      {sideBarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black z-50
      transform ${sideBarOpen ? "translate-x-0" : "translate-x-full"}
      transition-transform duration-500`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={toggleSidebar}
        >
        <IoClose className="text-3xl hover:text-gray-300" />
        </button>

        <nav className="mt-16 px-8 space-y-4 text-lg">
        <Link
            href="/"
            onClick={toggleSidebar}
            className="block hover:text-gray-300"
          >
            Dashboard
          </Link>

          <Link
            href="/logs"
            onClick={toggleSidebar}
            className="block hover:text-gray-300"
          >
            Logs
          </Link>

          <Link
            href="/events"
            onClick={toggleSidebar}
            className="block hover:text-gray-300"
          >
            Events
          </Link>
        </nav>
      </div>
    </div>
  )
}