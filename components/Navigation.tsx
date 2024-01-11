import React from "react";

type Props = {
  activeItem: number;
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Marketplace",
    href: "/marketplace",
  },
  {
    title: "About Us",
    href: "/about",
  },

  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Policy",
    href: "/policy",
  },
];

const Navigation = ({ activeItem }: Props) => {
  return (
    <div className="block md:flex">
      {navItems.map((item, index) => (
        <div key={item.title}>
          <h5
            className={`inline-block md:px-4 xl:px-8 py-5 md:py-0 text-[18px] font-[500] font-Inter ${
              activeItem === index && "text-[#ffb13d]"
            }`}
          >
            {item.title}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
