<script>
    import  '../../styles/main.css'
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
        text-align: center;
        background: #1e1e1e;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        width: 100%;
        max-width: 600px;
        box-sizing: border-box;
    }

    .tickets {
        list-style: none;
        padding: 0;
        max-height: 300px;
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
        width: 300px;
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

    .button {
        background-color: #3700b3;
        color: #fff;
        font-weight: bold;
        width: 80%;
        max-width: 320px;
        margin: 10px;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .button:hover {
        background-color: #6200ea;
    }
</style>