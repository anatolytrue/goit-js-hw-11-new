import { loadMoreBtn, galleryList } from "./refs";
import Notiflix from "notiflix";
import fetchGallery from "./fetchPics";
import onClickLoadMore from "./loadMorePics";
import checkResponse from "./checkTotalHits";

let value = null;
let step = 1;

function clickBtnSubmit(e) {
    e.preventDefault();
    // console.log(e.target)
    value = e.target.searchQuery.value.toLowerCase().trim()
    console.log(e.target)

    if (!value) {
        galleryList.innerHTML = ''
        loadMoreBtn.classList.add('is-hidden')
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
        return
    } else {
        galleryList.innerHTML = ""
        fetchGallery(value, step)
            .then(checkResponse)
            .catch(error => console.log(error))
    }
}

function onClickAddPage() {
    step += 1;
    fetchGallery(value, step)
        .then(data => onClickLoadMore(data, step))
        .catch(error => console.log(error))
}

export {clickBtnSubmit, onClickAddPage}