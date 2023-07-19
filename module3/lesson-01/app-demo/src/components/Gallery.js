import GalleryCard from './GalleryCard';
import firstImg from '../images/photo-01.jpg';
import secondImg from '../images/photo-02.jpg';
import thirdImg from '../images/photo-03.jpg';
import fourthImg from '../images/photo-04.jpg';

function Gallery(){
const galleryList = [
    { artistName: 'Van Gogh', paintingUrl: firstImg},
    { artistName: 'Van Gogh', paintingUrl: secondImg},
    { artistName: 'Van Gogh', paintingUrl: thirdImg},
    { artistName: 'Da Vinci', paintingUrl: fourthImg},
]

    return (
        <div id="gallery">
            <h2>GALLERY</h2>
            {galleryList.map(painting => {
                return <GalleryCard galleryItem={painting} />
            })}
            {/* <img className='gallery-image' alt="van_gogh_img" src={firstImg} style={{ width: '200px', height: '200px' }}/>
            <img className='gallery-image' alt="van_gogh_img" src={secondImg} style={{ width: '200px', height: '200px' }} /> */}
            {/* <img alt="image_one" src="https://bit.ly/3iMeumb" />
            <img alt="image_two" src="https://bit.ly/3iLPn32" />
            <img alt="image_three" src="https://bit.ly/3BrDAhE" />
            <img alt="image_four" src="https://bit.ly/3lsRQkz" /> */}
        </div>
    )
}

export default Gallery;