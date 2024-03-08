var title=document.querySelector("h5");
const btn=document.querySelector("#next");
const img=document.querySelector("#figure")
const anime=document.querySelector("#anime")
var check=0;

btn.addEventListener("click", () => {
    if(check==0){
        title.innerHTML="Naruto";
        img.setAttribute("src","./images/naruto.avif")
        btn.innerHTML="Luffy"
        anime.innerHTML="Anime : Naruto"
        check=1;
    }else{
        title.innerHTML="Luffy";
        img.setAttribute("src","./images/luffy.avif")
        btn.innerHTML="Naruto"
        anime.innerHTML="Anime : One Piece"
        check=0;
    }
})