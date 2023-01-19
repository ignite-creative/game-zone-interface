import SearchIcon from '../../assets/images/svg/search.svg'

interface Props {
  text: string
  onChangeText: (text: string) => void
  className: string
}

const SearchBar = (props: Props) => {
  return (
    <div id="header-search-bar" className={props.className}>
      <div className="bg-sky-400 rounded-full inline-block p-2">
        <img src={SearchIcon} alt="header-search-bar" className="w-4" />
      </div>
      <input
        type="text"
        value={props.text}
        onChange={(e) => {
          props.onChangeText(e.target.value)
        }}
        className="bg-transparent outline-0 ml-2 w-full"
        placeholder="Search..."
      />
    </div>
  )
}

export default SearchBar
