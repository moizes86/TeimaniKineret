
(()=> {
const links = [
    "http://temaneikineret.org.il/gal_life/images/5.jpg",
    "http://temaneikineret.org.il/gal_life/images/7.jpg",
    "http://temaneikineret.org.il/gal_life/images/2.jpg",
    "http://temaneikineret.org.il/gal_life/images/1.jpg",
    "http://temaneikineret.org.il/gal_life/images/8.jpg",
    "http://temaneikineret.org.il/gal_life/images/9.jpg",
]

links.forEach(e => {
    let x= `
    <div class="gallery_product col-lg-4 col-md-6 col-xs-6">
        <div class="card my-1">
            <img src=${e} class="img-fluid alt="Responsive image">
        </div>
    </div>`
    document.querySelector('.photo-gallery').insertAdjacentHTML('afterbegin',x);
});
})();

  