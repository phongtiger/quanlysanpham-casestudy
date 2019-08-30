let Product = function (id, name, detail, category) {
    this.id = id;
    this.name = name;
    this.detail = detail;
    this.category = category;

    this.getid = function() {
        return this.id;
    };
    this.getname = function() {
        return this.name;
    };
    this.getdetail = function() {
        return this.detail;
    };
    this.getcategory = function() {
        return this.category;
    };
    this.setid = function (id){
        this.id = id;
    };
    this.setname = function(name){
        this.name = name;

    };
    this.setdetail = function (detail){
        this.detail = detail;

    };
    this.setcategory = function (category){
        this.category = category;

    };


};