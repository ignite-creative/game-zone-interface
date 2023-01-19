interface IProps {
  imgSrc: string
  className?: string
  caption: string
  showCaption: boolean
}

const CarouselCard = (props: IProps) => {
  return (
    <div className="block relative w-full m-4 rounded-lg shadow-sky-400 shadow-sm">
      <img
        src={props.imgSrc}
        alt="caption"
        className={`rounded-lg ${props.className}`}
      />
      {props.showCaption && <h2 className="">{props.caption}</h2>}
    </div>
  )
}

export default CarouselCard
