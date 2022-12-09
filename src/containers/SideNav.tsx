import { useState } from 'react'
import NavBtn from '../components/SideHeaders/NavBtn'
import HomeIcon from '../assets/images/svg/home.svg'
import GiftIcon from '../assets/images/svg/gift.svg'
import UsersIcon from '../assets/images/svg/users.svg'
import CameraIcon from '../assets/images/svg/camera.svg'
import AwardIcon from '../assets/images/svg/award.svg'
import GameIcon from '../assets/images/svg/grid.svg'
import CartIcon from '../assets/images/svg/shopping-cart.svg'

const SideHeader = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const onClickHandler = (page: string) => {
    setCurrentPage(page)
  }

  return (
    <div id="side-nav">
      <NavBtn
        icon={HomeIcon}
        alt="nav-home-btn"
        target="home"
        isActive={currentPage === 'home'}
        onClick={() => {
          onClickHandler('home')
        }}
      />
      <NavBtn
        icon={GameIcon}
        alt="nav-games-btn"
        target="games"
        isActive={currentPage === 'games'}
        onClick={() => {
          onClickHandler('games')
        }}
      />
      <NavBtn
        icon={CartIcon}
        alt="nav-market-btn"
        target="market"
        isActive={currentPage === 'market'}
        onClick={() => {
          onClickHandler('market')
        }}
      />
      <NavBtn
        icon={CameraIcon}
        alt="nav-highlights-btn"
        target="highlights"
        isActive={currentPage === 'highlights'}
        onClick={() => {
          onClickHandler('highlights')
        }}
      />
      <NavBtn
        icon={AwardIcon}
        alt="nav-awards-btn"
        target="awards"
        isActive={currentPage === 'awards'}
        onClick={() => {
          onClickHandler('awards')
        }}
      />
      <NavBtn
        icon={GiftIcon}
        alt="nav-gifts-btn"
        target="gifts"
        isActive={currentPage === 'gifts'}
        onClick={() => {
          onClickHandler('gifts')
        }}
      />
      <NavBtn
        icon={UsersIcon}
        alt="nav-store-btn"
        target="users"
        isActive={currentPage === 'users'}
        onClick={() => {
          onClickHandler('users')
        }}
      />
    </div>
  )
}

export default SideHeader
