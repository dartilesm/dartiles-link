import { Button, Link as NextUILink } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { IoStar } from "react-icons/io5";

function Link({ text, slug, primary, highlight, Icon }) {
  const [origin, setOrigin] = useState(null);

  useEffect(() => {
    setOrigin(location.origin);
  }, []);

  if (!primary)
    return (
      <Button
        as={NextUILink}
        isExternal
        href={`${origin}/${slug}`}
        color={highlight ? "primary" : "default"}
        className={`font-medium flex flex-row justify-between text-gray-900 dark:text-gray-100`}
        size="lg"
        fullWidth
        endContent={
          <span className="inline-flex flex-row gap-2 items-center">
            {highlight && <IoStar color="#ff8f00" />}
            <FiExternalLink size={18} />
          </span>
        }
      >
        <span className="inline-flex flex-row items-center gap-4">
          <Icon size={20} />
          {text}
        </span>
      </Button>
    );

  return (
    <Button
      as={NextUILink}
      isExternal
      href={`${origin}/${slug}`}
      isIconOnly
      className="font-medium dark:bg-[#1c1c1c] rounded-full"
      aria-label="text"
    >
      <Icon size={20} />
    </Button>
  );
}

export default Link;
