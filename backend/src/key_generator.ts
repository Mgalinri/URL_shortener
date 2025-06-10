const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(){
    let key = "";
    for (let i=0; i<5; i++){
        const randomIndex = Math.floor(Math.random() * alphanumeric.length+1);
        key += alphanumeric[randomIndex];
    }
    return key;
}

module.exports = {
    generateKey}