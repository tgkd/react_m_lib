import React from 'react'

const PhotosPage = ({ images, onHandleSelectImage, selectedImage }) => (
    <div className="images-page">
        <h2>Images</h2>
        <div className="images-page__selected-image">
            <div key={selectedImage.id}>
                <h6>{selectedImage.title}</h6>
                <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
            </div>
        </div>
        <div className="images-page__previews">
            {images.map((image, id) => (
                <div>
                    <img src={image.mediaUrl} alt={image.title} />
                </div>
            ))}
        </div>
    </div>
)

export default PhotosPage