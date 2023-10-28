enSolution.style.display = "none"
deSolution.style.display = "none"
decrypt.style.display = "none"
// encrypt.style.display = "none"

decryptBtn.addEventListener("click", ()=>{
    decrypt.style.display = "block"
    encrypt.style.display = "none"
})

encryptBtn.addEventListener("click", ()=>{
    decrypt.style.display = "none"
    encrypt.style.display = "block"
})

Ebtn.addEventListener("click", ()=>{
    // body.style.display = "none"
    const plainText = ePlain.value
    let CeaserArr= plainText.split("")
    let Ekey = Number.parseInt(eKey.value)

    var EnArr = CeaserArr.map((ch)=>{
           var ChCode = ch.charCodeAt()
           var NewChCode = ChCode+Ekey
           if (NewChCode < 'A'.charCodeAt(0)) {
            // Wrap around to the end of the range (e.g., from 'A' to 'Z')
            NewChCode += 26; // 26 characters in the English alphabet
        }
           var NewCh = String.fromCharCode(NewChCode)
           return NewCh
        })
        
        const EnString = EnArr.join('')

        enSolution.style.display = "block"
        eText.value = EnString
        console.log(EnString)
})

Decryptbtn.addEventListener("click", ()=>{
    const ceaser = ceaserText.value
    console.log(ceaser)
    let CeaserArr= ceaser.split("")
    let Dkey = Number.parseInt(dKey.value)

    var DeArr = CeaserArr.map((ch)=>{
           var ChCode = ch.charCodeAt()
           var NewChCode = ChCode-Dkey
           if (NewChCode < 'A'.charCodeAt(0)) {
            // Wrap around to the end of the range (e.g., from 'A' to 'Z')
            NewChCode += 26; // 26 characters in the English alphabet
        }
           var NewCh = String.fromCharCode(NewChCode)
           return NewCh
        })
        
        const EnString = DeArr.join('')

        deSolution.style.display = "block"
        dText.value = EnString
        console.log(EnString)
})










