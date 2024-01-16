export function tiny(string){
    if(typeof string != string){
        throw new TypeError("Tinny wants a string");
    };
    return string.replace(/\s/g,"");
}