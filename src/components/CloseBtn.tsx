import XIcon from '../assets/images/svg/x.svg'

interface IProps {
  className?: string
  onClick: () => void
}

const CloseBtn = (props: IProps) => {
  return (
    <div
      role="presentation"
      className={`justify-self-end self-end place-self-end hover:bg-sky-500 inline-block p-1.5 rounded-full ${props.className}`}
      onClick={() => {
        props.onClick()
      }}
    >
      <img src={XIcon} alt="close-btn" className="w-4" />
    </div>
  )
}

export default CloseBtn
