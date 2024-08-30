let products = {
    data :[
        {
        productName: "Regular Black T-shirt",
        category: "Topwear",
        price: "30",
        image: "images/black-tshirt.webp",
    },

    {
        productName: "Beige short skirt",
        category: "Bottomwear",
        price: "49",
        image: "images/beige mini-skirt.jpg",
    },
 
    {
        productName: "Basic knitted Top",
        category: "Topwear",
        price: "29",
        image: "images/knitted-top.webp",
    },

    {
        productName: "Black Leather jacket",
        category: "Jacket",
        price: "129",
        image: "images/black-leather-jacket.webp ",
    },

    {
        productName: "Brown men's jacket",
        category: "Jacket",
        price: "189",
        image: "images/brown-jacket.webp",
    },

    {
        productName: "Comfy Gray pants",
        category: "Bottomwear",
        price: "189",
        image: "images/comfy-gray-pants.jpg",
    },

    {
        productName: "Sporty Smart watch",
        category: "Watch",
        price: "189",
        image: "images/smart-watch.webp",
    },
  ]
};
 

for (let i of products.data) {
    //create cards
    let card = document.createElement("div");

    //card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");

    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    //img Tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name")
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    //Price
    let price = document.createElement("h6");
    price.innerText =  "$" + i.price;
    container.appendChild(price); 

    card.appendChild(container)
    document.getElementById("products").appendChild(card); 
}



//parameter passed from button (parameter same as category)
 function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {

        //check if value eqauls innerText 
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active")
        } else{
            button.classList.remove("active");
        }
    });


    //select all cards 
    let elements = document.querySelectorAll(".card");

    //loop through all cards
    elements.forEach((element) => {
    
        //display all cards on "all" button click
        if (value == "all") {
            element.classList.remove("hide");
        } 
        else {
            //check if element contains category class
            if(element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            }
            else{
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}


//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initialization
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    
    //loop through all elements
   elements.forEach((element, index) => {
    
    //check if text incluides the search value
    if(element.innerText.includes(searchInput.toUpperCase())) {

        //display matching card
        cards[index].classList.remove("hide");
    } else{

        //hide others
        cards[index].classList.add("hide");
    }
   });

});


//initially display all product
window.onload = () => {
    filterProduct("all");
};
















































