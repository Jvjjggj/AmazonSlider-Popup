// Write your code here

import Slider from 'react-slick'

import MovieItem from '../MovieItem'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div>
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="action-container">
        <h1>Action Movies</h1>
        <Slider {...settings} className="slider-container">
          {moviesList.map(i => {
            if (i.categoryId === 'ACTION') {
              return <MovieItem details={i} key={i.id} />
            }
            return null
          })}
        </Slider>
      </div>
      <div>
        <h1>Comedy Movies</h1>
        <Slider {...settings}>
          {moviesList.map(i => {
            if (i.categoryId === 'COMEDY') {
              return <MovieItem details={i} key={i.id} />
            }
            return null
          })}
        </Slider>
      </div>
    </div>
  )
}

export default PrimeVideo
