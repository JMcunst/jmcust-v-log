import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full">
      <div className="mx-auto flex justify-between items-center p-5">
        <div className="logo">
          <Link id="logo" className="text-xl font-bold" href="/" passHref>Logo</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link id="home" className="text-gray-600 hover:text-black" href="/" passHref>Home</Link>
            </li>
            <li>
              <Link id="profile" className="text-gray-600 hover:text-black" href="/profile" passHref>Profile</Link>
            </li>
            <li>
              <Link id="skill" className="text-gray-600 hover:text-black" href="/skill" passHref>Skill</Link>
            </li>
            <li>
              <Link id="experience" className="text-gray-600 hover:text-black" href="/experience" passHref>Experience</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
