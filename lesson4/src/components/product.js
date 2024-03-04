const SimilarProduct = function (product) {
    return `    
    <div class="">
    <a href="/detail" class="box-border ">
        <img
            alt="Art"
            src="${product.images[0].base_url}"
            class="h-64 w-auto object-cover sm:h-60 lg:h-70"
        />

        <p  class="mt-4 text-lg font-bold text-gray-900 sm:text-xl sm:ml-6 ">${product.categories.name}.</p>

        <p class="mt-2 max-w-sm text-gray-700 sm:ml-6 text-xs">
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        &verbar; Đã bán 100
        </p>
        <p class="font-mono mt-2 max-w-sm text-red-600 sm:ml-6">
             100.000đ
        </p>

    </a>
    </div>
    
`
}

export default SimilarProduct();
