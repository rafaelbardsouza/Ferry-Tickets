<script>
    import toast, {Toaster} from 'svelte-french-toast';
    import { getRequest, postRequest } from '../../lib/utilis/httpClient';
    import '../../styles/main.css';
    import { onMount, tick } from 'svelte';
    import { writable } from 'svelte/store';

    let tickets = writable([]);
    let username = writable('');

    onMount(() => {
        if (typeof window !== 'undefined' && !localStorage.getItem('token')) {
            window.location.href = '/';
        } else {
            const token = localStorage.getItem('token');
            username.set(localStorage.getItem('username'));
            const getTickets = async () => {
                try {
                    const request = await getRequest(`ticket/user?id=${token}`);
                    tickets.set(request.data);
                } catch (error) {
                    toast.error('Error fetching tickets');
                }
            }
            getTickets();
        }
    });

    function getHours(timestamp) {
        const date = new Date(timestamp);
        date.setHours(date.getHours() + 2);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.href = '/';
    }

    const createTicket = async () => {
        postRequest('ticket', {userId: localStorage.getItem('token')}).then((r) => {
            const newTicket = r.data;
            tickets.update(t => [...t, newTicket]);
        });
    }
</script>

<main>
    <button class="logout" on:click={logout}>Logout</button>
    <div class="page">
        <div class="container">
            <img src="/favicon.png" alt="Ferry Tickets Logo" class="logo"/>
            <h1>Hello, {$username}! 👋</h1>
            <ul class="tickets">
                {#each $tickets as ticket, index (index)}
                    <li><a href={`ticket/${ticket.id}`}>🎫 Ticket {index+1}<small>{ticket.expired ? 'Expirado' : `Expira às ${getHours(ticket.createdAt)}`}</small></a></li>
                {/each}
            </ul>
            <button on:click={createTicket} class="button">Create Ticket</button>
        </div>
    </div>
    <Toaster />
</main>

<style>
    .logout {
        position: absolute;
        font-weight: bolder;
        top: 10px;
        right: 10px;
        background-color: transparent;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 5px;
        &:hover {
            transition: background-color 0.3s ease-in-out;
            background-color: white;
            color: black;
        }
    }
    .page {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tickets {
        list-style: none;
        padding: 0;
        max-height: 500px;
        overflow-y: auto;
    }

    .tickets::-webkit-scrollbar {
        display: none;
    }

    .tickets {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .tickets a {
        width: 800px;
        height: 50px;
        display: flex;
        font-size: 1.3rem;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 10px;
        margin: 5px 0;
        background: navy;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
    }

    .tickets small {
        margin-top: .5rem;
        color: rgba(255, 0, 0, 0.8);
    }

    .tickets a:hover {
        background-color: #3700b3;
        transition: transform 0.3s ease-in-out;
    }
</style>