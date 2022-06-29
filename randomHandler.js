const buttonGacha = document.querySelector(".btn"); //membuat variabel untuk menghubungkan tombol button

var formatPict = ".png" //variabel untuk tambahan format png
var namaWaifu = new Array(
    "Erza Scarlet",
    "Hinata Hyuga",
    "Kamado Nezuko",
    "Kobayashi Tohru",
    "Megumin",
    "Mikasa Ackerman",
    "Rem",
    "Shinomiya Kaguya",
    "Yuki Asuna",
    "Zero Two");
    //Ini variabel array untuk menampung semua nama dari data foto waifu (untuk mempermudah samakan nama dengan nama file yang ada di WaifuGallery)

buttonGacha.addEventListener("click", function(){
    var randomNum = Math.floor(Math.random()*namaWaifu.length)
    //membuat random 0-1 kemudian dikalikan panjang array namaWaifu, dan kemudian di bulatkan oleh fungsi Math.Floor()

    document.getElementById("gambar").src = "img/WaifuGallery/"+namaWaifu[randomNum]+formatPict;
    //mengambil elemen dari html berdasarkan id "gambar", kemudian kita masukan bagian src dengan format gambar yang kita inginkan dan sedikit trik untuk merandom

    document.getElementById("nama").innerHTML = namaWaifu[randomNum];
    //mengambil elemen dari html berdasarkan id"nama", kemudian kita masukan bagian innerHtml (text di dalam html) dengan memasukan nama sesuai index array yang telah kita random
    //otomatis index yang digunakan untuk memanggil file gambar dengan nama yang keluar di bagian nama akan sama
})
