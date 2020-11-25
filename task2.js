const getmonth = (callback) => {
    setTimeout(()=>{
        let error = false
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November']
        if (error){
            callback(null, month)
        }
        else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}

getmonth((parameter1, parameter2) => { 
    if (parameter1===null){
        console.log(parameter1)
        parameter2.map(m => {return console.log(m)})        
    }
    else {
        console.log(parameter1)                  
        console.log(parameter2)
    }
})