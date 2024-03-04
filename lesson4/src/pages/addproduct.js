import { useEffect, useState } from "../ultilities";

const AddProduct = function () {
  useEffect(function(){
      const addBtn = document.querySelector("#add-btn")
      addBtn.onclick = function(e){
          e.preventDefault()
          handleAddBook()
      }
  })

  const handleAddBook = function (){
    const formData = new FormData(document.querySelector("#add-form"))
    var data = {
      authors: [
          {
              name: null,
              slug: null,
          },
      ],
      book_cover: null,
      categories: {
          id: null,
          name: formData.get("name"),
          is_leaf: false,
      },
      current_seller: {
          id: 6337,
          sku: null,
          name: null,
          link: null,
          logo: null,
          price: formData.get("current_seller_price"),
          product_id: null,
          store_id: null,
          is_best_store: false,
          is_offline_installment_supported: null,
      },
      description: null,
      images: [
          {
              base_url:
                  "https://lh6.googleusercontent.com/proxy/xMwHtAUFMkGV8VjmL7g-wgil2ed8GNATrUWojdFS8c2VSAlBbCFcLUxc5ABFtZDQLUTCyGNjK7V8NVaxZ6qFsLTP_2hIeLTHJE5_ntoE4BE",
              is_gallery: true,
              label: null,
              large_url: null,
              medium_url: null,
              position: null,
              small_url: null,
              thumbnail_url: null,
          },
      ],
      list_price: formData.get("list_price"),
      name: formData.get("name"),
      original_price: null,
      quantity_sold: {
          text: null,
          value: null,
      },
      rating_average: formData.get("rating_average"),
      short_description: formData.get("short_description"),
      specifications: [
          {
              name: null,
              attributes: [
                  {
                      code: null,
                      name: null,
                      value: null,
                  },
                  {
                      code: null,
                      name: null,
                      value: null,
                  },
                  {
                      code: null,
                      name: null,
                      value: null,
                  },
                  {
                      code: null,
                      name: null,
                      value: null,
                  },
                  {
                      code: null,
                      name: null,
                      value: null,
                  },
                  {
                      code: null,
                      name: null,
                      value: null,
},
                  {
                      code: null,
                      name: null,
                      value: null,
                  },
                  {
                      code: null,
                      name: null,
                      value: null,
                  },
              ],
          },
      ],
  };
    fetch("http://localhost:3000/books" , {
        method: "post",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    
}
    return `
  <form style="padding: 20px 0px 100px 100px" id="add-form";>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class=" text-base font-semibold leading-7 text-gray-900">Add Product</h2>
  
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Name book</label>
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input type="text" name="name" id="name" autocomplete="namebook" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>
  
          <div class="sm:col-span-4">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input type="number" min="0" name="list_price" id="list_price" autocomplete="price" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>
          <div class="sm:col-span-4">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Price sale</label>
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input type="number" min="0" name="current_seller_price" id="current_seller_price" autocomplete="price" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>
          <div class="sm:col-span-4">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Đánh giá</label>
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input type="number" min="0" name="rating_average" id="rating_average" autocomplete="price" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>
  
          <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
            <div class="mt-2">
              <textarea id="short_description" name="short_description" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>

  
          <div class="col-span-full">
            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                </svg>
                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                  <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
        <button id="add-btn" type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add</button>
    </div>
  </form>
  
    `
}

export default AddProduct;