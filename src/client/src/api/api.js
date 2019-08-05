export async function getImages() {
    return  fetch('/api/getImages')
     .then(res => res.json())
 }