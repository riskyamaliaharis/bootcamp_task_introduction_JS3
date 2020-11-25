async function getName() {
    try{    
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()    
        data.forEach((elemen)=> console.log(elemen.name)) 
    } catch (error){
        console.log(error)
    }   
}

getName()

