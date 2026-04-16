// Write your code here!
async function displayPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    //sample data
    const sampleData = [
        {
            title: 'sunt aut facere repellat',
            body: 'quia et suscipit\nsuscipit',
        }
    ];
    //simulate fetching data from an API
    const fakeFetch = () => {
        return Promise.resolve({ json: () => Promise.resolve(sampleData) });
    };

    try {
        const response = await fakeFetch();
        const posts = await response.json();
        const postList = document.getElementById('post-list');

        posts.forEach(post => {
            const li = document.createElement('li');
            const h1 = document.createElement('h1');
            h1.textContent = post.title;
            const p = document.createElement('p');
            p.textContent = post.body;
            li.appendChild(h1);
            li.appendChild(p);
            postList.appendChild(li);        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

displayPosts(); 