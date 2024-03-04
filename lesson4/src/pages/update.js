import { useEffect, useState } from "../ultilities";
import { isEmpty } from 'lodash'

const UpdateBook = function (id) {
    //b1: tạo state để lưu giữ liệu 
    const [book, setBook] = useState({})
    //b2: Thực hiện xử lý bất đồng bộ
    useEffect(function () {
        fetch("http://localhost:3000/books/" + id)
            .then((res) => res.json())
            .then(data => setBook(data))
    }, [])

    useEffect(function(){
        const updateBtn = document.querySelector("#update-btn")
        updateBtn.onclick = function(e){
            e.preventDefault()
            handleUpdateBook()
        }
    })

    if (isEmpty(book)) {
        return /*html*/`
        <div class="w-full bg-neutral-200 dark:bg-neutral-200">
        <div
          class="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
          style="width: 100%">
          100%
        </div>
      </div>
        `
    }
    const handleUpdateBook = function (){
        const formData = new FormData(document.querySelector("#update-form"))
        const data = {
            name: formData.get("name"),
            list_price: formData.get("list_price"),
            short_description: formData.get("short_description"),
            current_seller:{
                price: formData.get("current_seller_price")
            },
            rating_average: formData.get("rating_average")
        };
        fetch("http://localhost:3000/books/" + id, {
            method: "PATCH",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        
    }
    return /*html*/`
<section class="bg-gray-100">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">
            <img src="${book.images?.[0].base_url}"/>
        </div>

            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form id="update-form" action="" class="space-y-4">
                    <div>
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Tên sách</label>
                        <input
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Name"
                            type="text"
                            id="name"
                            value="${book.name || ""}"
                            name="name"
                        />
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Giá gốc</label>
                            <input
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Price"
                            type="number"
                            id="list_price"
                            value="${book.list_price || ""}"
                            name="list_price"
                            min="0"
                            
                            />
                    </div>
                    </div>
                   
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Giá khuyến mãi</label>
                            <input
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Current seller price"
                            type="number"
                            id="current_seller_price"
                            value="${book.current_seller.price || ""}"
                            name="current_seller_price"
                            min="0"
                            
                            />
                    </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Đánh giá</label>
                            <input
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="rating_average"
                            type="number"
                            id="rating_average"
                            value="${book.rating_average || ""}"
                            name="rating_average"
                            min="0"
                            
                            />
                    </div>
                    </div>

                    

                    <div>
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Mô tả</label>
                        <textarea
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Description"
                        rows="8"
                        id="short_description"
                        name="short_description"
                        >${book.short_description || ""}
                        </textarea>
                    </div>

                    <div class="mt-4">
                    <button
                        id="update-btn"
                        type="submit"
                        class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                        Done
                    </button>
                    </div>
                </form>
            </div>
    </div>
    </div>
</section>
    `
}
export default UpdateBook;