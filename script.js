const addItemBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');
const itemsList = document.getElementById('items-list');
const itemsInput = document.getElementById('customer-input');

const shoppingList = [];

const renderList = () => {
    itemsList.innerHTML = '';
    shoppingList.forEach((item) => {
        const li = document.createElement('li');
        li.innerText = item;
        itemsList.appendChild(li);
    })
};

addItemBtn.addEventListener("click", () => {
    const item = itemsInput.value;

    if (item !== '') {
        addItem(item);
        renderList();
        itemsInput.value = '';
    }
})

removeBtn.addEventListener("click", () => {
    removeLastItem();
    renderList();
})

const addItem = (item) => {
    const exist = shoppingList.some(existingItem => 
        existingItem.toLowerCase() === item.toLowerCase()
    );
    if (!exist) {
        shoppingList.push(item);
    } else {
        console.log('You already have this item')
    }
};

const removeLastItem = () => {
    shoppingList.pop();
};

const displayList = (shoppingList) => {
    console.log(shoppingList);
}

const filterItems = (search) => {
    return shoppingList.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );
};