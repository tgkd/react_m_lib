import React from 'react'
import { searchMediaAction } from '../store/actions/mediaActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// @connect(({}) => ({}), dispatch => bindActionCreators(actions, dispatch))
class GalleryPageContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(searchMediaAction('rain'))
    }

    render() {
        console.log(JSON.stringify(this.props))
        return <div className="gallery-container" />
    }
}

const mapStateToProps = ({ images, videos }) => {
    console.log(images)
    console.log(videos)
    return {
        images: images[0],
        selectedImage: images.selectedImage,
        videos: videos[0],
        selectedVideo: videos.selectedVideo
    }
}

export default connect(mapStateToProps)(GalleryPageContainer)
