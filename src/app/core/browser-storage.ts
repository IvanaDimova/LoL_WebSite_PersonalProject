
export class BrowserStorageUtility {

    constructor() {
    }

    static saveSessionValue(key: string, value: any) {
        window.sessionStorage.setItem(key, value);
    }

    static saveSessionObject(key: string, value: any) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }

    static getSessionValue(key: string): string | null {
        return window.sessionStorage.getItem(key);
    }

    static getSessionObject(key: string): any {
        const data = window.sessionStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    }

    static removeSessionKey(key: string) {
        window.sessionStorage.removeItem(key);
    }

    static clearSession() {
        window.sessionStorage.clear();
    }

}