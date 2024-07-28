import Link from "next/link";

export const LinkDesign = ({
  children,
  href,
}: {
  readonly children: string;
  readonly href: string;
}) => {
  return (
    <Link className="font-medium underline underline-offset-2" href={href}>
      {children}
    </Link>
  );
};
