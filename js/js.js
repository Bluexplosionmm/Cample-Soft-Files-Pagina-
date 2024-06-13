var takeAncoraProvincia = document.querySelector('a.ancoraProvincia')
var navProvincias = document.querySelector('div.provincias')
var takeProvinciasSeparate = [...document.querySelectorAll('div.provinciasSeparate')]
var takeCloseP = document.querySelector('p.closeP')
var takeArrowLeft = document.querySelector('.arrowLeft')
var takeImgChange = document.querySelector('img.imgChange')
var takeChangeMuseum = document.querySelector('.changeMuseum')
var takeDescriptionMuseum = document.querySelector('.descriptionMuseum')
var vectorDescriptionMuseum = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, earum laboriosam ad qui itaque corrupti quaerat delectus quas praesentium recusandae, odit saepe voluptates fugit rerum neque enim tempore quia ex dolore accusamus veniam cupiditate perferendis?<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit, nihil cum laudantium harum voluptatibus placeat nulla. Tempora nostrum sequi itaque impedit corrupti mollitia asperiores, eius repellat omnis velit neque ratione nisi, quidem ab sunt.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, earum laboriosam ad qui itaque corrupti quaerat delectus quas praesentium recusandae, odit saepe voluptates fugit rerum neque enim tempore quia ex dolore accusamus veniam cupiditate perferendis?<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit, nihil cum laudantium harum voluptatibus placeat nulla. Tempora nostrum sequi itaque impedit corrupti mollitia asperiores, eius repellat omnis velit neque ratione nisi, quidem ab sunt.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, earum laboriosam ad qui itaque corrupti quaerat delectus quas praesentium recusandae, odit saepe voluptates fugit rerum neque enim tempore quia ex dolore accusamus veniam cupiditate perferendis?<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit, nihil cum laudantium harum voluptatibus placeat nulla. Tempora nostrum sequi itaque impedit corrupti mollit"]
var vectorTexts = ["Museu das forças Armadas", "Fortaleza de Massangano", "Museu antropológico"]
var vectorImgs = ["img/FAA.webp", "img/fortalezaMassangano.jpg", "img/museuAntropologia.jpg"]
var i = 0
var checkI = 0

takeCloseP.addEventListener('click', function disappear(){
    navProvincias.style.transform = "translateY(-80rem)";
    takeProvinciasSeparate.map(element => {
        element.style.transform = "translateX(-79rem)";
    });
})
takeAncoraProvincia.addEventListener('mouseenter', function down(){
    navProvincias.style.transform = "translateY(-2rem)";
    takeProvinciasSeparate.map(element => {
        element.style.transform = "translateX(2rem)";
    });
});

takeArrowLeft.addEventListener('click', function change(){
    i++
    if(i == 3){
        i = 0
    }
    takeImgChange.src = vectorImgs[i]
    takeChangeMuseum.innerHTML = vectorTexts[i]
    takeDescriptionMuseum.innerHTML = vectorDescriptionMuseum[i]
})