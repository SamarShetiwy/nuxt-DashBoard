import { defineStore } from 'pinia';

export const useAllUserStore = defineStore('allUsers', {
    state: () => ({
        accessToken: getAccessToken(),
        users: [] as Array<{ id: string; name: string; email: string; role: string; updatedAt: string; creationAt: string; avatar: string }>,
        error: null as string | null,
    }),
    actions: {

        async fetchUsers(){
            const token = this.accessToken;
            if (token) {
                const headers = { Authorization: `Bearer ${token}` };
                try {
                const { data, error } = await useAsyncGql("getUsersQuery");
                console.log(data);

                if (data.value) {
                    this.users = data.value.users || [];
                } else if (error.value) {
                    this.error = error.value;
                    console.error("Error loading users:", error.value);
                }
                } catch (e) {
                this.error = 'Failed to fetch users';
                console.error('Error:', e);
                }
            } else {
                this.error = 'No token found!';
                console.error('No token found!');
            }
            },
        async deleteUser(id: string) {
            const token = this.accessToken;
            if (!token) {
                this.error = 'No token found!';
                console.error('No token found!');
                return;
            }
        
            try {
                const { data, error } = await useAsyncGql('deleteUser', { id });   
                if (data.value && data.value.deleteUser) {
                console.log('User deleted:', id);
                this.users = this.users.filter(user => user.id !== id);
                } else if (error.value) {
                this.error = error.value;
                console.error('Error deleting user:', error.value);
                }
            } catch (e) {
                this.error = 'Failed to delete user';
                console.error('Error:', e);
            }
            },

        }
});
