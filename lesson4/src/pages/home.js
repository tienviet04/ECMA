import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import BannerComponent from '../components/banner'
import NavComponents    from '../components/nav'


import data from '../../db.json' assert {type: 'json'}
import Book from '../components/book'


const HomePage = function () {
  return `
      ${HeaderComponent()}
      <div class="flex w-[1240px] mr-auto ml-auto ">
      ${NavComponents}
        <div class="w-full h-auto ">
          ${BannerComponent()}
          <div class="grid grid-cols-4 gap-3 pb-10 ">
            ${data.books.map(function (book) {
            return Book(book)
            }).join("")}
          </div>
        </div>
      </div>
      ${FooterComponent()}
    `
}

export default HomePage;