import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="p-3">
      <ul className="font-700 text-md md:text-2xl text-center flex justify-evenly align-middle">
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/">hire me</Link>
        </li>
        <li>
          <Link href="/">blog</Link>
        </li>
        <li>
          <Link href="/">projects</Link>
        </li>
        <li>
          <button className="bg-slate-700 text-white rounded-lg px-2 py-1 inline-flex gap-1 align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
            resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
