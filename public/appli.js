addEventListener('load',async ()=>{
    let sw = await navigator.serviceWorker.register('../sw.js');
    console.log(sw);  
})

async function subscribe(){
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey: 'BP2HyHF4_PpEGPwdIjK5MMbVNsIZuh5MdpVem4gzPTni0TwqxeXkDKeTwOrXMvKxepNG5y-CraKvuR7MehTYNL0'
    })
    console.log(JSON.stringify(push))  //for every personne that has clicked a diffrent code will be generated
    
}