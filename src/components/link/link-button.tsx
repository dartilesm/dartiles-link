import type { ComponentType } from "react";

import { ExternalLinkIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import type { Icon } from "@/types/icon";
import { cn } from "@/lib/utils";

const pillLinkClass =
  "h-12 w-full rounded-full px-6 font-medium flex flex-row items-center justify-between text-foreground [&_svg]:shrink-0";

interface LinkButtonProps {
  href: string;
  text: string;
  icon: ComponentType<Icon>;
  highlight?: boolean;
  primary?: boolean;
}

export function LinkButton({
  href,
  text,
  icon: Icon,
  highlight = false,
  primary = false,
}: LinkButtonProps) {
  if (primary) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={text}
        className={cn(
          buttonVariants({ variant: "secondary", size: "icon" }),
          "rounded-full bg-[#1c1c1c] text-foreground hover:bg-[#1c1c1c]/90 size-10",
        )}
      >
        <Icon size={20} className="size-5 shrink-0" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({
          variant: highlight ? "default" : "secondary",
          size: "lg",
        }),
        pillLinkClass,
        !highlight && "bg-[#1c1c1c] hover:bg-[#1c1c1c]/90",
      )}
    >
      <span className="inline-flex flex-row items-center gap-4">
        <Icon size={20} className="size-5 shrink-0" />
        {text}
      </span>
      <span className="inline-flex flex-row items-center gap-2">
        <ExternalLinkIcon size={18} className="size-[18px] shrink-0" />
      </span>
    </a>
  );
}
