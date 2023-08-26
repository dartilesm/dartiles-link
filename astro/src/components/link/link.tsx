import { Button, Link as NextUILink } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { IoStar } from 'react-icons/io5';
import type { IconType } from 'react-icons';
import type { Link as LinkType } from '@/types/link';

function Link ({
  text, slug, primary, highlight, icon: Icon
}: Omit<LinkType, 'icon'> & { icon: IconType }) {

  if (!primary) {
    return (
      <Button
        as={NextUILink}
        isExternal
        href={`/${slug}`}
        color={highlight ? 'primary' : 'default'}
        className="font-medium flex flex-row justify-between text-gray-900 dark:text-gray-100"
        size="lg"
        fullWidth
        endContent={(
          <span className="inline-flex flex-row gap-2 items-center">
            {highlight && <IoStar color="#ff8f00" />}
            <FiExternalLink size={18} />
          </span>
        )}
      >
        <span className="inline-flex flex-row items-center gap-4">
          <Icon size={20} />
          {text}
        </span>
      </Button>
    );
  }

  return (
    <Button
      as={NextUILink}
      isExternal
      href={`/${slug}`}
      isIconOnly
      className="font-medium dark:bg-[#1c1c1c] rounded-full"
      aria-label="text"
    >
      <Icon size={20} />
    </Button>
  );
}

export default Link;
