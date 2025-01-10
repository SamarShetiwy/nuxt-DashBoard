import { defineStore } from 'pinia';

export const addUserStore = defineStore('addUser', {
  state: () => ({
    users: [],
  }),
  actions: {
    async addUser(userData: { name: string; email: string; password: string; role: string; avatar?: string }) {
      try {
        const { data, error } = await useAsyncGql({
            operation: "addUser" , 
            variables: { data: userData },
        })

        if (data?.value?.addUser) {
          console.log('User added successfully:', data.value.addUser);
          this.users.push(data.value.addUser);
          return data.value.addUser;
        } else if (error?.value) {
          throw new Error(error.value.message || 'Failed to add user');
        }
      } catch (e) {
        console.error('Error adding user:', e);
        throw e;
      }
    }
  },
  persist: true,
});
