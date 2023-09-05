import createGalleryMarkup from "./renderMarkup";
import Notiflix from "notiflix";
import checkAmount from "./checkPhotoAmount";
import { galleryList } from "./refs";

function checkResponse(response) {
    const dataHits = response.data.hits
    const totalHits = response.data.totalHits
    checkAmount(response)
    if (dataHits.length !== 0) {
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`)
        createGalleryMarkup(dataHits)
    } else {
        galleryList.innerHTML = ''
        Notiflix.Notify.failure(
            "Sorry, there are no images matching your search query. Please try again."
        )
    }
}

export default checkResponse