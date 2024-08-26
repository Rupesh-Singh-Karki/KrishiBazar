import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-green-700 flex items-center h-12 px-4">

      {/* Centered Title */}
      <div className="='text-white px-4 py-2 rounded  hover:shadow-xl hover:bg-green-900 transition-shadow duration-300 w-38 mr-4 text-center">
        Krishi Bazar
      </div>


      {/* Left Side Links */}
      <div className="flex ml-4 space-x-4 mr-auto ">
        <Link className='text-white px-4 py-2 rounded  hover:shadow-xl hover:bg-green-900 transition-shadow duration-300' href={"/"}>Home</Link>
        <Link className='text-white px-4 py-2 rounded  hover:shadow-xl  hover:bg-green-900 transition-shadow duration-300' href={"/"}>Working</Link>
        <Link className='text-white px-4 py-2 rounded  hover:shadow-xl  hover:bg-green-900 transition-shadow duration-300' href={"/"}>Buy/Sell</Link>
        <Link className='text-white px-4 py-2 rounded  hover:shadow-xl  hover:bg-green-900 transition-shadow duration-300' href={"/"}>Contract</Link>
      </div>


      {/* Right Side Links */}
      <div className="flex space-x-4 ml-auto">
        <Link className='text-white px-4 py-2 rounded  hover:shadow-xl  hover:bg-green-900 transition-shadow duration-300' href={"/"}>News</Link>
        <Link className='text-white px-4 py-2 rounded  hover:shadow-xl  hover:bg-green-900 transition-shadow duration-300' href={"/"}>Charts</Link>
        <Link className='text-white px-4 py-2 rounded  hover:shadow-xl  hover:bg-green-900 transition-shadow duration-300' href={"/"}>Chatroom</Link>
      </div>

      {/* Icon */}
      <div className="w-24 h-24 text-center ml-4 bg-cover">
        Icon
      </div>
    </div>
  );
}
