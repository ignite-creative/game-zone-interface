import Header from './Header'

interface Props {
  children: React.ReactNode
}

const MainBoard = (props: Props) => {
  return (
    <div id="main-board" className="rounded-lg ml-2 w-full h-full p-4">
      <Header />
      {props.children}
    </div>
  )
}

export default MainBoard
