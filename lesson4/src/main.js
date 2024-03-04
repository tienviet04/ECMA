import BookDetail from "./pages/detail";
import HomePage from "./pages/home"
import "../style.css"

import { render, router } from "./ultilities";
import Dashboard from "./pages/dashboard";
import UpdateBook from "./pages/update";
import AddProduct from "./pages/addproduct";


router.on('/', function () {
    render("#app", HomePage)
});

//Chi tiết sản phẩm

router.on('/book/:id', function ({ data }) {
    console.log(data.id);
    render("#app", () => BookDetail(data.id))
});

// Admin
router.on("/admin", function () {
    render("#app", Dashboard)
});

router.on("/admin/book/:id", function ({ data }) {
    render("#app", () => UpdateBook(data.id))
})

router.on("/admin/addBook", function () {
    render("#app", AddProduct)
});

router.resolve();

