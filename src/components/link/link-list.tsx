import * as Icons from "@/components/icons";
import Link from "@/components/link/link";
import links from "@/public/links.json";

function LinkList() {
  return (
    <div className='flex flex-col max-w-sm w-full p-4 gap-4'>
      {links.some((link) => !link.primary) && (
        <div className='flex flex-col gap-3 w-full'>
          {links
            .filter((link) => !link.primary)
            .map((link) => (
              <Link {...link} key={link.slug} icon={Icons[link.icon]} />
            ))}
        </div>
      )}
      {links.some((link) => link.primary) && (
        <div className='flex flex-row w-full justify-center gap-2'>
          {links
            .filter((link) => link.primary)
            .map((link) => (
              <Link {...link} key={link.slug} icon={Icons[link.icon]} />
            ))}
        </div>
      )}
    </div>
  );
}

export default LinkList;
