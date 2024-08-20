<script>
    import { page } from '$app/stores';

    let id;

    page.subscribe((value) => {
        id = value.params.slug;
    });
</script>

<main>
    <h1>Id: {id}</h1>
</main>