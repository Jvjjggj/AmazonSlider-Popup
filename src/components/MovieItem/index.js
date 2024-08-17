import Popup from 'reactjs-popup'
import './index.css' // Ensure this file contains correct styles  videoUrl
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

const MovieItem = props => {
  const {details} = props
  console.log(details)

  return (
    <div className="thumbnailUrl-container">
      <Popup
        trigger={
          <img
            className="img-thumbnailUrl"
            src={details.thumbnailUrl}
            alt="thumbnail"
          />
        }
        modal
      >
        {close => (
          <div className="video-container">
            <div className="trigger-button">
              <div className="close-btn-container">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => close()}
                  aria-label="close"
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="video-player">
                <ReactPlayer
                  className="react-video-player"
                  width="100%"
                  url={details.videoUrl}
                />
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
