import SideHeader from './SideNav'
import MainBoard from './MainBoard'

interface Props {
  children: React.ReactNode
}

const MainPanel = (props: Props) => {
  return (
    <div id="main-panel">
      <SideHeader />
      <MainBoard>{props.children}</MainBoard>
    </div>
  )
}

export default MainPanel
