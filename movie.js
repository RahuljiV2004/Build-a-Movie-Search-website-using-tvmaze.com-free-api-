const form = document.querySelector('#form');
const p =
    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const s = form.elements.q.value;
        try {
            const response = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${s}`);
            console.log(response.data.image.medium);
            const img = document.createElement('img');
            img.src = response.data.image.medium;
            document.body.append(img);
        }
        catch (e) {
            document.body.append("movie not in database");
        }

    })