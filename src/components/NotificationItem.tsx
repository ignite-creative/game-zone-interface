import AlertIcon from '../assets/images/svg/alert-circle.svg'

interface IProps {
  subject: string
  description: string
}

const NotificationItem = (props: IProps) => {
  return (
    <div className="w-full p-4 my-2 flex rounded-lg bg-gray-700/50 shadow-md shadow-sky-800">
      <img src={AlertIcon} className="w-10 mr-4" alt="alert" />
      <div className="w-full flex-column text-left">
        <div className="text-sky-400">{props.subject}</div>
        <div>{props.description}</div>
      </div>
    </div>
  )
}

export default NotificationItem
