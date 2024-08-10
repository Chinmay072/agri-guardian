import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white">
      <div className="max-w-[1200px] flex justify-between items-center mx-auto h-[80px]">
        <div className="flex items-center">
          <Image src={"/assets/logo.jpg"} height={60} width={80} alt="" />
          <h1 className="text-2xl font-bold text-green-700">
            Agri Guardian 360
          </h1>
        </div>
        <ul className="flex items-center">
          <li className="ml-4 font-medium">Home</li>
          <li className="ml-4 font-medium">About</li>
          <li className="ml-4 font-medium">Pages</li>
          <li className="ml-4 font-medium">Contact</li>
          <li className="ml-4 font-medium px-4 py-2 bg-green-200 rounded">
            <button>Register</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
