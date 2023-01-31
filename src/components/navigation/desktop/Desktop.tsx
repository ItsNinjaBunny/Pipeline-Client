import Link from 'next/link';
import { NavigationLink } from '../types';

type Props = {
  selected: string;
  links: NavigationLink[];
  className: string;
}

export const DesktopNavigation = ({ selected, links, className }: Props) => {

  return (
    <nav className={`${className} fixed h-[95%] w-28 left-6
-translate-y-1/2 top-1/2 rounded-md justify-center items-center 
bg-slate-200/90`}>
      <ul className={`flex flex-col h-full justify-evenly w-full`}>
        {
          links.map((link) => {
            return (
              <li key={link.name}>
                <Link className='relative duration-200 flex flex-col items-center justify-center text-gray-500 hover:text-black' href={link.href}>
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}