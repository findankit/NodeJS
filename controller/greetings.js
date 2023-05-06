const httpstatus = require('http-status');



function greeting(req, res, next) {

    try {
        console.log(req.user);
        let user = {};
        user.name.firstname;

        res.status(200).json({
            message: "Success",
        });
    } catch (error) {
        next(error);
    }

}

function successGreeting(req, res) {

    res.send("Successfully introduced.");
}


module.exports = {
    greeting,
    successGreeting
}