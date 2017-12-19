import swURL from "file-loader?name=./sw.js!babel-loader!./sw.js";

function install(){

    if(!navigator.serviceWorker) return;
    
    navigator.serviceWorker.register(swURL, {scope: '/creditcalculator/'}).then(reg => {
        //console.log('sw registered');
    });
}

export default install;