function getElements() {
    //import the components
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const rePassword = document.getElementById('rePassword').value.trim();
    // const submit = document.getElementById('submit');

    validateName(name);
    validateEmail(email);
    validatePassword(password);
    validateRePassword(rePassword, password);
    // validateSubmit(submit);
}

function validateName(name) {
    if (name !== null) {
        if (isNaN(name)) {
            if (name.length < 3) {
                alert('name must be at least 3 characters');
                return false;
            }
            if (name.length > 20) {
                alert('name cannot be more than 20 characters');
                return false;
            }
        } else {
            alert('name cannot be number');
            return false;
        }
    }
    else {
        alert('name cannot be empty');
        return false;
    }
    return true;
}

function validateEmail(email) {
    let atPosition = email.includes('@');
    if (email !== null) {
        if (isNaN(email)) {
            if (email.length < 8) {
                alert('Password must be at least 8 characters');
                return false;
            }
            if (email.length > 20) {
                alert('Password cannot be more than 20 characters');
                return false;
            }
            if (atPosition !== 0) {
                if (atPosition < 1) {
                    alert('Email cannot start with @');
                    return false;
                } else if (email.lastIndexOf('@') < 4) {
                    alert('Email must have characters after @');
                    return false;
                }
            } else {
                alert('Email must have @ symbol at Proper Position');
            }
            
        } else {
            alert('Email cannot be a number');
            return false;
        }
    }
    else {
        alert('Password cannot be empty');
        return false;
    }
    return true;
}

function validatePassword(password) {
    if (password !== null) {
        if (isNaN(password)) {
            if (password.length < 8) {
                alert('Password must be at least 8 characters');
                return false;
            }
            if (password.length > 20) {
                alert('Password cannot be more than 20 characters');
                return false;
            }
        } else {
            alert('Password cannot be a number');
            return false;
        }
    }
    else {
        alert('Password cannot be empty');
        return false;
    }
    return true;
}

function validateRePassword(rePassword, password) {
    if (rePassword != null) {
        if (rePassword !== password) {
            alert('Passwords do not match');
            return false;
        }
    } else {
        alert('Re-enter Password cannot be empty');
        return false;
    }
    return true;
}