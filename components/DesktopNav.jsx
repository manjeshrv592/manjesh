import Link from 'next/link';
import { Button } from '@/components/ui/button';

const DesktopNav = () => {
  return (
    <nav className='hidden lg:block'>
      <ul className='flex items-center gap-16'>
        <li>
          <Link
            className='relative text-mj-grey-300 after:absolute after:bottom-0 after:left-[50%] after:inline-block after:h-[6px] after:w-[6px] after:translate-x-[-50%] after:translate-y-0 after:rounded-full after:bg-current after:opacity-0 after:duration-300 after:content-[""] hover:after:translate-y-2 hover:after:opacity-100'
            href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link
            className='relative text-mj-grey-300 after:absolute
              after:bottom-0 after:left-[50%] after:inline-block after:h-[6px] after:w-[6px] after:translate-x-[-50%] after:translate-y-0 after:rounded-full after:bg-current after:opacity-0 after:duration-300 after:content-[""] hover:after:translate-y-2 hover:after:opacity-100'
            href='/projects'>
            My Projects
          </Link>
        </li>
        <li>
          <Link
            className='relative text-mj-grey-300 after:absolute
              after:bottom-0 after:left-[50%] after:inline-block after:h-[6px] after:w-[6px] after:translate-x-[-50%] after:translate-y-0 after:rounded-full after:bg-current after:opacity-0 after:duration-300 after:content-[""] hover:after:translate-y-2 hover:after:opacity-100'
            href='/projects'>
            Blog
          </Link>
        </li>
        <li>
          <Link
            className='relative text-mj-grey-300 after:absolute
              after:bottom-0 after:left-[50%] after:inline-block after:h-[6px] after:w-[6px] after:translate-x-[-50%] after:translate-y-0 after:rounded-full after:bg-current after:opacity-0 after:duration-300 after:content-[""] hover:after:translate-y-2 hover:after:opacity-100'
            href='/contact'>
            Contact Me
          </Link>
        </li>
        <li>
          <Button className='btn btn-warning btn-pseudo btn-sm'>
            Free Resources
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
