let data1= [17, 21, 23];
// let data2=[12, 5, -5, 0, 4];

// console.log(`... ${data1 [0]} 0C ... ${data1 [1]} 0C ... ${data1[2]} 0C...`);
let kumarSingh = function (arr){
    let str ='';
    for(let i =0; i<arr.length; i++){
        str += `${arr[i]} c in ${i +1}days ..`;
    }
    console.log('...' + str)
}
kumarSingh(data1)