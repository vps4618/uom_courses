var para = document.getElementById("name");
para.innerHTML = "Bakersfall";
var imgList = ["images/gallery/bakersfall1.jpg",
                "images/gallery/bakersfall2.jpg",
                "images/gallery/bakersfall3.jpg",
                "images/gallery/bakersfall4.jpg",
                "images/gallery/bakersfall5.jpg",
                "images/gallery/ella1.jpg",
                "images/gallery/ella2.jpg",
                "images/gallery/ella3.jpg",
                "images/gallery/ella4.webp",
                "images/gallery/ella5.jpg",
                "images/gallery/hiking1.jpg",
                "images/gallery/hiking2.jpg",
                "images/gallery/hiking3.jpg",
                "images/gallery/hiking4.jpg",
                "images/gallery/hiking5.webp",
                "images/gallery/knuckles1.jpg",
                "images/gallery/knuckles2.jpg",
                "images/gallery/knuckles3.jpg",
                "images/gallery/knuckles4.jpg",
                "images/gallery/knuckles5.jpg",
                "images/gallery/little_adams_peak1.webp",
                "images/gallery/little_adams_peak2.jpg",
                "images/gallery/little_adams_peak3.jpg",
                "images/gallery/little_adams_peak4.jpg",
                "images/gallery/little_adams_peak5.webp",
                "images/gallery/mahaweli1.jpg",
                "images/gallery/mahaweli2.jpg",
                "images/gallery/mahaweli3.jpg",
                "images/gallery/mahaweli4.jpg",
                "images/gallery/mahaweli5.jpg",
                "images/gallery/pidurangala_and_sigiriya1.webp",
                "images/gallery/pidurangala_and_sigiriya2.jpg",
                "images/gallery/pidurangala_and_sigiriya3.jpg",
                "images/gallery/pidurangala_and_sigiriya4.webp",
                "images/gallery/pidurangala_and_sigiriya5.webp",
                "images/gallery/sinharaja1.jpg",
                "images/gallery/sinharaja2.webp",
                "images/gallery/sinharaja3.jpg",
                "images/gallery/sinharaja4.jpg",
                "images/gallery/sinharaja5.jpg",
                "images/gallery/worldendcliff1.jpg",
                "images/gallery/worldendcliff2.jpg",
                "images/gallery/worldendcliff3.jpg",
                "images/gallery/worldendcliff4.jpg",
                "images/gallery/worldendcliff5.jpg"];
function change(){

var para = document.getElementById("name");
var img  = document.getElementById("img");
var imgsrc = img.getAttribute('src');

if(imgsrc==imgList[0]){
    img.setAttribute('src',imgList[5]);
    para.innerHTML = "Ella Rock";
}else if(imgsrc==imgList[5]){
    img.setAttribute('src',imgList[10]);
    para.innerHTML = "Hiking";
}else if(imgsrc == imgList[10]){
    img.setAttribute('src',imgList[15]);
    para.innerHTML = "Knuckles Mountain";
}else if(imgsrc == imgList[15]){
    img.setAttribute('src',imgList[20]);
    para.innerHTML = "Little Adam's Peak";
}else if(imgsrc == imgList[20]){
    img.setAttribute('src',imgList[25]);
    para.innerHTML = "Mahaweli River";
}else if(imgsrc == imgList[25]){
    img.setAttribute('src',imgList[30]);
    para.innerHTML = "Pidurangala and Sigiriya";
}else if(imgsrc == imgList[30]){
    img.setAttribute('src',imgList[35]);
    para.innerHTML = "Sinharaja Forest";
}else if(imgsrc == imgList[35]){
    img.setAttribute('src',imgList[40]);
    para.innerHTML = "World End Cliff";
}else if(imgsrc == imgList[40]){
    img.setAttribute('src',imgList[0]);
    para.innerHTML = "Bakers Fall";
}
}

function bigImg(x) {
x.style.height = "60vw";
x.style.width = "90vw";
}

function normalImg(x) {
x.style.height = "50vw";
x.style.width = "80vw";
}