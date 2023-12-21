import Link from 'next/link';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='absolute left-0 top-0 w-full py-5'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image
              className='md:w-12'
              src='/assets/logos/my-logo.svg'
              alt='Manjesh logo'
              width={32}
              height={32}
            />
          </Link>
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
