import { StarIcon, ExternalLinkIcon } from "@/components/icons";
import type { Link as LinkType } from "@/types/link";
import { Button, Link as NextUILink } from "@nextui-org/react";
import { Suspense } from "react";
import type { IconType } from "react-icons";

function Link({
  text,
  slug,
  primary,
  highlight,
  icon: Icon,
}: Omit<LinkType, "icon"> & { icon: IconType }) {
  if (!primary) {
    return (
      <Button
        as={NextUILink}
        isExternal
        href={`/${slug}`}
        color={highlight ? "primary" : "default"}
        className='font-medium flex flex-row justify-between text-gray-900 dark:text-gray-100'
        size='lg'
        fullWidth
        endContent={
          <span className='inline-flex flex-row gap-2 items-center'>
            {highlight && <StarIcon color='#ff8f00' />}
            <ExternalLinkIcon size={18} />
          </span>
        }
      >
        <span className='inline-flex flex-row items-center gap-4'>
          <Suspense>
            <Icon size={20} />
          </Suspense>
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
      className='font-medium dark:bg-[#1c1c1c] rounded-full'
      aria-label='text'
    >
      <Icon size={20} />
    </Button>
  );
}

export default Link;
