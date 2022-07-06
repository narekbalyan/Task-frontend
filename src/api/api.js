export const api = {
    async getAccounts() {
        const res = await fetch('http://localhost:3000/accounts');
        const users = await res.json();
        return users;
    },

    async getAccountsById(id) {
        const res = await fetch(`http://localhost:3000/accounts/${id}`)
        const user = await res.json();
        return user;
    }
}