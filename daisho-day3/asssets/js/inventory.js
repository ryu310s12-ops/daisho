//---------------------
//1. 在庫データ　（JSON的な構造)
//---------------------
const items= [
    {id: "D001",name:"オレンジジュース",price:150,stock:20,minStock:5},
    {id: "D002",name:"コーラ         ",price:150,stock:12,minStock:5},
    {id: "D003",name:"お茶           ",price:120,stock:30,minStock:10}
];

//HTML で　<tbody id="item-list">と書いた部分を　JavaScript から取得する
const tbody =document.getElementByld("item-list")