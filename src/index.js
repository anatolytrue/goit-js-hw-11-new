// import './css/styles.css'
import { searchForm, loadMoreBtn } from "./refs";
import { clickBtnSubmit, onClickAddPage } from "./clickSubmitBtn";

searchForm.addEventListener('submit', clickBtnSubmit)
loadMoreBtn.addEventListener('click', onClickAddPage)