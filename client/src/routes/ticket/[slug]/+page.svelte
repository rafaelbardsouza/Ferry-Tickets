<script>
    import '../../../styles/main.css';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { getRequest } from '../../../lib/utilis/httpClient';
    import { writable } from 'svelte/store';
    import toast, {Toaster} from 'svelte-french-toast';

    let id;

    page.subscribe((value) => {
        id = value.params.slug;
    });

    let ticket = writable({});

    onMount(() => {
        const getTicket = async () => {
            try {
                const request = await getRequest(`ticket?id=${id}`);
                ticket.set(request.data);
            } catch (error) {
                console.log(error);
            }
        };
        getTicket();
    });

    function getHours(timestamp) {
        const date = new Date(timestamp);
        date.setHours(date.getHours() + 2);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    }

    const readTicket = async () => {
        const request = await getRequest(`ticket/${id}`);
        if(request.data!=='ticket expired') {
            toast.success('Ticket used successfully');
            ticket.set(request.data);
        } else {
            toast('Ticket expired', {
                icon: '😭',
            });
            ticket.update(t => ({ ...t, expired: true }));
        }
    }
</script>

<main>
    <div class="page">
        <div class="container">
            <img src="/favicon.png" alt="Ferry Tickets Logo" class="logo"/>
            <h1>{id}</h1>
            <p>Created at: {new Date($ticket.createdAt).toLocaleString()}</p>
            <p>{$ticket.expired ? 'Expired' : `Expires at ${getHours($ticket.createdAt)}`}</p>
            <p>Uses: {$ticket.uses}</p>
            <div class="buttons">
                <button on:click={readTicket} class="button">Use it!</button>
                <button on:click={() => window.location.href = '/tickets'} class="button">Back</button>
            </div>
        </div>
    </div>
    <Toaster/>
</main>

<style>
    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>