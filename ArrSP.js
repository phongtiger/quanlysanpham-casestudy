let Manage = function (name) {
    this.products = [];
    this.getProducts = function () {
      return this.products;
    };
    this.addProduct = function (product) {
        this.products.push(product);
    };
    this.deleteId = function (id) {
        this.products.splice(id,1);
    };
    this.moveUp = function (i) {
        document.getElementById("id").value = this.products[i].getid();
        document.getElementById("name").value = this.products[i].getname();
        document.getElementById("detail").value = this.products[i].getdetail() ;
        document.getElementById("category").value = this.products[i].getcategory() ;
    };
    this.Change= function(){
        let i = document.getElementById("change").value;
        let id = document.getElementById("id").value;
        let name = document.getElementById("name").value;
        let detail = document.getElementById("detail").value;
        let category = document.getElementById("category").value;
        this.products[i].setid(id);
        this.products[i].setname(name);
        this.products[i].setdetail(detail);
        this.products[i].setcategory(category);
    };
    this.getListProducts = function (arrProduct) {
        let list = "";
        for (let i = 0; i < arrProduct.length;i++){
            list += '<tr>';
            list += '<td>'+(i+1)+ '</td>';
            list += '<td>'+arrProduct[i].getid()+ '</td>';
            list += '<td>'+arrProduct[i].getname()+ '</td>';
            list += '<td>'+arrProduct[i].getdetail()+ '</td>';
            list += '<td>'+arrProduct[i].getcategory()+ '</td>';
            list += '<td><button class="button button4"  type="button" onclick="deleteSp('+i+')">Delete</button><button class="button button5" type="button" onclick="changeSp('+i+')">Edit</button>';
            list += '</tr>'
        }
        return list;
    };
    this.showProducts = function (idList, arrProduct) {
        document.getElementById(idList).innerHTML = this.getListProducts(arrProduct);
    }

};
