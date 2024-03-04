const BannerComponent = function(){
    var album = [];
    for (var i = 0; i < 5; i++) {
        album[i] = new Image();
        album[i].src = "./img/banner" + i + ".png";
    }
    var interval = setInterval(slideshow, 3000);
    var index = 0;
    function slideshow() {
        index++;
        if (index > 4) {
            index = 0;
        }
        document.getElementById("banner").src = album[index].src;
    }

    return `
    <!-- Tiêu đề -->
    <div class="text-2xl sm:ml-6 font-medium">
        <h2> Nhà Sách Tiki</h2>
    </div>
    <!-- banner -->
    <div class="content">
        <div class="banner">
            <img class="w-[1080px] h-[346px] " id="banner" src="../../public/img/banner0.png" alt="">
        </div>
    </div>

    <!-- Bộ lọc -->
    <div class="hidden sm:ml-6 sm:block">
        <div class="flex space-x-4 py-3">
            <a href="#" class="text-black-900 hover:underline  hover:text-cyan-500 text-sm font-medium">Phổ biến</a>
            <a href="#" class="text-black-900 hover:underline  hover:text-cyan-500 text-sm font-medium">Bán chạy</a>
            <a href="#" class="text-black-900 hover:underline  hover:text-cyan-500 text-sm font-medium">Hàng mới</a>
            <a href="#" class="text-black-900 hover:underline  hover:text-cyan-500 text-sm font-medium">Giá thấp</a>
            <a href="#" class="text-black-900 hover:underline  hover:text-cyan-500 text-sm font-medium">Giá cao</a>
        </div>
    </div>
    `
}
export default BannerComponent;