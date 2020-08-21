
const validate = values =>{
    const errors = {};
    const regexp = new RegExp('@');
    //-------------email----------------
    if(!values.email){
        errors.email = 'Required';
    }
    else if(!regexp.test(values.email)){
        errors.email = 'The format for email is wrong';
    }
    else if(values.email.length < 6){
        errors.email = 'Must be more than 6 charater';
    }

    //-------------password----------------
    if(!values.password){
        errors.password = 'Required';
    }
    else if(values.password.length < 6){
        errors.password = 'Must be more than 6 charater';
    }

    return errors;
};

module.exports = {
    validate
};