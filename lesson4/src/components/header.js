const HeaderComponent = function () {
  // `` backticks
  return /*html*/`
  <header class=" bg-blue-500 w-full h-27 text-white">
  <div class="w-[1240px] ml-auto mr-auto flex items-center justify-between">
      <div class="logo ">
          <a href="#"> <img src="../../public/img/logo.png" alt=""> </a>
      </div>

      <div class="search ">
          <form action="">
              <input type="text" class="w-80 h-8 rounded">
              <button class="bg-blue-600 w-24 h-8">Tìm kiếm</button>
          </form>
      </div>

      <div class="login">
          <div>
              <a href="">Đăng nhập</a>
              <a href="">Đăng ký</a>
          </div>
          <div class="user">Tài khoản</div>
      </div>

      <div class="cart">
          <a href="">Giỏ hàng</a>
      </div>
  </div>
</header>
    `
}

export default HeaderComponent;