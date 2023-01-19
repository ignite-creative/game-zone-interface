import SideHeader from './SideNav'
import MainBoard from './MainBoard'

interface Props {
  children: React.ReactNode
}

const MainPanel = (props: Props) => {
  return (
    <div
      id="main-panel"
      className="w-full h-full box-border py-4 flex text-gray-300 bg-gray-900"
    >
      <SideHeader />
      <MainBoard>{props.children}</MainBoard>
    </div>
  )
}

export default MainPanel
