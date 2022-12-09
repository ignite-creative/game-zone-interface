import { useState, useCallback } from 'react'
import SearchBar from '../components/Header/SearchBar'
import HeaderBtn from '../components/Header/HeaderBtn'
import TVIcon from '../assets/images/svg/tv.svg'
import BellOn from '../assets/images/svg/bell.svg'
import User from '../assets/images/svg/user.svg'
// import BellOff from '../assets/images/svg/bell-off.svg'

const Header = () => {
  const [searchText, setSearchText] = useState('')
  const onChangeHandle = useCallback((text: string) => {
    setSearchText(text)
  }, [])
  const onClickHandle = (e: string) => {
    console.log(e)
  }
  return (
    <div id="header">
      <SearchBar text={searchText} onChangeText={onChangeHandle} />
      <div className="flex flex-row-reverse">
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
          onClick={() => {
            onClickHandle('notification')
          }}
        />
      </div>
    </div>
  )
}

export default Header
