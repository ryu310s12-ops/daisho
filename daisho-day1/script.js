const helloBnt=document.getElementByld("helloBnt");
const message=document.getElementByld("message");

helloBnt.addEvebtListener("click",()=>{
    consthour=new Date().getHours();
    letgreeting="こんにちは！"
    if(hour<12){
        greeting="おはようございます！";
    }else if(hour>=18){
        greeting="こんばんは！";
    }
    message.textContent=`${greeting}GitHub Pagesの公開に成功しました!`;
});