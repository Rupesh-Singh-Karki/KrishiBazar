"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import hero from '@/app/_components/assets/sign-in-background.jpeg';
import signimg from '@/app/_components/assets/sign-in.jpeg';

export default function Component() {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn().catch((error) => console.error("Sign-in error:", error));
  };

  const handleSignOut = () => {
    signOut().catch((error) => console.error("Sign-out error:", error));
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Image
        src={hero}
        alt="img"
        placeholder='blur'
        className='absolute top-0 left-0 w-full h-full saturate-125 blur-md'
        layout="fill"
        quality={75}
        objectFit="cover"
        objectPosition="center"
        style={{ backgroundImage: 'linear-gradient(rgba(8,8,37,0.85),rgba(0,15,80,0.675))' }}
      />

      <div className="relative z-10 bg-white h-4/5 w-3/5 lg:rounded-xl shadow-lg flex flex-col lg:flex-row items-center justify-center lg:items-stretch lg:justify-start
                      sm:h-3/5 sm:w-3/5 sm:rounded-lg sm:flex-col sm:h-4/5">
        {/* Image on the left side (hidden on small screens) */}
        <div className="relative w-full lg:w-2/5 h-48 lg:h-full hidden lg:block">
          <Image
            src={signimg}
            alt="simg"
            placeholder="blur"
            className="absolute inset-0 h-full w-full object-fill rounded-t-xl lg:rounded-l-xl lg:rounded-t-none"
          />
        </div>
        {/* Right side content */}
        <div className="w-full lg:w-3/5 p-8 flex items-center justify-center sm:p-4">
          <div className="lg:w-full sm:w-4/5 sm:px-4 sm:py-3 flex flex-col justify-center">
            {session ? (
              <div className="text-center">
                <p className="text-gray-700 sm:text-sm">Signed in as {session.user.email}</p>
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 mt-4 lg:mt-6 sm:mt-2 sm:text-sm sm:py-2 sm:px-3"
                  aria-label="Sign out"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold text-gray-700 mb-4 lg:mb-6 sm:mb-3 sm:text-2xl text-center pr-3">Create Account</h2>
                <form>
                <div className="mb-4 sm:mb-3">
                    <label className="block font-bold text-gray-600 mb-2 sm:text-sm" htmlFor="email">
                      Name
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-2 py-2 sm:py-1 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-sm"
                      placeholder="Enter your Name"
                    />
                </div>
                <div className="mb-4 sm:mb-3">
                    <label className="block font-bold text-gray-600 mb-2 sm:text-sm" htmlFor="email">
                      Phone Number
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-2 py-2 sm:py-1 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-sm"
                      placeholder="Enter your Phone Number"
                    />
                </div>
                  <div className="mb-4 sm:mb-3">
                    <label className="block font-bold text-gray-600 mb-2 sm:text-sm" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-2 py-2 sm:py-1 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-6 sm:mb-4">
                    <label className="block font-bold text-gray-600 mb-2 sm:text-sm" htmlFor="password">
                      Enter Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-2 py-2 sm:py-1 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-sm"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="mb-6 sm:mb-4">
                    <label className="block font-bold text-gray-600 mb-2 sm:text-sm" htmlFor="password">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-2 py-2 sm:py-1 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-sm"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="text-center">
                  <a
                      className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-sm sm:py-2 sm:px-3"
                      aria-label="Sign in"
                      href="/signup2"
                  >
                      Next
                  </a>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
