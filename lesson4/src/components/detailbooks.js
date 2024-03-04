
const DetailBooks = function () {

    return `
    
<div class ="w-[1240px] mr-auto ml-auto">
    <div class="grid grid-rows-3 grid-flow-col gap-5 mt-10">
        <div class="row-span-3 grid ">
            <div class="grid justify-items-center">
            <img
                alt="Art"
                src="${book.images[0].base_url}"
                class="h-64 w-auto object-cover sm:h-60 lg:h-96 pr-auto "
            />
            
            </div>
            <div class="flex">
               
                <img
                    alt="Art"
                    src="${book.images[0].large_url}"
                    class="h-20 w-auto object-cover sm:h-30 lg:h-50 py-1  mr-2"
                />
                
                
            </div>

        </div>
        <div class="col-span-2">
            <p class="mt-4 text-lg font-bold text-gray-900 sm:text-4xl ">"${book.categories.name}".</p>
        <div class="flex">    
            <p class="mt-2 max-w-sm text-gray-700  text-xs">
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i> (Xem 9104 đánh giá)
                &verbar; Đã bán 100
            </p>
        </div>
        <div class="-mt-2 py-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div class="rounded-2xl bg-[#FAFAFA]  lg:py-1">
          <div class="inline-block	">
            <p class="mt-2 py-2 flex items-baseline gap-x-2">
              <span class="text-3xl font-bold tracking-tight text-[#FF424E]">100.000</span>
              <span class="text-xl font-bold leading-6 tracking-wide text-[#FF424E]">đ</span>
              <span class="text-xs font-sans line-through leading-6 tracking-wide text-[#808089]">120.000đ</span>
            </p>
          </div>
        </div>
      </div>
        </div>
        <div class="row-span-2 col-span-2 ...">
            <div>
                <p class="font-bold pb-3">Số lượng</p>
                <label for="Quantity" class="sr-only"> Quantity </label>

                <div class="flex items-center gap-1">
                    <button type="button" class="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75">
                    &minus;
                    </button>

                    <input
                    type="number"
                    id="Quantity"
                    value="1"
                    class="h-10 w-16 rounded  text-center [-moz-appearance:_textfield] sm:text-sm border-solid border-2 border-gray-300"
                    />
                    <button type="button" class="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75">
                    &plus;
                    </button>
                </div>
            </div>
            <button class="mt-5 h-auto w-80 rounded py-2 text-center [-moz-appearance:_textfield] sm:text-lg  border-solid border-2 border-red-600 bg-red-600 text-white">Mua ngay</button>
        </div>
    </div>
        <span class=" text-xl">Sản phẩm tương tự</span>
    <div class="flex w-[1240px]  mr-auto "style=" padding-top:10px" >
        <div class="grid grid-cols-6 gap-3 pb-10">
            <a href="#" class="inline-block ">
                <img
                    alt="Art"
                    src="../../public/img/book.jpeg"
                    class="h-64 w-auto object-cover sm:h-50 lg:h-40"
                />

                <p  class="mt-4 text-lg font-bold text-gray-900 sm:text-xm ">Nhà giả kim</p>

                <p class="mt-2 max-w-sm text-gray-70 text-xs">
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                &verbar; Đã bán 100
                </p>
                <p class="font-bold mt-2 max-w-sm text-red-600 text-xs">
                    100.000đ
                </p>

            </a>
            <a href="#" class="inline-block ">
                <img
                    alt="Art"
                    src="../../public/img/book.jpeg"
                    class="h-64 w-auto object-cover sm:h-50 lg:h-40"
                />

                <p  class="mt-4 text-lg font-bold text-gray-900 sm:text-xm ">Nhà giả kim</p>

                <p class="mt-2 max-w-sm text-gray-700 text-xs">
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                &verbar; Đã bán 100
                </p>
                <p class="font-bold mt-2 max-w-sm text-red-600 text-xs">
                    100.000đ
                </p>

            </a>
            <a href="#" class="inline-block ">
                <img
                    alt="Art"
                    src="../../public/img/book.jpeg"
                    class="h-64 w-auto object-cover sm:h-50 lg:h-40"
                />

                <p  class="mt-4 text-lg font-bold text-gray-900 sm:text-xm ">Nhà giả kim</p>

                <p class="mt-2 max-w-sm text-gray-700 text-xs">
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                &verbar; Đã bán 100
                </p>
                <p class="font-bold mt-2 max-w-sm text-red-600 text-xs">
                    100.000đ
                </p>

            </a>
            <a href="#" class="inline-block ">
                <img
                    alt="Art"
                    src="../../public/img/book.jpeg"
                    class="h-64 w-auto object-cover sm:h-50 lg:h-40"
                />

                <p  class="mt-4 text-lg font-bold text-gray-900 sm:text-xm ">Nhà giả kim</p>

                <p class="mt-2 max-w-sm text-gray-700  text-xs">
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                &verbar; Đã bán 100
                </p>
                <p class="font-bold mt-2 max-w-sm text-red-600 text-xs">
                    100.000đ
                </p>

            </a>
            <a href="#" class="inline-block ">
                <img
                    alt="Art"
                    src="../../public/img/book.jpeg"
                    class="h-64 w-auto object-cover sm:h-50 lg:h-40"
                />

                <p  class="mt-4 text-lg font-bold text-gray-900 sm:text-xm ">Nhà giả kim</p>

                <p class="mt-2 max-w-sm text-gray-700 text-xs">
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                &verbar; Đã bán 100
                </p>
                <p class="text-xs font-bold mt-2 max-w-sm text-red-600">
                    100.000đ
                </p>

            </a>
            <a href="#" class="inline-block ">
                <img
                    alt="Art"
                    src="../../public/img/book.jpeg"
                    class="h-64 w-auto object-cover sm:h-50 lg:h-40"
                />

                <p  class="mt-4 text-lg font-bold text-gray-900 sm:text-xm ">Nhà giả kim</p>

                <p class="mt-2 max-w-sm text-gray-700 text-xs">
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                &verbar; Đã bán 100
                </p>
                <p class=" text-xs font-bold mt-2 max-w-sm text-red-600">
                    100.000đ
                </p>

            </a>
        </div>
    </div>


    <div class="gird max-w-5xl">
        <h1 class="text-xl">Mô tả sản phẩm</h1>
        <div class="my-3">
            <span class=" box-decoration-slice bg-gradient-to-r text-black">
            Chúng ta đang sống trong một thời đại vội vã, dường như mọi giao tiếp đều ở trên màn hình xanh, và dường như chúng ta thường quên đi những niềm vui giản dị, những ấm áp yêu thương, những cử chỉ chân thành ở một nơi mà chúng ta sống nhiều hơn ở nhà – đó là công sở.</p>\n<p>Để rồi một ngày mọi áp lực như đổ vào đầu chúng ta cùng một lúc, áp lực từ sếp, áp lực từ đồng nghiệp, áp lực từ nhân viên…</p>\n<p>Xì trét … xì trét khiến mỗi đêm chúng ta không thể ngủ được rồi luôn tự hỏi: Chúng ta đang làm cái quái gì vậy?</p>\n<p>Thực tế là, chúng ta có làm gì đâu? Chính vì chúng ta không làm gì nên xì trét nối liền xì trét, áp lực nối liền áp lực.</p>\n<p>Giá mà chúng ta biết lắng nghe hơn, biết chia sẻ hơn, biết hợp tác hơn, biết rèn luyện kỹ năng cho bản thân hơn, biết tôn trọng hơn… thì công sở thực sự là một mái nhà thứ hai của chúng ta.</p>\n<p>Để cho mọi nhân viên, mọi vị sếp không thốt lên từ “giá mà”, chúng tôi viết cuốn sách này, từ kinh nghiệm quý báu trong và ngoài nước hi vọng có thể như một chiếc phao giúp quý vị “sống sót” giữa muôn trùng dông bão có tên là “áp lực nơi công sở”.</p><p>Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
            </span>
        </div>
    </div>
    <div class="flex justify-center mb-4">
        <button class="mt-5 h-auto w-80 rounded py-2 text-center [-moz-appearance:_textfield] sm:text-lg  border-solid border-2 border-[#189EFF] text-[#189EFF]">Xem thêm....</button>
    </div>
</div>
`
}

export default DetailBooks;