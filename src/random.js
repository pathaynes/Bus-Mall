export function getRandomInt(length) {
    return Math.floor(Math.random() * length); 
}
  
function randomItem(list) {
    const ranNum = getRandomInt(list.length);
    const item = list[ranNum];

    return item;
}

export default randomItem;