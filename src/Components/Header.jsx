import { Search } from "lucide-react";
function Header() {
  return (
    <header className="font-serif w-screen h-14  bg-red-800 flex items-center gap-6 p-8">
      <h1 className="text-3xl pb-2">Q</h1>
      <label htmlFor="search" className="border-2 border-black rounded flex">
        <Search className="text-sm p-1" />
        <input
          type="text"
          placeholder="Search"
          className=" bg-red-800 text-black w-96 placeholder:text-black focus:outline-none"
        />
      </label>
    </header>
  );
}

export default Header;
