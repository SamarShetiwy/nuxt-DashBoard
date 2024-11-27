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
                try {
                const { data, error } = await useAsyncGql("getUsersQuery");

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
    },
});
