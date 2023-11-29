'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex lg:hidden'>
      <button
        className='flex flex-col gap-[6px] p-2 '
        onClick={() => setIsOpen(true)}>
        <span className='block h-[2px] w-6 rounded-full bg-mj-grey-400'></span>
        <span className='block h-[2px] w-6 rounded-full bg-mj-grey-400'></span>
        <span className='block h-[2px] w-6 rounded-full bg-mj-grey-400'></span>
      </button>

      <div
        className={`fixed left-0 top-0 z-10 h-full w-full bg-black/80 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={() => setIsOpen(false)}>
        <div
          className={`absolute left-[50%] top-[50%] flex h-[80%] w-[80%] translate-x-[-50%] flex-col gap-10 rounded-2xl bg-mj-grey-900 duration-1000 ${
            isOpen
              ? 'translate-y-[-50%] opacity-100'
              : 'translate-y-[-30%] opacity-0'
          }`}>
          <button
            className='relative flex h-14 w-14 flex-col gap-[6px] self-end'
            onClick={() => setIsOpen(false)}>
            <span className='absolute left-[50%] top-[50%] block h-[2px] w-6 translate-x-[-50%] translate-y-[-50%] rotate-45 rounded-full bg-mj-grey-400'></span>
            <span className='absolute left-[50%] top-[50%] block h-[2px] w-6 translate-x-[-50%] translate-y-[-50%] rotate-[-45deg] rounded-full bg-mj-grey-400'></span>
          </button>
          <nav>
            <ul className='flex flex-col items-center gap-8'>
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
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
