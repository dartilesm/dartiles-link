import * as FaIcons from 'react-icons/fa';
import * as FeatherIcons from 'react-icons/fi';
import * as GrommetIcons from 'react-icons/gr';
import * as Ionic4Icons from 'react-icons/io';
import * as Ionic5Icons from 'react-icons/io5';
import * as SimpleIcons from 'react-icons/si';
import Link from './link.tsx';
import { Link as LinkType } from '../../types/link.ts';

const Icons = {
  ...SimpleIcons,
  ...FaIcons,
  ...Ionic5Icons,
  ...Ionic4Icons,
  ...GrommetIcons,
  ...FeatherIcons
};

function LinkList ({ links }: { links: LinkType[] }) {
  return (
    <div className="flex flex-col max-w-sm w-full p-4 gap-4">
      {links.some(link => !link.primary) && (
        <div className="flex flex-col gap-3 w-full">
          {links
            .filter(link => !link.primary)
            .map(link => (
              <Link {...link} key={link.slug} icon={Icons[link.icon]} />
            ))}
        </div>
      )}
      {links.some(link => link.primary) && (
        <div className="flex flex-row w-full justify-center gap-2">
          {links
            .filter(link => link.primary)
            .map(link => (
              <Link {...link} key={link.slug} icon={Icons[link.icon]} />
            ))}
        </div>
      )}
    </div>
  );
}

export default LinkList;
