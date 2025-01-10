import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    email: '',
    password: '',
    role: '',
    avatar: null as string | null, 
  }),
  actions: {
    resetForm() {
      this.name = '';
      this.email = '';
      this.password = '';
      this.role = '';
      this.avatar =null;
    },

    setFormData(data: { name: string; email: string; password: string; role: string; avatar?: string }) {
      this.name = data.name;
      this.email = data.email;
      this.password = data.password;
      this.role = data.role;
      this.avatar = data.avatar;
    },
  },
  persist: true, 
});

