<script>
    import { onMount } from 'svelte';
    import toast, {Toaster} from 'svelte-french-toast';
    import { getRequest, postRequest } from '../lib/utilis/httpClient.js'
    import '../styles/main.css'

    onMount(() => {
        if (localStorage.getItem('token')) {
            window.location.href = '/tickets';
        }
    });

    let username = '';
    let password = '';

    const login = async () => {
        if(!username || !password) {
            toast.error('Please fill in both fields');
        } else {
            const response = await postRequest('user/login', {username, password});
            if(response.data.message === "login successful"){
                localStorage.setItem('token', response.data.user.id);
                localStorage.setItem('username', username);
                window.location.href = '/tickets';
            } else {
                toast.error('Invalid credentials');
            }
        }
    }

    const signin = async () => {
        if(!username || !password) {
            toast.error('Please fill in both fields');
        } else {
            const response = await postRequest('user/signin', {username, password});
            if(response.data.message === "user created"){
                toast.success('User created successfully');
                username = '';
                password = '';
            } else {
                toast.error('User already exists');
            }
        }
    }
</script>

<main>
    <div class="container">
        <img src="/favicon.png" alt="Ferry Tickets Logo" class="logo"/>
        <h1>Welcome to Ferry Tickets App!</h1>
        <p>First, log-in or create your user.</p>
        <div class="form-container">
            <input class="input-field" placeholder="Username" bind:value={username}/>
            <input class="input-field" type="password" placeholder="Password" bind:value={password}/>
            <button class="button" on:click={login}>Log-in</button>
            <button class="button" on:click={signin}>Sign-in</button>
            <small class="note">Note: Passwords are not encrypted or protected in this application. Use with caution.</small>
        </div>
    </div>
    <Toaster />
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Text:wght@400;700&display=swap');

    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .input-field {
        display: block;
        margin: 10px auto;
        padding: 10px;
        width: 80%;
        max-width: 300px;
        border: 1px solid #333;
        border-radius: 5px;
        background-color: #2c2c2c;
        color: #e0e0e0;
    }
    .note {
        font-weight: bold;
        display: block;
        margin-top: 20px;
        color: #cf6679;
        font-size: 0.9em;
    }
</style>