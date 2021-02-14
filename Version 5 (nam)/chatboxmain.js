//variables
const db = firebase.database();
let msg;

document.getElementById("send").addEventListener('click',()=>{
    let id = db.ref().child('chats').push().key;
    msg = document.getElementById("msg").value;
    db.ref("/chats"+id).set({
        Name:"Namrutha",
        Message: msg,
    })
})


let chats = document.getElementById("chats");


db.ref("/chats").on("value",snap=>{
    snap.forEach(child=>{
        let ele = document.createElement("li");
        ele.innerText = `${child.val().user} : ${child.val().message}`
        chats.appendChild(ele);
    })
})
