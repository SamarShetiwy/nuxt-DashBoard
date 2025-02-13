import { defineStore } from 'pinia';
import { 
  getAccessToken, 
  getRefreshToken,
  setAccessToken,
  setRefreshToken, 
  removeAccessToken, 
  removeRefreshToken ,

} from '../utils/auth'; 

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as null | { username: string; email: string; password: string },
        accessToken: getAccessToken(),
        refreshToken: getRefreshToken(),
        }),
    actions: {
      register(username: string, email: string, password: string) {
        this.user = { username, email, password };
        console.log('User registered:', this.user);
      },
      async login(email: string, password: string) {
          try {
              const { data } = await useAsyncGql({
                  operation: 'LOGIN',
                  variables: { email, password },
              });
          if (data?.value?.login) {

              setAccessToken(data.value.login.access_token);
              setRefreshToken(data.value.login.refresh_token);
              this.accessToken = data.value.login.access_token;
              this.user = data.value.login.user || null;
              const router = useRouter();
              router.push('/users/all-users');
          } else {
              throw new Error( ' >>>>>>>>>>> Invalid login response');
          }
          } catch (error) {
          console.error('>>>>>>>>>> Login failed:', error);
          throw error;
          }
      },
      logout(router: any) {
          ElMessageBox.confirm(
            'Are you sure you want to log out?',
            'Confirmation',
            {
              confirmButtonText: 'Yes',
              cancelButtonText: 'No',
              type: 'warning',
            }
          )
          .then(() => {
            removeAccessToken();
            removeRefreshToken();
            this.accessToken = null;
            this.user = null;
            router.push('/login');
          })
          .catch(() => {
            console.log('Logout canceled');
          });
        },
    },
    persist: true,
});
