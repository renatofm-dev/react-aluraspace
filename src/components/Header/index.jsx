import logo from './logo.png';
import search from './search.png';
import styles from './Header.module.scss';

export default function Header() {
    return(
    <header className={styles.header}>
        <img src={logo} alt="Logo do alura space"></img>
        <div className={styles.header__container}>
            <input className= {styles.header__input}
            placeholder="O que você procura?"/>
            <img src={search} alt="icone de busca"></img>
        </div>
    </header>
    )
}