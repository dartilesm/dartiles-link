import { Button, Chip, Link as NextUILink } from "@nextui-org/react";
import clsx from "clsx";
import { usePlausible } from "next-plausible";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { IoStar } from "react-icons/io5";

function Link({ text, slug, primary, highlight, Icon }) {
  const [origin, setOrigin] = useState(null);
  const plausible = usePlausible();
  const { resolvedTheme } = useTheme();

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
      // <NextUILink
      //   href={`${origin}/${slug}`}
      //   target='_blank'
      //   css={{ width: "100%", maxWidth: primary ? 35 : 400, color: "$black" }}
      //   onClick={() => plausible('buttonClick', { props: { ref: slug } })}
      // >
      //   {primary ? (
      //     <IconContext.Provider value={{ size: "1.4rem", color: theme.colors.text.value }}>
      //       <Icon />
      //     </IconContext.Provider>
      //   ) : (
      //     <StyledCard
      //       clickable
      //       hoverable
      //       bordered={!highlight}
      //       shadow={false}
      //       css={{
      //         display: "flex",
      //         flexDirection: "row",
      //         padding: "$sm $lg",
      //         alignItems: "center",
      //         gap: 16,
      //         backgroundColor: highlight ? '$primaryCard' : '$cardBackground'
      //       }}
      //     >
      //       <Container
      //         css={{
      //           display: "flex",
      //           flexDirection: "row",
      //           alignItems: "center",
      //           gap: 16,
      //           padding: "$0",
      //           flexWrap: "nowrap",
      //         }}
      //       >
      //         <Container
      //           css={{
      //             width: "1.6rem",
      //             height: "1.6rem",
      //             display: "inline-flex",
      //             margin: "$0",
      //             padding: "$0",
      //             justifyContent: "center",
      //             alignItems: "center",
      //           }}
      //         >
      //           <IconContext.Provider
      //             value={{ color: theme.colors.text.value, style: { width: "1.6rem" } }}
      //           >
      //             <Icon />
      //           </IconContext.Provider>
      //         </Container>
      //         <Text css={{ fontWeight: "$semibold", margin: "$0" }}>{text}</Text>
      //       </Container>
      //       <IconContext.Provider value={{ color: theme.colors.text.value }}>
      //         <FiExternalLink />
      //       </IconContext.Provider>
      //     </StyledCard>
      //   )}
      // </NextUILink>
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
