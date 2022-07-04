// faqs section script start


let question = document.querySelectorAll(".question");

question.forEach(question => {
    question.addEventListener("click", event => {
        const active = document.querySelector(".question.active");
        if (active && active !== question) {
            active.classList.toggle("active");
            active.nextElementSibling.style.maxHeight = 0;
        }
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if (question.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    })
})

// faqs section script end

// Alishba

// petSelection page script start

function petProduct(evt, productName) {
    var i, petSelectionForm, Box;
    petSelectionForm = document.getElementsByClassName("petSelectionForm");
    for (i = 0; i < petSelectionForm.length; i++) {
        petSelectionForm[i].style.display = "none";
    }
    Box = document.getElementsByClassName("Box");
    for (i = 0; i < Box.length; i++) {
        Box[i].className = Box[i].className.replace(" activeForm", "");
    }
    document.getElementById(productName).style.display = "block";
    evt.currentTarget.className += " activeForm";
    }
// petSelection page script end




// singleProdut page script start

function openProduct(evt, productName) {
    var i, Product, item;
    Product = document.getElementsByClassName("Product");
    for (i = 0; i < Product.length; i++) {
        Product[i].style.display = "none";
    }
    item = document.getElementsByClassName("item");
    for (i = 0; i < item.length; i++) {
        item[i].className = item[i].className.replace(" active", "");
    }
    document.getElementById(productName).style.display = "block";
    evt.currentTarget.className += " active";
    }
// singleProdut page script end