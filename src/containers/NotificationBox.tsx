import { INotification } from '../libs/interfaces'
import NotificationItem from '../components/NotificationItem'

interface IProps {
  notifications: INotification[]
}

const NotificationBox = (props: IProps) => {
  return (
    <div className="">
      {props.notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          subject={notification.subject}
          description={notification.description}
        />
      ))}
    </div>
  )
}

export default NotificationBox
