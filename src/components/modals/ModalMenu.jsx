import { Menu } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";

const ModalMenu = (props) => {
  let links = props.links;

  return (
    <div className="w-56 text-right fixed top-16">
      <Menu as="div" className="relative">
        <div className="menu-button">
          <Menu.Button>{props.children}</Menu.Button>
        </div>
        <Menu.Items className="bg-white rounded divide-y-2  divide-gray-300">
          {links.map((link) => (
            <Menu.Item>
              {({ active }) => (
                <Link
                  key={link}
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  to={"/" + link}
                >
                  {link}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default ModalMenu;
