import { Menu } from "antd";
import Link from "next/link";
import AboutMessage from "./AboutMessage";

const Menubar = () => {

  const menuItems = [
    {
      key: "1",
      text: "همه محصولات",
      href: "/products",
    },
    {
      key: "2",
      text: "موبایل",
      href: "/products/mobile",
    },
    {
      key: "3",
      text: "تبلت",
      onClick: () => AboutMessage({ message: "کاربر گرامی این بخش به زودی راه اندازی می شود" }),
    },
    {
      key: "4",
      text: "ساعت هوشمند",
      href: "/products/watch",
    },
    {
      key: "5",
      text: "لپ تاپ",
      href: "/products/laptop",
    },
    {
      key: "6",
      text: "کامپیوتر",
      onClick: () => AboutMessage({ message: "کاربر گرامی این بخش به زودی راه اندازی می شود" }),
    },
    {
      key: "7",
      text: "لوازم جانبی",
      onClick: () => AboutMessage({ message: "کاربر گرامی این بخش به زودی راه اندازی می شود" }),
    },
    {
      key: "8",
      text: "تماس با ما",
      onClick: () => AboutMessage({ message: "کاربر گرامی این بخش به زودی راه اندازی می شود" }),
    },
  ];

  return (
    <Menu
      direction="rtl"
      className="bg-[#1A1A1A] pr-8"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
 
    >
      {menuItems.map((item) => (
        <Menu.Item key={item.key} className="text-[#C3C4C5] hover:!text-[#FBCB07]">
          {item.href ? (
            <Link href={item.href}>{item.text}</Link>
          ) : (
            <span onClick={item.onClick}>{item.text}</span>
          )}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Menubar;