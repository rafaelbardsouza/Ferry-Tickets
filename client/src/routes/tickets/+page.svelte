<script>
    import toast, {Toaster} from 'svelte-french-toast';
    import { getRequest } from '../../lib/utilis/httpClient';
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
</script>

<main>
    <div class="page">
        <div class="container">
            <img src="/favicon.png" alt="Ferry Tickets Logo" class="logo"/>
            <h1>Hello, {$username}! 👋</h1>
            <ul class="tickets">
                {#each $tickets as ticket, index (index)}
                    <li><a href={`ticket/${ticket.id}`}>🎫 Ticket {index+1}<small>{ticket.expired ? 'Expirado' : `Expira às ${getHours(ticket.createdAt)}`}</small></a></li>
                {/each}
            </ul>
            <button class="button">Create Ticket</button>
        </div>
    </div>
    <Toaster />
</main>

<style>
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