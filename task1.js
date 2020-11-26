const cekHariKerja = (day) =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            const dateDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dateDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// THEN CATCH

cekHariKerja('senin')
.then(responseSuccess => {
    console.log(responseSuccess)
})
.catch(responseError => {
    console.log(responseError)
})

// Then = Mengeluarkan hasil ketika fullfilled yang disimpan dalam resolve. catch = mengeluarkan hasil ketika rejected yang disimpan dalam reject

// TRY CATCH

async function monthAsync(){
    try{
        let generate = await cekHariKerja('sabtu')
        await showAsync(generate)
    } catch(error){
        console.log(error)
    }
}

// Try = Blok untuk menyisipkan kode JS yang memungkinkan terjadi error. Catch = menangkap error pada blok try

function showAsync(generate){
    return console.log(generate)
}

monthAsync()
