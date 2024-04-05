function crypt() {
    if (document.getElementById("cryptBool").value == "encrypt") {

        getFiles(document.getElementById("input")).then((result) => {
            var ciphertext = CryptoJS.AES.encrypt(result, document.getElementById("key").value).toString();
            console.log(ciphertext)
            document.getElementById("out").value = ciphertext;
        })

        console.log("this should run first")
    }

    if (document.getElementById("cryptBool").value == "decrypt") {
        let cipherTextInput = document.getElementById("out").value;
        let decrypted = CryptoJS.AES.decrypt(cipherTextInput, document.getElementById("key").value);
        let text = window.atob(decrypted.toString(CryptoJS.enc.Utf8))
        console.log(text)
        document.getElementById("out").value = text;
    }
}

function getFiles(input) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let fileText = window.btoa(reader.result)
            resolve(fileText)
        })
        if (input.files[0]) {
            reader.readAsText(input.files[0])
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("input").value = ""
    document.getElementById("out").value = ""
    document.getElementById("button").addEventListener("click", () => {
        crypt();
    })
})
