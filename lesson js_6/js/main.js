// сумма первых нулей
/*let first = -1;
let second = -1;
arr.forEach( (e,i) =>{
    
    if(
        (e==0) &&
     (first >= 0) &&
     (second < 0) &&
     (first != second)
    ){
        second = i;
    }
    if(e==0 && first < 0){
        first = i;
    }

 let sum = 0;
 arr.forEach( (e,i)=>{
    if(i>first && i<second){
        sum +=e;
    }
} 
console.log('First',first);
console.log('Second',second);
console.log(sum);*/


// задача 2

let str = 'Lorem Ipsum is simply du5mmy text of the printing and typesetting industry. Lorem Ips1um has been the industrys standard du2mmy text ever since the 1s, when an unknown printer took a galley of type and scram4bled it to make a type spe6cimen book. It has survived not only five cen8turies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 9s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';
/*let arr = str.split(' ');
console.log(arr.length);
let long = 0;
arr.forEach(word =>{
    if(word.length >5){
        long++
    }
})
console.log(long);*/

/*let arr = str.split('');
console.log(arr);
let summ =0;
arr.forEach(char =>{
    if(Number.isInteger(+char)){
        summ += Number (char);
    }
})
console.log(summ);*/

// удалить среднюю букву
/*let arr = str.split(' ');
arr = arr.map(word =>{
    if(word.length % 2 == 1 && word.length > 2){
     let position = Math.ceil(word.length/2)
     return word.slice(0,position-1) + word.slice(position)
    }
    return word;
})
console.log(arr);*/


let arr = [-22.38,41.16,37.12,43.87,-88.14,0,-26.32,-82.81,-90.33,-44.38,82.35,-38.83,-45.19,-47.45,-29.73,0.93,-37.58,-33.38,-39.3,-78.27,-52.57,-5.32,9.36,65.07,-54.47,24.97,-30.15,-93.27,-36.16,-16.35,-5.42,5.41,-60.63,-57.61,44.23,91.94,-25.37,36.24,-94.74,-88.16,76.48,-60.8,-99.29,-17.03,67.67,2.69,-38,-28.96,-73.03,46.16,-14.79,55.16,84.12,-84.13,-38.91,-4.65,22.7,-5.17,-38.3,92.96,80.32,0.53,-6.31,-13.81,-14.51,-37.06,-24.49,68.43,65.33,63.46,68.83,-28.9,-94.8,-30.68,33.3,-74.09,-10.08,48.59,94.93,49.54,79.86,-45.7,26.05,-48.95,-82.46,42.77,-55.77,-5.29,22.83,6.72,65.92,67.5,-58.23,24.31,-75.8,16.54,-67.01,-79.45,-67.47,-7.85,11.71,-94.72,-25.14,-62.34,45.74,84.72,-27.29,86.84,69.34,74.47,58.09,6.68,6.65,96.28,59.4,45.07,22.62,-42.84,-3.26,24.39,-14.99,-76.61,98.48,48.23,49.61,0.88,-91.71,-84.74,-59.66,16.17,-67.33,36.52,-10.78,0,-2.41,5.85,-16.87,64.06,-58.38,-64.63,59.64,50.73,95.95,-1.27,-0.23,12.25,-94.95,-62.84,-53.91,-54.64,33.88,-47.92,-99.38,23.42,-42.32,54.72,-70.99,24.42,50.71,-11.49,0.59,-14.66,10.66,-43.06,-91.77,95.47,-9.79,-50.21,11.43,-67.42,1.32,-54.34,49.34,39.49,-6.01,77.6,16.72,-45.73,-41.12,-65.75,-63.7,31.78,-27.67,46.94,-43.42,84.94,-51.64,66.95,8.07,18.34,-4.57,-8.71,78.3,74.75,-95.73,-62.2,-70.32,49.74,34.49,-4.67,-50.8,-62.41,87.76,-35.72,-90.62,97.76,22.8,-15.79,-47.15,-7.8,37.8,78.61,-65.18,28.31,-65.24,22.35,37.11,-92.21,-36.44,-31.34,-17.2,68.45,67.56,-94.65,-56,-14.93,75.87,-19.11,-99.03,99.7,41.78,58.63,92.5,49.16,62.87,99.47,-99.95,-88.93,14.38,-52.23,-45.64,-99.51,-67.66,-6.89,78.74,-54.1,-10.63,-80.06,-93.49,-17.5,-34.52,57.64,-52.27,26.53,-15.37,-26.61,43.45,84.87,17.67,67.86,9.9,28.92,-79.08,9.82,-27.22,90.03,-62.36,24.14,98.45,58.95,46.98,4.89,46.24,-3.63,-6.72,-23.32,-63.04,24.48,78.45,-24.54,-59.96,28.2,-66.13,-63.02,25.56,92.29,-31.72,-12.3,36.01,-77.44,30.67,68.05,-19.63,-64.08,-51.97,84.6,-7.14,57.86,66.1,15.81,-74.02,40.48,-51.92,98.98,-37.34,89.24,-18.03,35.99,1.83,42.87,-58.42,-13.43,62.88,50.22,40.22,27.46,-95.85,4.49,64.16,-10.37,80.98,-41.18,-20.04,95.97,59.9,-24.51,-1.32,44.32,-2.51,55.18,-50.28,49.75,-55.77,-60.82,13.39,87.42,-47.56,-82.85,8.31,-27.94,-88.79,-66.29,97.49,-51.27,-10.73,-38.74,54.22,20.02,21.4,-15.27,4.73,15.42,89.14,-68.17,36.33,-14.63,34.83,-95.44,-49.21,-96.64,1.57,72.98,38.34,22.98,9.21,64.15,-89.21,-99.65,63.92,6.23,-16.18,21.01,-11.09,32.15,-69.39,-4.66,87.62,35.32,-84.14,-46.24,64.57,46.07,-45.19,-37.36,55.95,71.78,-61.34,11.21,-25.56,-74.82,80.41,76.29,56.76,-96.91,21.3,-38.59,-14.67,78.99,73.63,84.26,-24.43,63.2,-71.16,39.14,86.7,-14.56,-86.32,35.93,85.86,1.58,83.02,59.48,83.24,69.89,41.43,50.01,-66.25,98.52,2.96,-0.35,35.68,-17.1,-51.47,47.57,29.47,47.02,-14.85,-26.09,-77.38,-13,32.04,-56.9,-89.85,-82.11,-62.52,85.19,19.13,-93.4,-17.07,54.2,74.01,-38.89,-10.17,-16.14,83.81,-50.63,47.44,-53.92,86.96,-87.92,15.23,49.86,-6.94,-43.84,-23.96,-86.5,-91.59,59.01,-69.01,14.74,54.25,96.4,-12.14,70.39,-55.76,-87.68,-76.44,-26.11,-14.38,7.27,-76.93,55.95,97.91,-20.97,94.74,-58.58,-0.06,-54.76,-56.78,-25.13,49.65,60.23,-22.36,-81.33,68.76,-38.71,36.22,-32.09,21.15,77.61,31.5,-3.98,-84.75,97.53,-62.89,38.11,57.89,11.93,6.85,43.74,-22.81,8.71,62.83,-50.99,15.43,95.59,98.51,-30.9,90.08,-67.15,48.39,-38.6,-44.71,83.62,-54.38,-6.94,97.3,22.05,71.21,27.65,-48.68,46.93,76.41,-15.53,50.52,77.39,60.39,-65.13,-94.98,-56.34,-36.87,-31.39,23.68,-98.51,-4.35,23.06,-25.69,93.38,-8.98,23.36,-91.49,20.97,-89.26,9.52,-35.82,-23.1,-58.03,-9.09,-75.14,37.85,11.89,54.81,55.3,6.16,-30.43,-54.69,70.68,-42.64,-35.57,11.3,5.98,-47.46,15.44,4.36,-59.11,84.04,91.85,75.22,-16.15,-18.01,-82.81,-22.46,-26.85,47.54,-96.69,3.63,92.04,-13.55,-81.54,35.19,-35.12,-3.36,12.61,84.18,-95.08,-27.13,-8.28,-77.46,66.6,4.77,76.57,59.23,73.82,12.67,-93.33,52.72,15.58,-66.41,-57.07,-52.4,-26.52,69.21,-29.88,72.87,-56.53,-71.92,72,14.03,9.58,-62.78,-70.38,24.88,49.75,-29.32,-94.7,12.2,34.76,-9.05,91.8,37.8,-30.07,33.74,19.89,91.05,1.95,-28.39,6.68,20.65,-66.08,42.31,-79.07,53.83,47.58,18.73,40.28,79.95,82.94,84.73,-83.56,-40.22,-95.77,-12.78,59.98,12.84,-50.51,69.2,-19.73,38.89,49.36,-18.69,-2.64,22.7,27.93,6.48,-26.74,1.74,-49.05,82.67,88.24,33.48,-92.7,-31.95,81.09,-6.73,-36.18,-66.64,17.1,9.94,-7.89,34.18,49.21,7.29,79.74,74.06,-15.07,27.24,-57.16,-70.76,-32.71,10.98,55.18,-50.9,81.85,-93.21,-43.57,-0.92,59.01,-63.05,-16.14,5.98,35.06,-30.45,78.32,-98.44,-10.51,1.19,8.81,17.72,38.48,50.6,25.37,-91.74,1.92,-41.33,-63.56,33.97,33.39,16.97,44.92,-3.92,26.95,43.56,21.76,-91.77,29.58,46.95,-34.57,85.95,-4.64,-93.11,-67.22,-0.97,-37.15,84.56,85.57,2.79,10.72,72.34,-26.89,39.59,-26.19,62.74,-63.51,19.47,-42.4,-58.4,-39.44,98.63,-3.64,33.48,-52.28,62.06,72.28,41.74,-48.37,-47.29,-35.06,-50.58,33.28,-93.22,13.08,-69.68,74.13,16.13,-6.37,57.95,-80.1,-65.64,48.75,15.57,-43.61,-92.99,-72.76,-29.03,11.26,57.06,-47.21,76.8,-7.38,55.64,22.95,-38.68,34.52,42.19,34.67,-88.07,-65.85,53.45,-16.7,-19.98,-59.22,-48.65,25.08,26.78,-31.45,-2.61,8.06,12.11,28.96,21.75,-8.36,4.85,25.81,-36.19,-80.88,-47.36,72.96,84.29,-38.99,32.59,-47.49,8.46,3.96,0.45,-68.18,33.16,74.05,45.41,51.6,-47.27,-44.27,-10.51,15.37,0.7,-10.2,39.78,-13.37,-30.53,95.21,-17.54,-81.6,-88.44,7.06,-55.32,-85.44,82.56,-82.97,47.37,30.71,78.52,24.51,63.33,43.7,47.93,26.92,3.17,87.41,44.28,80.55,61.5,-40.84,-13.73,14.43,-24.48,19.1,-37.21,56.55,-34.21,-29.23,-80.77,43.9,-95.19,-80.02,-77.33,-84.36,-46.93,-97.61,-22.07,-32.39,-59.34,-60.28,-41.36,35.25,56.34,87.52,27.87,93.46,-16.07,-10.65,-95.54,14.2,-77.54,63.32,-11.52,35.05,-94.05,-46.67,-95.27,32.2,-24.1,-97.01,20.17,-82.31,-71.05,67.09,-21.03,66,70.03,30.04,-68.96,-45.85,-78.97,57.31,-31.65,-16.77,-63.66,-58.94,57.18,28.21,-67.78,34.43,55.34,-99.35,15.29,-17.54,-37.18,-6.57,-24.52,18.32,29.31,-66.73,56.21,-39.13,95.24,-28.32,-20.53,66.28,-98.78,87.55,-28.88,-51.69,-85.6,4.91,8.03,-42.38,20.3,30.44,-81.69,7.68,48.98,70.16,-24.33,-80.72,72.43,-4.09,44.35,-35.21,-73.07,25.28,71.08,-25.6,-54.66,9.32,-44.35,83.4,26.02,-20.27,-60.59,4.35,65.83,-68.3,-11.31,-57.92,58.69,-15.24,-47.99,4.69,77.03,-34.18,-95.7,-59.2,-26.59,60.87,67.41,-27.35,-27.89,-82.77,-47.23,45.37,53.01,79.95,-27.57,0,78.29,28.79,43.3,-89.22,-20.29,-76.32,27.92,-2.97];
// числа больше среднего арифмитического

let summ = arr.reduce( (a,b) => a+b)/*a = -22.38,b=41.16 */
let numMidle = summ / arr.length;
let rezult = arr.filter(e => e > numMidle );
console.log(numMidle,rezult);
