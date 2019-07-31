export function getRandomInt(length) {
    return Math.floor(Math.random() * length); 
}
  
function threeRandom(list) {
    const newList = [];
    while(newList.length < 3) {
        const ranNum = getRandomInt(list.length);
        const item = list[ranNum];
        if(!newList.includes(item)) newList.push(item);
    }
    return newList;
}

export default threeRandom;