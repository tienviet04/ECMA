import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'


import data from '../../db.json' assert {type: 'json'}
import Book from '../components/book'

const Detail = function (id) {
    const book = data.books.find((item) => item.id == id)
    let images = '';
    for(let i = 0; i < book.images.length; i++) {
        images += `<img alt="Art" src="${book.images[i].large_url}" class="h-[100px] w-auto object-cover sm:h-30 lg:h-50 py-1  mr-2"/>`;}
  return `
      ${HeaderComponent()}
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

              ${images}
                  
              </div>
  
          </div>
          <div class="col-span-2">
              <p class="mt-4 text-lg font-bold text-gray-900 sm:text-4xl ">${book.name}</p>
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
              ${data.books.slice(1, 7).map(function (book) {
                return Book(book)
                }).join("")}
          </div>
      </div>
  
  
      <div class="gird max-w-5xl">
          <h1 class="text-xl">Mô tả sản phẩm</h1>
          <div class="my-3">
              <span class=" box-decoration-slice bg-gradient-to-r text-black">
              ${book.description}
              </span>
          </div>
      </div>
      <div class="flex justify-center mb-4">
          <button class="mt-5 h-auto w-80 rounded py-2 text-center [-moz-appearance:_textfield] sm:text-lg  border-solid border-2 border-[#189EFF] text-[#189EFF]">Xem thêm....</button>
      </div>
  </div>
      ${FooterComponent()}
    `
}

export default Detail;