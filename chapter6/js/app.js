// Try catch 문
// try {    
//     const num = Number("abc");
//     if (isNaN(num)) {
//         throw Error('abc is not Number');
//     }
//     console.log(num);
// } catch(e) {
//     console.log(e);
// }

// Async Await Example
async function asyncSample() {
    try {
        await printLogAfter1Sec();
        console.log(2222);
    } catch(e) {
        console.log(e);
    }    
}


// Async(비동기) Code 작성 
// Promise 패턴
function printLogAfter1Sec() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(11111);
            resolve();
            // if (err) {
            //     reject();
            // } else {
            //     resolve();
            // }            
        }, 1000);
    })
}

// printLogAfter1Sec()
//     .then(() => {
//         console.log(2222);
//         return printLogAfter1Sec();        
//     })
//     .then(() => {
//         console.log(2222);
//         return printLogAfter1Sec();        
//     })
//     .then(() => {
//         console.log(2222);
//         return printLogAfter1Sec();        
//     })
//     .then(() => {
//         console.log(2222);
//         return printLogAfter1Sec();        
//     })
//     .then(() => {
//         console.log(2222);
//         return printLogAfter1Sec();        
//     })
//     .then(() => {
//         console.log(2222);
//         return printLogAfter1Sec();        
//     })
//     .catch(() => {
//         console.log(err);
//     })

// setTimeout(() => {
//     console.log(11111);
// }, 1000);

// setTimeout(() => {
//     console.log(22222);
// }, 999);

// Callback
// function printLogAfter1Sec(func, errFunc) {
//     setTimeout(() => {
//         console.log(11111);
//         if (err) {
//             // 에러가 발생한 경우
//             errFunc();
//         } else {
//             func();
//         }        
//     }, 1000);
// }

// Callback Hell
// printLogAfter1Sec(() => {
//     printLogAfter1Sec(() => {
//         console.log(2222);
//         printLogAfter1Sec(() => {
//             console.log(2222);
//             printLogAfter1Sec(() => {
//                 console.log(2222);
//                 printLogAfter1Sec(() => {
//                     console.log(2222);
//                     printLogAfter1Sec(() => {
//                         console.log(2222);
//                     });
//                 });
//             });
//         });
//     });
//     console.log(2222);
// });