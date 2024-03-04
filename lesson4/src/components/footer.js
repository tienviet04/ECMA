const FooterComponent = function () {
    return `
    <footer class="w-[1240px] ml-auto mr-auto flex justify-between grid grid-cols-5 gap-[40px] my-2 ">
    <section class="footer__item">
        <p class="text-[17.5px] font-medium mb-[10px]">Hỗ trợ khách hàng</p>
        <ul class="grid gap-2 grid-cols-1 text-[13px] text-[#808089]">
            <li>Hotline: 1900-6035</li>
            <li>(1000 đ/phút, 8-21h kể cả T7, CN)</li>
            <li>Các câu hỏi thường gặp</li>
            <li>Gửi yêu cầu hỗ trợ</li>
            <li>Hướng dẫn đặt hàng</li>
            <li>Phương thức vận chuyển</li>
            <li>Chính sách đổi trả</li>
            <li>Hướng dẫn trả góp</li>
            <li>Chính sách hàng nhập khẩu</li>
            <li>Hỗ trợ khách hàng: hotro@tiki.vn</li>
            <li>Báo lỗi bảo mật: security@tiki.vn</li>
        </ul>
    </section>

    <section class="footer__item">
        <p class="text-[17.5px] font-medium mb-[10px]">Về Tiki</p>
        <ul class="grid gap-2 grid-cols-1 text-[13px] text-[#808089]">
            <li>Giới thiệu Tiki</li>
            <li>Tuyển dụng</li>
            <li>Chính sách bảo mật thanh toán</li>
            <li>Chính sách bảo mật thông tin cá nhân</li>
            <li>Chính sách giải quyết khiếu nại</li>
            <li>Điều khoản sử dụng</li>
            <li>Giới thiệu Tiki Xu</li>
            <li>Tiếp thị liên kết cùng Tiki</li>
            <li>Bán hàng doanh nghiệp</li>
            <li>Điều kiện vận chuyển</li>
        </ul>
    </section>

    <section class="footer__item">
        <p class="text-[17.5px] font-medium mb-[10px]">Hợp tác và liên kết</p>
        <ul class="grid gap-2 grid-cols-1 text-[13px] text-[#808089]">
            <li>Quy chế hoạt động Sàn GDTMĐT</li>
            <li>Bán hàng cùng Tiki</li>
        </ul>
        <p class="text-[17.5px] font-medium mb-[10px] mt-[24px]">Chứng nhận bởi</p>
        <div class="flex mt-[13px]">
            <img src="../../public/img/footer1.png" alt="">
            <img src="../../public/img/footer2.png" alt="">
        </div>
    </section>
    
    <section class="footer__item">
        <p class="text-[17.5px] font-medium mb-[10px]">Phương thức thanh toán</p>
       <div class="grid grid-cols-5">
            <img src="../../public/icons/pay1.png" alt="">
            <img src="../../public/icons/pay2.png" alt="">
            <img src="../../public/icons/pay3.png" alt="">
            <img src="../../public/icons/pay4.png" alt="">
            <img src="../../public/icons/pay5.png" alt="">
            <img src="../../public/icons/pay6.png" alt="">
            <img src="../../public/icons/pay7.png" alt="">
            <img src="../../public/icons/pay8.png" alt="">
            <img src="../../public/icons/pay9.png" alt="">
            <img src="../../public/icons/pay10.png" alt="">
            <img src="../../public/icons/pay11.png" alt="">
            <img src="../../public/icons/pay12.png" alt="">
            
       </div>
       <p class="text-[17.5px] font-medium mb-[10px] mt-[40px]">Dịch vụ giao hàng</p>
       <img src="../../public/img/tikiNow.png" alt="">
    </section>

    <section class="footer__item">
        <p class="text-[17.5px] font-medium mb-[10px]">Kết nối với chúng tôi</p>
       <div class="flex">
            <img src="../../public/icons/fb.png" alt="">
            <img src="../../public/icons/youtube.png" alt="">
            <img src="../../public/icons/zalo.png" alt="">
       </div>
       <p class="text-[17.5px] font-medium mb-[10px] mt-[31px]">Tải ứng dụng trên điện thoại</p>
        <div class="flex">
            <img src="./src/assets/img/qr.png" alt="">
            <div class="ml-[8px]">
                <img src="../../public/img/iso.png" alt="">
                <img src="../../public/img/chplay.png" alt="" class="mt-[8px]">
            </div>
        </div>
    </section>
    </footer>
    <div class="h-0.2 w-[1240px] ml-auto mr-auto " style="max-width: 1240px; border: 1px solid #9d9898;">
    </div>
    <div class="w-[1240px] ml-auto mr-auto text-[13px]  text-[#808089] pb-10">
      Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh <br>
      Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng <br>
      Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022 <br>
      © 2022 - Bản quyền của Công ty TNHH Ti Ki
    
    </div>
    `
}

export default FooterComponent