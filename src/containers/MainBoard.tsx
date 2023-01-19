import Header from './Header'

interface Props {
  children: React.ReactNode
}

const MainBoard = (props: Props) => {
  return (
    <div id="main-board" className="w-full h-full relative mr-4">
      <Header />
      <div
        id="content"
        className="absolute left-0 right-0 bottom-0 top-24 overflow-y-scroll content"
      >
        {props.children}
      </div>
    </div>
  )
}

export default MainBoard
