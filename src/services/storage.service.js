const AUTH_TOKEN = "persist:auth";

class StorageService {
  setItem(key, value) {
    window.localStorage.setItem(key, value);
  }

  getItem(key) {
    return window.localStorage.getItem(key);
  }

  removeItem(key) {
    window.localStorage.removeItem(key);
  }

  clear() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.document.cookie = "";
  }

  getAccessToken = () => this.getItem(AUTH_TOKEN);
  removeAccessToken = () => this.removeItem(AUTH_TOKEN);
  setAccessToken = (token) => this.setItem(AUTH_TOKEN, token);
}

export const storageService = new StorageService();
