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

enum SelectedTabs {
    home = 'home',
    search = 'search'
}


const Layout: React.FC<LayoutProps> = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedTab, setSelectedTab] = useState<SelectedTabs>(SelectedTabs.home)

    const items: MenuItem[] = [
        getItem(<Link to={'/'}>Home</Link>, SelectedTabs.home, <PieChartOutlined/>),
        getItem(<Link to={'/searchByKey'}>Search by key</Link>, SelectedTabs.search, <DesktopOutlined/>),
    ];

    function onSelectedTab(e: any) {
        setSelectedTab(e.key)
    }

    return (
        <MainLayout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical"/>
                <Menu theme="dark" selectedKeys={[selectedTab]} onClick={onSelectedTab} mode="inline"
                      items={items}/>
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