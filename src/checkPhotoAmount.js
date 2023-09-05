import { loadMoreBtn } from "./refs";

function checkAmount(response) {
    const photoPerPage = 40
    const galleryTotalHits = response.data.totalHits
    if (galleryTotalHits > photoPerPage) {
        loadMoreBtn.classList.remove('is-hidden')
    } else {
        loadMoreBtn.classList.add('is-hidden')
    }
}

export default checkAmount