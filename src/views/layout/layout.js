import React from "react";
import { Menu } from "antd";
import { useDispatch } from "react-redux";
import { authLogOut } from "../../redux/slices/auth";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
function Layout({ children }) {
  const dispatch = useDispatch();
  const LogOutFunc = () => {
    dispatch(authLogOut());
  };
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <a href="">Home</a>
        </Menu.Item>
        <SubMenu title={<span>Blogs</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay" onClick={LogOutFunc}>
          Log out
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
}

export default Layout;
