"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/bg.png)' }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
        {session ? (
          <div className="text-center">
            <p className="text-gray-700 mb-4">Signed in as {session.user.email}</p>
            <button 
              onClick={() => signOut()} 
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Sign in</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-center">
                <button 
                  type="button"
                  onClick={() => signIn()}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
