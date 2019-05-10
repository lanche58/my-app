export default {
    getItem(key) {
        let value;
        try {
            value = localStorage.getItem(key);
        } catch(err) {
            console.error('localStorage.getItem报错', err.message);
        } finally {
            return value;
        }
    },
    setItem(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch(err) {
            console.error('localStorage.setItem报错', err.message);
        }
    }
}