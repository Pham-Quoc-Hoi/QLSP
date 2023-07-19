function ProductService() {

    // Lấy thông tin SP
    this.getListProductApi = function () {
        return axios({
            url: "https://637b69c310a6f23f7fa80f9d.mockapi.io/api/Product",
            method: "GET"
        })
    }

    // Xóa SP
    this.deleteProductAPI = function (id) {
        return axios({
            url: `https://637b69c310a6f23f7fa80f9d.mockapi.io/api/Product/${id}`,
            method: "DELETE"
        })
    }

    // Thêm SP
    this.addProductAPI = function (product) {
        return axios({
            url: "https://637b69c310a6f23f7fa80f9d.mockapi.io/api/Product",
            method: "POST",
            // gửi product lên data (document trong thư viện axios)
            data: product
        })
    }

    // Lấy thông tin chi tiết SP
    this.getProductByIdApi = function (id) {
        return axios({
            url: `https://637b69c310a6f23f7fa80f9d.mockapi.io/api/Product/${id}`,
            method: "GET"
        })
    }
    this.updateProductAPI = function (product) {
        return axios({
            url: `https://637b69c310a6f23f7fa80f9d.mockapi.io/api/Product/${product.id}`,
            method: "PUT",
            data: product
        })
    }
}