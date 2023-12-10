const getStartedBtn = document.getElementById("get_started");
const moduleBox = document.querySelector(".module");
const closeBtn = document.querySelector(".close_btn");
const submitBtn = document.querySelector(".submit_btn");
const articleTitle = document.querySelector(".article_title-input");
const articleBox = document.querySelector(".blog_menu");
const articleShortText = document.querySelector(".article_short-text-input");
const articleImage = document.querySelector(".article_img-input");
const ulInnerBox = document.querySelector(".inner_blog-container");
const articleMainText = document.querySelector(".article_main-text-input");
const article = document.querySelector(".blog_menu-item");




function cleanAllBoxes() {
    articleImage.value = "";
    articleTitle.value = "";
    articleShortText.value = "";
    articleMainText.value = "";
    moduleBox.classList.remove("open");
};



getStartedBtn.addEventListener("click", () => {
    moduleBox.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    moduleBox.classList.remove("open");
});

window.addEventListener("keydown", (e) => {
    if(e.key == "Escape"){
        moduleBox.classList.remove("open");
    }
});


submitBtn.addEventListener("click", () => {
    if(document.getElementById("ul_o").getElementsByTagName("li").length == 3) {
        let ul = document.createElement("ul");
        ul.classList.add("blog_menu");

        ulInnerBox.appendChild(ul);


        if(articleImage.value == "") {
            alert("Please choose the photo of your article!")
        } else if (articleTitle.value == "") {
            alert("Please write the title of your article!")
        } else if(articleMainText.value == "" ) {
            alert("Please write text of your article!");
        } else if (articleShortText.value == "") {
            alert("Please write the short text of your article!")
        } else {
            let li = document.createElement("li");
            let img = document.createElement("img");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
    
            img.src = "images/blog-img.jpg";
            img.classList.add("blog_item-img");
    
            h2.innerHTML = articleTitle.value;
            h2.classList.add("blog_item-title");
    
            p.innerHTML = articleShortText.value;
            p.classList.add("blog_item-shorttext");
    
    
            li.classList.add("blog_menu-item");
            li.appendChild(img);
            li.appendChild(h2);
            li.appendChild(p);
    
            ul.appendChild(li);



            cleanAllBoxes();
        }


    } else {
        if(articleImage.value == "") {
            alert("Please choose the photo of your article!")
        } else if (articleTitle.value == "") {
            alert("Please write the title of your article!")
        } else if(articleMainText.value == "" ) {
            alert("Please write text of your article!");
        } else if (articleShortText.value == "") {
            alert("Please write the short text of your article!")
        } else {
            let li = document.createElement("li");
            let img = document.createElement("img");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
    
            img.src = "images/blog-img.jpg";
            img.classList.add("blog_item-img");
    
            h2.innerHTML = articleTitle.value;
            h2.classList.add("blog_item-title");
    
            p.innerHTML = articleShortText.value;
            p.classList.add("blog_item-shorttext");
    
    
            li.classList.add("blog_menu-item");
            li.appendChild(img);
            li.appendChild(h2);
            li.appendChild(p);
    
            articleBox.appendChild(li);
    
    
            cleanAllBoxes();
        }
    }
});






