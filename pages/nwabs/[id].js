// run on compile to time to instruct nest of how many detail pages need to be created (e.g /detail/:id)
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(nwab => {
        return {
            params: { id: nwab.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

// run for page to fetch each user details on compile time
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    return {
        props: { nwab: data }
    }
}

const Details = ({ nwab }) => {
    return (
        <div>
            <h1>{nwab.name}</h1>
            <p>{nwab.email}</p>
            <p>{nwab.website}</p>
            <p>{nwab.address.city}</p>
        </div>
    );
}

export default Details;