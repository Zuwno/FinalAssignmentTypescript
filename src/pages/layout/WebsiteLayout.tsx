import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Breadcrumb, Layout, Menu, theme } from 'antd';

const WebsiteLayout = () => {
    const { Header, Content, Footer, Sider } = Layout;

    type MenuItem = Required<MenuProps>['items'][number];
    const menu = [
        {
          key: 'Product',
          label: (<a href='/admin/products/add'>Add products</a>),
        },
        {
          key: '1',
          label: (<a href='/admin/'>Add products</a>),
        },
        {
          key: '1',
          label: 'Item1',
        }
      ]
    
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
      ): MenuItem {
        return {
          key,
          icon,
          children,
          label,
        } as MenuItem;
      }
      
      const items: MenuItem[] = [
       
        
      ];
      const [collapsed, setCollapsed] = useState(false);
      const {
        token: { colorBgContainer },
      } = theme.useToken();  
    return (
        <div>
            <header>
               
                <div className="banner">
                    <img src="https://picsum.photos/1920/300" alt="" />
                </div>
            </header>
            <main>
            <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
        <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
            </main>
            <footer>
                <span>Copyright ...</span>
            </footer>
        </div>
    )
}

export default WebsiteLayout