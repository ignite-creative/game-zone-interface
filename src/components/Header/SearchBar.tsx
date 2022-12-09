import SearchIcon from '../../assets/images/svg/search.svg'

interface Props {
  text: string
  onChangeText: (text: string) => void
}

const SearchBar = (props: Props) => {
  return (
    <div id="header-search-bar">
      <button className="bg-sky-400 rounded-full p-2">
        <img src={SearchIcon} alt="header-search-bar" className="w-4" />
      </button>
      <input
        type="text"
        value={props.text}
        onChange={(e) => {
          props.onChangeText(e.target.value)
        }}
        className="search-bar-input"
        placeholder="Search..."
      />
    </div>
  )
}

export default SearchBar
