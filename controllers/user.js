const User = require("../models/user")

module.exports.renderSignup = (req, res) => {
    res.render("users/singup.ejs");
}

module.exports.sinup = async(req, res) => {
    try{
        let { username, email, password } = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    }catch(e){
        req.flash("error", e.message);
        res.redirect("/singup")
    }
}


module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}


module.exports.login = async(req, res) => {
    req.flash("success", `Welcome back ${req.user.username} on Wanderlust?`);
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}


module.exports.logout = (req, res, next)=>{
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success","You are logged out!");
        res.redirect("/listings");
    });
}