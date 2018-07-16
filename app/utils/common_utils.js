export function getClientLanguage(){
  if(navigator.browserLanguage)
    return navigator.browserLanguage.slice(0,2);
  if(navigator.language)  
    return navigator.language.slice(0,2);
}