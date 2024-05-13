const user = {
    _email: 'ritesh@ggog.com',
    _password: 'abcs',

    get email () {
        return this._email.toUpperCase()
    },
    set email (value) {
      this._email = value  
    }
}

const tea = Object.create(user)
console.log(tea.email);