import { useState, useCallback, Fragment, useEffect } from 'react'
import SearchBar from '../components/Header/SearchBar'
import HeaderBtn from '../components/Header/HeaderBtn'
import CloseBtn from '../components/CloseBtn'
import NotificationBox from './NotificationBox'
import TVIcon from '../assets/images/svg/tv.svg'
import BellOn from '../assets/images/svg/bell.svg'
import User from '../assets/images/svg/user.svg'

import { notifications } from '../libs/dummies'

const Header = () => {
  const [searchText, setSearchText] = useState('')
  const [isExpanded, setExpanded] = useState(false)
  const onChangeHandle = useCallback((text: string) => {
    setSearchText(text)
  }, [])
  const onClickHandle = (e: string) => {
    switch (e) {
      case 'notification':
        setExpanded(true)
        break
      default:
        console.log('Header button clicked')
    }
  }

  useEffect(() => {
    console.log(window.location.href)
  }, [])

  return (
    <Fragment>
      <div id="header" className="w-full py-4 grid grid-cols-12 gap-2">
        <SearchBar
          text={searchText}
          onChangeText={onChangeHandle}
          className="md:col-start-1 md:col-span-4 col-start-1 col-span-12 rounded-full bg-gray-800 text-gray-300 flex hover:shadow-md hover:shadow-sky-500/40 box-border pr-2"
        />
        <div className="md:col-end-13 md:col-span-4 col-end-13 col-span-12 flex flex-row-reverse">
          <HeaderBtn
            className="bg-transparent"
            icon={User}
            alt="notification-btn"
            onClick={() => {
              onClickHandle('live')
            }}
          />
          <HeaderBtn
            icon={TVIcon}
            alt="notification-btn"
            onClick={() => {
              onClickHandle('live')
            }}
          />
          <HeaderBtn
            icon={BellOn}
            alt="notification-btn"
            notifications={notifications.length}
            onClick={() => {
              onClickHandle('notification')
            }}
          />
        </div>
      </div>
      {isExpanded && (
        <div
          id="notifications"
          className="absolute right-2 top-2 md:w-1/4 sm:w-1/2 w-4/6 md:h-3/6 sm:h-4/6 h-5/6 bg-gray-800/80 rounded-lg p-2 scroll-y-auto text-right shadow-md shadow-sky-800"
        >
          <CloseBtn
            onClick={() => {
              setExpanded(false)
            }}
          />
          <NotificationBox notifications={notifications} />
        </div>
      )}
    </Fragment>
  )
}

export default Header
