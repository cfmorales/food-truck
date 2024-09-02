import React, {ReactNode, useState} from 'react';
import styles from './Layout.module.scss';
import {Layout as MainLayout, Menu} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,

} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Link} from "react-router-dom";

const {Content, Sider} = MainLayout;
type MenuItem = Required<MenuProps>['items'][number];

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

interface LayoutProps {
    children: ReactNode;
}

const items: MenuItem[] = [
    getItem(<Link to={'/'}>Home</Link>, '1', <PieChartOutlined/>),
    getItem(<Link to={'/searchByKey'}>Search by key</Link>, '2', <DesktopOutlined/>),
];
const Layout: React.FC<LayoutProps> = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <MainLayout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
            </Sider>
            <MainLayout>
                <Content style={{margin: '0 16px'}}>
                    <div
                        className={styles.layout}
                    >
                        {children}
                    </div>
                </Content>
            </MainLayout>
        </MainLayout>
    );
};

export default Layout;