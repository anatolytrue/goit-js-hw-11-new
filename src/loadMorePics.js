import Notiflix from "notiflix";
import { loadMoreBtn } from "./refs";
import createGalleryMarkup from "./renderMarkup";

function onClickLoadMore(response, step) {
    const dataTotalPhoto = response.data.totalHits
    const dataTotalImg = response.data.hits
    let totalPages = dataTotalPhoto / 40
    
    if (step > totalPages) {
        loadMoreBtn.classList.add('is-hidden')
        Notiflix.Notify.info(
            "We're sorry, but you've reached the end of search results."
        )
    }
    createGalleryMarkup(dataTotalImg)
}

export default onClickLoadMore