"use client";
import Navbar from "@/Components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Component() {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn().catch((error) => console.error("Sign-in error:", error));
  };

  const handleSignOut = () => {
    signOut().catch((error) => console.error("Sign-out error:", error));
  };

  return (
    <>
      <Navbar />
      <div
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(/bg.png)` }}
      >
        <div className="flex flex-col lg:flex-row h-3/4 lg:h-4/5 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-2/3 max-w-4xl">
          <div className="lg:w-1/2 h-1/3 lg:h-full flex items-center justify-center mb-4 lg:mb-0">
            <Image
              src="/Designer 1.svg"
              alt="Designer Image"
              width={300}
              height={300}
              className="rounded-sm w-full h-full object-contain"
              layout="intrinsic"
            />
          </div>

          <div className="lg:w-2/3 px-4 py-3 flex flex-col justify-center">
            {session ? (
              <div className="text-center">
                <p className="text-gray-700">Signed in as {session.user.email}</p>
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 mt-4 lg:mt-6"
                  aria-label="Sign out"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-gray-700 mb-4 lg:mb-6 text-center pr-3">Sign in</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-600 mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleSignIn}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      aria-label="Sign in"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
