import MainPanel from '../containers/MainPanel'

interface Props {
  children: React.ReactNode
}

const BasicPage = (props: Props) => {
  return <MainPanel>{props.children}</MainPanel>
}

export default BasicPage
