//main js file
/*
function Product(name, price, image, description) {
	this.name = name;
	this.price = price;
	this.image = ;
	this.description = description
}

var products = [];

var cart = [];


var poloShirt = new Product ('Polo Shirt', 24.99, , 'Men\'s Polo Shirt');
var sundress = new Product ('Sundress', 29.99, , 'Ladies\' Sundress');
var shoes = new Product ('Shoes', 29.99, , 'Men\'s and Women\'s shoes');
var blouse = new Product ('Blouse', 18.99, , 'Women\'s Blouse');
var jeans = new Product ('Jeans', 29.99, , 'Men\'s and Women\'s shoes');
*/


var prodList=[
	{"name": "Polo Shirt",
	 "price": "$24.99",
	 "pic": "../img/poloShirt.jpg",
	 "description:"Men's Polo Shirt"
	}, 
	{"name": "Sundress",
	 "price": "$29.99",
	 "pic": "../img/sundress.jpg"
	 "description":"Ladies' Sundress"
	},
	{"name": "Shoes",
	 "price": "$74.99",
	 "pic": "../img/shoes.jpg"
	 "description":"Men's and Women's Shoes"
	},
	{"name": "Blouse",
	 "price": "$18.99",
	 "pic": "../img/shoes.jpg"
	 "description":"Women's Blouse"
	},
	{"name": "Jeans",
	 "price": "$94.99",
	 "pic": "../img/jeans.jpg"
	 "description":"Men's and Women's Jeans"
	}
]

$(document).ready(function(e){
	//e.preventDefault();
	(prodList.forEach(function(ele, index){
		$("#prod").append("<div class='col-sm-4 col-lg-4 col-md-4'><div class="thumbnail"><img src="+ele.pic+"><div class="caption"><h4 class="pull-right">"+ele.price+"</h4><h4>"+ele.name+"</h4></div></div></div>");
	}));
});








