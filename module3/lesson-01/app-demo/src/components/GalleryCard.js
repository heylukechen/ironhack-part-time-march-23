function GalleryCard(props){
    return(
        <div>
            <img className='gallery-image' alt='van_gogh_first_img' src={props.galleryItem.paintingUrl}/>
            <h2>{props.galleryItem.artistName}</h2>
        </div>
    )
}

export default GalleryCard