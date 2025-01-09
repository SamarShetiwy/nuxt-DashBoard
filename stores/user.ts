import {defineStore} from 'pinia' ;

export const useUserStore = defineStore('user',{
    state: ()=>({
        name: '',
        email: '',
        password: '',
        role: '',
        file: null,
    }),
    actions:{
        resetForm(){
            this.name = '';
            this.email = '';
            this.password = '';
            this.role = '';
            this.file = null;
        },
        setFormData(data){
            this.name = data.name;
            this.email = data.email;
            this.password = data.password;
            this.role = data.role;
            this.file = data.file;
        }

    }
})


