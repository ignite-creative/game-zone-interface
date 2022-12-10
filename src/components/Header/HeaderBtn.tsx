import { Fragment } from 'react'

interface Props {
  icon: string
  alt: string
  className?: string
  notifications?: number
  onClick: () => void
}

const HeaderBtn = (props: Props) => {
  return (
    <div
      role="presentation"
      className={`inline-flex relative item-center text-sm font-medium text-center rounded-xl bg-gray-800 mx-2 hover:shadow-md hover:shadow-sky-400/40 p-2 ${props.className}`}
      onClick={() => {
        props.onClick()
      }}
    >
      <img src={props.icon} alt={props.alt} className="w-4 h-4" />
      {props.notifications && props.notifications > 0 && (
        <Fragment>
          <span className="sr-only">Notifications</span>
          <div className="inline-flex absolute -top-1 -right-1 justify-center items-center w-4 h-4 text-xs text-white bg-red-500 rounded-full border-1 border-white dark:border-gray-900">
            {props.notifications}
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default HeaderBtn
