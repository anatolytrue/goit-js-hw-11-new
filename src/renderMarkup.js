import { galleryList } from "./refs";
import SimpleLightBox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const createGalleryMarkup = galleryEl => {
    const render = galleryEl.map(
        ({
            largeImageURL,
            webformatURL,
            tags,
            likes,
            views,
            comments,
            downloads
        }) =>
            `<a class="gallery-link" href="${largeImageURL}">    
                <div class="photo-card">
                <div class="thumb">
                    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                </div>
                <div class="info">
                        <p class="info-item">
                        <b>Likes: <br>${likes}</b>
                        </p>
                        <p class="info-item">
                        <b>Views: <br>${views}</b>
                        </p>
                        <p class="info-item">
                        <b>Comments: ${comments}</b>
                        </p>
                        <p class="info-item">
                        <b>Downloads: ${downloads}</b>
                        </p>
                    </div>
                    </div>
                </a>`
    ).join('');
    galleryList.insertAdjacentHTML('beforeend', render)

    const lightbox = new SimpleLightBox('.gallery a', {
        captionData: 'alt',
        captionPosition: 'bottom',
        animatedSpeed: 300
    })
    lightbox.refresh();
}

export default createGalleryMarkup;