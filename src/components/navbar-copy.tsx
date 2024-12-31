import Link from "next/link";

const menuItems: { label: string; href: string }[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <header className="bg-background/95 p-4 shadow-md">
      <nav className="flex items-center justify-between gap-5 font-semibold">
        <Link href="/" className="mr-auto">
          {/* <BrandLogo /> */}
          Next.js Starter
        </Link>

        {menuItems.map((item) => (
          <Link className="text-lg" key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
