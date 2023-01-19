import { useState, useEffect, useCallback, Fragment } from 'react'
import CarouselCard from '../components/Carousel/CarouselCard'
import Card1 from '../assets/images/carousel/card1.jpg'
import Card2 from '../assets/images/carousel/card2.jpg'
import Card3 from '../assets/images/carousel/card3.jpg'
import Card4 from '../assets/images/carousel/card4.jpg'
import Card5 from '../assets/images/carousel/card5.jpg'

interface IProps {
  className?: string
}

const Carousel = (props: IProps) => {
  return (
    <Fragment>
      <CarouselCard imgSrc={Card1} caption="Card1" showCaption={false} />
      <CarouselCard imgSrc={Card2} caption="Card2" showCaption={false} />
      <CarouselCard imgSrc={Card3} caption="Card3" showCaption={false} />
      <CarouselCard imgSrc={Card4} caption="Card4" showCaption={false} />
      <CarouselCard imgSrc={Card5} caption="Card5" showCaption={false} />
    </Fragment>
  )
}

export default Carousel
