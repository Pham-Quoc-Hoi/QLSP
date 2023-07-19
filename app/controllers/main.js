var productService = new ProductService();

function getEle(id) {
    return document.getElementById(id);
}

function getListProduct() {
    productService.getListProductApi() //nhận được API
        .then(function (res) {
            renderHTML(res.data);
        }) //resolt
        .catch(function (error) {
            console.log(error);
        });//reject
}

getListProduct();

function renderHTML(data) {
    var content = "";

    data.forEach(function (product, index) {
        content += `
        <tr>
            <td>${index + 1}</td>
            <td>${product.tenSP}</td>
            <td>${product.gia}</td>
            <td>
                <img width="50px" src="../../assets/img/${product.hinhAnh}"/>
            </td>
            <td>${product.moTa}</td>
            <td>
                <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editProduct('${product.id}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteProduct('${product.id}')">Delete</button>
            </td>
        </tr>
        `

    })
    getEle("tblDanhSachSP").innerHTML = content;
};

/**
 * Edit
 */
function editProduct(id) {
    // console.log(id);
    var title = "Sửa sản phẩm";
    document.getElementsByClassName("modal-title")[0].innerHTML = title;

    var button = `<button class="btn btn-info" onclick="updateProduct(${id})">Update product</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = button;

    productService.getProductByIdApi(id)
        .then(function (res) {
            console.log(res);
            var product = res.data;
            getEle("TenSP").value = product.tenSP;
            getEle("GiaSP").value = product.gia;
            getEle("HinhSP").value = product.hinhAnh;
            getEle("Mota").value = product.moTa;
        })
        .catch(function (error) {
            console.log(error);
        })
}

/**
 * Update Product
 */

function updateProduct(id) {
    var tenSP = getEle("TenSP").value;
    var gia = getEle("GiaSP").value;
    var hinhAnh = getEle("HinhSP").value;
    var moTa = getEle("Mota").value;

    var product = new Product(id, tenSP, gia, hinhAnh, moTa);

    productService.updateProductAPI(product)
        .then(function (res) {
            console.log(res);
            alert("Update success!");
            getListProduct();
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function (error) {
            console.log(error);
        })


}

/**
 * Delete Product
 */

function deleteProduct(id) {
    // console.log(id);
    productService.deleteProductAPI(id)
        .then(function (res) {
            // console.log(res);
            alert("Delete Success!");
            getListProduct();
        })
        .catch(function (error) {
            console.log(error);
        })
}
// deleteProduct(id);

/**
 * Add product
 */


getEle("btnThemSP").onclick = function () {
    var title = "Thêm sản phẩm";
    document.getElementsByClassName("modal-title")[0].innerHTML = title;

    var button = `<button class="btn btn-success" onclick="addProduct()">Add product</button>`;

    document.getElementsByClassName("modal-footer")[0].innerHTML = button;
}

function addProduct() {
    // console.log(12);
    var tenSP = getEle("TenSP").value;
    var gia = getEle("GiaSP").value;
    var hinhAnh = getEle("HinhSP").value;
    var moTa = getEle("Mota").value;

    var product = new Product("", tenSP, gia, hinhAnh, moTa);
    // console.log(product);
    productService.addProductAPI(product)
        .then(function (res) {
            console.log(res);
            alert("Add success!");
            getListProduct();
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function (error) {
            console.log(error);
        })

}