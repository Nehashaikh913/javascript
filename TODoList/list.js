const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery")
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement
let editFlag = false;
let editID = "";

$("form").submit(addItem);
$(clearBtn).click(clearItem);
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        const element = document.createElement("article");
        element.classList.add("grocery-item");
        const attr = document.createAttribute("data-id")
        attr.value = id;
        element.setAttributeNode(attr)
        element.innerHTML = `  <p class="title">${value}</p>
       <div class="btn-container">
        <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
        <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
       </div>`

        const deleteBtn = element.querySelector(".delete-btn")
        const editBtn = element.querySelector(".edit-btn")

        $(deleteBtn).click(deleteItem)
        $(editBtn).click(editItem)

        //    append
        list.appendChild(element);
        // alert
        displayAlert("item added to the list", "success")
        container.classList.add("show-container")
    }
    else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert("Value change", "success");
        editLocalStorage(editID, value);
        setBackToDefault();
    }
    else {
        displayAlert("please Enter Value", "danger")
    }
    setBackToDefault();
    addToLocalStorage(id, value);
}

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`)

    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`)
    }, 1000)
}
// clear
function clearItem() {
    const items = document.querySelectorAll(".grocery-item")
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item)
        })
    }
    container.classList.remove("show-container")
    displayAlert("Empty list", "danger")
    setBackToDefault();
}
// edit

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // editelem
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "Edit"

}


// delete
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element)
    if (list.children.length == 0) {
        container.classList.remove("show-container")
    }
    displayAlert("Item removed", "danger")
    setBackToDefault();

    // removefromlocal

    // removeFromLocalStorage(id);
}

// setback to default 

function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "Submit";
}
// add to local
function addToLocalStorage(id, value) {
    const grocery = {id,value};
}

function removeFromLocalStorage(id) {

}

function editLocalStorage(id, value) {

}

// localStorage.setItem("orange",JSON.stringify(["item1","item2"]))
// const oranges = JSON.parse(localStorage.setItem("orange"))
// localStorage.removeItem("orange")
