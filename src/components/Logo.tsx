import { Fragment } from 'react'

interface IProps {
  src: string
  className?: string
}

const Logo = (props: IProps) => {
  return (
    <Fragment>
      <img
        src={props.src}
        className={`w-20 h-20 ${props.className}`}
        alt="app-logo"
      />
    </Fragment>
  )
}

export default Logo
