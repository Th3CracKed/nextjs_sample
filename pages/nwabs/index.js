import Link from 'next/link';
import styles from '../../styles/Nwabs.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { nwabs: data }
    }
}

const Nwab = ({ nwabs }) => {
    return (<div>
        <h1>Nwab</h1>
        {nwabs.map(nwab => (
            <Link href={'nwabs/'+nwab.id} key={nwab.id}>
                <a className={styles.single}>
                    <h3>{nwab.name}</h3>
                </a>
            </Link>
        ))}
    </div>);
}

export default Nwab;