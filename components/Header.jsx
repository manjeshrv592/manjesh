import Link from 'next/link';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='absolute left-0 top-0 w-full py-5'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <Link href='/'>Logo</Link>
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
