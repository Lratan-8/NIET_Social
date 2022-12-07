//we are calling it users controller because this is one controller that can control many users.

module.exports.profile = function(req,res){

    // return res.end('<h1>This is our users profile action</h1>');
    return res.render('profile',{
        title: "profile"
    });

};

