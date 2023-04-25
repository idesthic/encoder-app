module.exports = { encode, encodeResponse }

function encode (userString) {
    let counter = 1;
    let splitArray = userString.split("");
    let encoded = "";

    for (let i = 0; i < splitArray.length; i++) {
        if (splitArray[i] === splitArray[i+1]) {
            counter++;
            if (counter > 9) throw 'Single digit error';
        } else {
            encoded = encoded + splitArray[i] + counter;
            counter = 1;
        }
    }

    return encoded;
}

function encodeResponse (req, res) {
    const userString = req.body.userInput;
    let encoded = encode(userString);
    return res.send({output: encoded});
}