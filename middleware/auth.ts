import { useAuthStore } from '../store/auth';

export default defineNuxtRouteMiddleware((to, from) => {

  if (process.client) {
    const authStore = useAuthStore();

    if (!authStore.accessToken) {
      return navigateTo('/login');
    }
  }
});

