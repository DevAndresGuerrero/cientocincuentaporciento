let Home = require('./Pages/Home.vue').default;
let Login = require('./Pages/Login.vue').default;
let Logout = require('./Pages/Logout.vue').default;
let Register = require('./Pages/Register.vue').default;
let ForgotPassword = require('./Pages/ForgotPassword.vue').default;

// Import Components User
let UserIndex = require('./components/User/index.vue').default;
let userCreate = require('./components/User/create.vue').default;
let userEdit = require('./components/User/edit.vue').default;

export const routes = [
    { path: '/', component: Login, name: '/'},
    { path: '/home', component: Home, name: 'home'},
    { path: '/logout', component: Logout, name: 'logout'},
    { path: '/register', component: Register, name: 'register'},
    { path: '/forgot', component: ForgotPassword, name: 'forgot'},

    // Routes User
    { path: '/users', component: UserIndex, name: 'userIndex'},
    { path: '/users/create', component: userCreate, name: 'userCreate'},
    { path: '/users/edit/:id', component: userEdit, name: 'userEdit'},
]
