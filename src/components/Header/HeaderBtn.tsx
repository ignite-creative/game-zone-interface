interface Props {
  icon: string
  alt: string
  className?: string
  onClick: () => void
}

const HeaderBtn = (props: Props) => {
  return (
    <div
      role="presentation"
      className={`rounded-xl bg-gray-800 mx-2 hover:shadow-md hover:shadow-sky-500/40 p-2 ${props.className}`}
      onClick={() => {
        props.onClick()
      }}
    >
      <img src={props.icon} alt={props.alt} className="w-4 h-4" />
    </div>
  )
}

export default HeaderBtn
