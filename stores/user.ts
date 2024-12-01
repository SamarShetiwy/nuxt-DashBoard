import {defineStore} from 'pinia' ;

export const useUserStore = defineStore('user',{
    state: ()=>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
        file: null,
    }),
    actions:{
        resetForm(){
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.password = '';
            this.role = '';
            this.file = null;
        },
        setFormData(data){
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.email = data.email;
            this.password = data.password;
            this.role = data.role;
            this.file = data.file;
        }

    }
})


