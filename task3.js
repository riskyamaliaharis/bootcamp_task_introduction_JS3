//Program 1
const buyPhone = (brand) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const available = ['Oppo', 'iPhone', 'Samsung', 'Nokia', 'Vivo', 'Mito', 'Nexian', 'Sony Ericson']
            let brandPhone = brand
            let check = available.find(phone => { return phone.toLowerCase() === brand.toLowerCase()
            })
            if (check) {
                resolve(`${brandPhone} is available`)
            }
            else{
                reject(new Error(`${brandPhone} is not available`))
            }
        },3000)

    })
}


//Program 2
const scholarship = (name, ielts, gpa) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            let status;
            if (typeof ielts === 'number' && typeof gpa === 'number'){
                (ielts.toFixed(2) >= 6.00 && gpa.toFixed(2) >= 3.75 && gpa.toFixed(2)<=4.00) ? 
                status ="passed" : status="failed"
                resolve(status)                
            } else {
                reject(new Error(`Dear ${name}. Your data is not correct`))
            }
        })
    }, 2000)
}


async function queue() {
    try {
        console.log('Executing 1st program for 3s\n')

        await buyPhone('Cherrybelle').then(responseSuccess => console.log(responseSuccess)).catch(responseError => console.log(responseError))

        console.log('\nExecuting 2nd program for 2s\n')

        await scholarship('Amanda', 6.00, 3.78)
        .then(responseSuccess => console.log(responseSuccess))
        .catch(responseError => console.log(responseError))
        
    } catch (error) {
        console.log(error)
    }
}

queue()

// console.log('Executing 1st program for 3s\n')

// buyPhone('Cherrybelle')
//     .then(responseSuccess => console.log(responseSuccess))
//     .catch(responseError => console.log(responseError))

// console.log('Executing 2nd program for 2s\n')

// scholarship('Amanda', 6.00, 3.78)
//     .then(responseSuccess => console.log(responseSuccess))
//     .catch(responseError => console.log(responseError))
 