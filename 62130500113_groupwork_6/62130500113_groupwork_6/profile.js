const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    },
    chosensubject: {
        presence: true
    }
}

const app =Vue.createApp({
    data() {
        return {
            image: "images/profile.jpg",
            firstname: null,
            lastname: null,
            age: null,
           
            email: null,
            phone: null,
            chosensubject: null,
            subject_lists: [{subject_id: 1, subject_name: 'IT'},
                            {subject_id: 2, subject_name: 'DSI'},
                            {subject_id: 3, subject_name: 'CS'}],
            errors: null,
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    age: this.age,
                                    gender: this.gender,
                                    email: this.email,
                                    phone: this.phone,
                                    chosensubject: this.chosensubject},
                                    constraints)
            if(!this.errors){
                alert("Your profile is updated successfully.")
            }
        }
    }
})

app.mount('#app')
