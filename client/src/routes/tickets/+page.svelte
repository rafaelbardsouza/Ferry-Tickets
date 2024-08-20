<script>
    import '../../styles/main.css';
    import { onMount } from 'svelte';

    onMount(() => {
        if (typeof window !== 'undefined' && !localStorage.getItem('token')) {
            window.location.href = '/';
        }
    });
</script>

<main>
    <div class="page">
        <div class="container">
            <img src="/favicon.png" alt="Ferry Tickets Logo" class="logo"/>
            <h1>Hello, Rafael! 👋</h1>
            <p>Here are your tickets:</p>
            <ul class="tickets">
                <li><a href="#a">🎫 ticket 1</a></li>
                <li><a href="#a">🎫 ticket 2</a></li>
                <li><a href="#a">🎫 ticket 3</a></li>
                <li><a href="#a">🎫 ticket 4</a></li>
                <li><a href="#a">🎫 ticket 5</a></li>
                <li><a href="#a">🎫 ticket 6</a></li>
                <li><a href="#a">🎫 ticket 7</a></li>
            </ul>
            <button class="button">Create Ticket</button>
        </div>
    </div>
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
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin: 5px 0;
        background: navy;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
    }

    .tickets a:hover {
        background-color: #3700b3;
        transition: transform 0.3s ease-in-out;
    }
</style>