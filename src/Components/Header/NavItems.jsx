const navLinks = [
  { label: "Shop", href: "#" },
  { label: "On Sale", href: "#" },
  { label: "New Arrivals", href: "#" },
  { label: "Brands", href: "#" },
];

const defaultClass = "hover:text-gray-500 transition-colors";

const NavItems = () => {
  return (
    <>
      {navLinks.map((i, index) => (
        <a key={index} href={i.href} className={defaultClass}>
          {i.label}
        </a>
      ))}
    </>
  );
};

export default NavItems;
