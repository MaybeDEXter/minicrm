const Item = class Item{
    constructor(itemName, itemCount, itemCost, finalCost){
        this.itemName = itemName;
        this.itemCount = Number(itemCount);
        this.itemCost = Number(itemCost);
        this.finalCost = finalCost
    }
}

let items = [];
let itemsLenght = 0;

function AddNewItem(itemName, itemCount, itemCost){

    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        
        if(item.itemName == itemName){
            item.itemCount = Number(item.itemCount)+Number(itemCount)
            RefreshElement(index)
            console.log(`Name:${item.itemName}, Count:${item.itemCount}, itemCost:${item.itemCost}| all items count = ${itemsLenght}`);
            return;
        }
    }

    itemsLenght = items.push(new Item(itemName, itemCount, itemCost));
    console.log(`Name:${itemName}, Count:${itemCount}, itemCost:${itemCost}| all items count = ${itemsLenght}`);
    CreateNewItemHtml()
}

function CalculateCosts(){
    let costs = 0
    for (let index = 0; index < items.length; index++) {
        const item = items[index];

        costs = Number(costs) + (Number(item.itemCost)*Number(item.itemCount));
    }
    return costs;
}

const nameInput = document.getElementById("nameInput");
const countInput = document.getElementById("countInput");
const costInput = document.getElementById("costInput");
const costs = document.getElementById("costs");

function AddNewItemButton(){
    AddNewItem(nameInput.value, countInput.value, costInput.value);
    costs.innerHTML = `Итоговая сумма = ${CalculateCosts()} руб.`
    nameInput.value = ""
    countInput.value = ""
    costInput.value = ""
}

function RefreshElement(id){
    document.getElementById(id).childNodes.item(1).innerHTML = `${items[id].itemCount} шт.`
    document.getElementById(id).childNodes.item(2).innerHTML = `${items[id].itemCost} руб.`
    document.getElementById(id).childNodes.item(3).innerHTML = `${Number(items[id].itemCost) * Number(items[id].itemCount)} руб.`
}

function CreateNewItemHtml(){
    let id = itemsLenght - 1
    let div = document.createElement("div")
    div.className = "item"
    div.id = id

    let itemName = document.createElement("h1")
    itemName.className = "itemName"
    itemName.innerHTML = items[id].itemName

    let itemCount = document.createElement("h1")
    itemCount.className = "itemCount"
    itemCount.innerHTML = `${items[id].itemCount} шт.`

    let itemCost = document.createElement("h1")
    itemCost.className = "itemCost"
    itemCost.innerHTML = `${items[id].itemCost} руб.`

    let itemFinalCost = document.createElement("h1")
    itemFinalCost.className = "itemFinalCost"
    itemFinalCost.innerHTML = `${Number(items[id].itemCost) * Number(items[id].itemCount)} руб.`

    div.appendChild(itemName)
    div.appendChild(itemCount)
    div.append(itemCost)
    div.append(itemFinalCost)

    document.getElementById("cart").appendChild(div)
}



