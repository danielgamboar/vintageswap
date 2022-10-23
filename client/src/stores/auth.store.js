import { defineStore } from 'pinia';
import { userLogin } from '../helpers/api/Auth/aut.api';
import router from '../routes';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null,
  }),
  actions: {
    async userLogin(data) {
      const user = await userLogin(data);
      this.user = user;

      localStorage.setItem('user', JSON.stringify(user));

      router.pushthis.returnUrl || '/';
    },
    logout() {
      localStorage.removeItem('user');
      this.user = null;
    },
  },
});
