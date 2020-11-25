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

const scholarship = (name, ielts, gpa) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            if (typeof ielts === 'number' && typeof gpa === 'number'){
                (ielts.toFixed(2) >= 6.00 && gpa.toFixed(2) >= 3.75 && gpa.toFixed(2)<=4.00) ? resolve("Passed") : resolve("Failed") 
            } else {
                reject(new Error(`Dear ${name}. Your data is not correct`))
            }
        })
    }, 2000)
}

/*
Promise.all([buyPhone('Cherrybelle'), scholarship('Amanda', 6.00, 3.00)])
    .then(responseSuccess => {
        const [buyPhone, scholarship] = responseSuccess
        console.log(buyPhone('Cherrybelle'))
        console.log(scholarship('Amanda', 6.00, 3.00))
    })
    .catch(responseError => console.log(responseError))

*/

console.log('-----Running program 1 for 3s----- \n')

buyPhone('Cherrybelle')
    .then(responseSuccess => console.log(responseSuccess))
    .catch(responseError => console.log(responseError))

console.log('-----Running program 2 for 2s----- \n')

scholarship('Amanda', 6.00, 3)
    .then(responseSuccess => console.log(responseSuccess))
    .catch(responseError => console.log(responseError))
