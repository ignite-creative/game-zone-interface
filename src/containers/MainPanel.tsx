import SideHeader from './SideNav'
import MainBoard from './MainBoard'

interface Props {
  children: React.ReactNode
}

const MainPanel = (props: Props) => {
  return (
    <div id="main-panel" className="flex w-full h-full text-gray-300">
      <SideHeader />
      <MainBoard>{props.children}</MainBoard>
    </div>
  )
}

export default MainPanel
