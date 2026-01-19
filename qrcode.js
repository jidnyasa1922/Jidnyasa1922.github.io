let qrcode = new QRCode(document.querySelector(".qrcode"));

qrcode.makeCode("Why did you scan me?");

function generateQr() 
{

    
    if (
        document.querySelector("input").value === "" ||

        document.querySelector("input").value === " ")
        {
            alert("Input can not be blank");
        }

        
        else {
            qrcode.makeCode(
                document.querySelector("input").value);
        }
}


