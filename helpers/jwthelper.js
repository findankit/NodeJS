const jwt = require('jsonwebtoken');

const TokenSecret = 'aNdRgUkXp2s5v8x/A?D(G+KbPeShVmYq';

function createJwt(data) {
    let token = jwt.sign(data, TokenSecret, {
        expiresIn: '1h'
    });
    return token;
}

function decodeJwt(token) {
    let data = jwt.decode(token);
    return data;
}


function jwtVerify(token) {
    let user = jwt.verify(token, TokenSecret);
    console.log(`check validity::`, user);
}




module.exports = {
    createJwt,
    decodeJwt,
    jwtVerify
};