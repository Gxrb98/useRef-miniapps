 const GetPost = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
   
    const data = await fetch(url).then((res) => res.json());

    return data;
}
export default GetPost