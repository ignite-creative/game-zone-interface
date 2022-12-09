import { useNavigate } from 'react-router-dom'

interface Props {
  icon: string
  alt: string
  isActive: boolean
  target: string
  onClick: () => void
}

const NavBtn = (props: Props) => {
  const navigate = useNavigate()
  const handleOnClick = () => {
    props.onClick()
    navigate(`/${props.target}`)
  }

  return (
    <div
      role="presentation"
      className={`nav-btn ${props.isActive ? 'nav-btn-active' : ''}`}
      onClick={handleOnClick}
    >
      <img src={props.icon} alt={props.alt} className="w-6" />
    </div>
  )
}

export default NavBtn
