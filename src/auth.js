// ./src/auth.js
export let isAuthenticated = authenticate();
function authenticate() {
    // tutaj można dodać mechanizm (np. localStorage), 
    // który sprawdza czy użytkownik jest zalogowany
    return false;
}
export function login(user, callback) {
    // tutaj powinniśmy sprawdzić 
    // czy dane przekazane w [user] są poprawne
    setTimeout(() => {
        isAuthenticated = true;
        callback(); 
    }, Math.random() * 100); // imitacja asynchroniczności
}
export function logout(callback) {
    setTimeout(() => {
        isAuthenticated = false;
        callback();
    }, Math.random() * 100); // imitacja asynchroniczności
}

