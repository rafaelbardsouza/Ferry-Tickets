<script>
    import toast, {Toaster} from 'svelte-french-toast';
    import { getRequest, postRequest } from '../lib/utilis/httpClient.js'
    import '../styles/main.css'
    let username = '';
    let password = '';

    const login = async () => {
        if(!username || !password) {
            toast.error('Please fill in both fields');
        } else {
            const response = await postRequest('user/login', {username, password});
            if(response.error) {
                toast.error(response.error);
            } else {
                localStorage.setItem('token', response.data.user.id);
                window.location.href = '/tickets';
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
            <button class="button" on:click={() => {console.log('signin', {username,password})}}>Sign-in</button>
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