async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#review-title').value;
    const reviewContent = document.querySelector('#review-content').value;

    const res = await fetch('/api/post', {
        method: 'post',
        body: JSON.stringify({
            title,
            reviewContent
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });


    if(res.ok) {
        
    }
}

document.querySelector('.new-review').addEventListener('submit', newFormHandler);