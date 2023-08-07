'use client'

import { Tooltip } from 'antd'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar'

import { useTranslation } from '@/app/i18n/client'
import { HOST_EVENTS_MENU } from '@/mock/host-events-menu'
import { useCollapseMenuStore } from '@/stores/collapse-menu.store'

export default function MenuNav({ lng, segment }) {
  const { t } = useTranslation(lng, 'menu-nav')
  const { collapsed, setCollapsed } = useCollapseMenuStore()

  return (
    <Sidebar
      className="sider-cls"
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#fff',
        },
      }}
      collapsed={collapsed}>
      <div className="sider-cls-heading flex-center h-[72px] bg-white">
        <Menu
          menuItemStyles={{
            button: {
              '&:hover': {
                backgroundColor: '#fff',
              },
            },
          }}>
          <MenuItem onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              <div
                className={clsx('h-[50px] w-[50px] cursor-pointer rounded-[10px] bg-purple-light', {
                  'animate-fade-in': collapsed,
                  'animate-fade-out': !collapsed,
                })}>
                <p className="flex-center h-full text-xl font-semibold text-white">{t('alias')}</p>
              </div>
            ) : (
              <p
                className={clsx('cursor-pointer text-[25px] font-semibold text-persian-indigo', {
                  'animate-fade-in': !collapsed,
                  'animate-fade-out': collapsed,
                })}>
                {t('title')}
              </p>
            )}
          </MenuItem>
        </Menu>
      </div>

      <Menu
        className="pt-[10px]"
        menuItemStyles={{
          button: {
            height: '42px',
            '&:hover': {
              backgroundColor: '#fff',
            },
          },
        }}>
        {HOST_EVENTS_MENU.map((event) => (
          <MenuItem
            key={event.id}
            className="flex items-center"
            component={
              <Link
                href={event.link}
                className={clsx({
                  'pointer-events-none opacity-50': event.status === 'inactive',
                })}
              />
            }>
            {collapsed ? (
              <Tooltip title={t(event.title)} placement="right">
                <Image
                  src={segment === event.name ? event.main_src : event.sub_src}
                  alt={t(event.title)}
                  width={event.width}
                  height={event.height}
                />
              </Tooltip>
            ) : (
              <Image
                src={segment === event.name ? event.main_src : event.sub_src}
                alt={t(event.title)}
                width={event.width}
                height={event.height}
              />
            )}
            <span
              className={clsx('text-[15px]', {
                'opacity-50': segment !== event.name && event.status === 'active' && !collapsed,
                'ml-[16px] animate-fade-in': !collapsed,
                'hidden animate-fade-out': collapsed,
              })}>
              {t(event.title)}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  )
}
