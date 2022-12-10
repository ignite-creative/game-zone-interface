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
      className={`md:my-2 md:p-2 sm:my-1 sm:p-1 p-1 my-1  rounded-lg border border-transparent hover:border-gray-800 inline-block hover:shadow-md hover:shadow-sky-800 ${
        props.isActive ? 'bg-sky-400' : ''
      }`}
      onClick={handleOnClick}
    >
      <img src={props.icon} alt={props.alt} className="w-6" />
    </div>
  )
}

export default NavBtn
