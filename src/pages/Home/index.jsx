import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import styles from './Home.module.scss'

export default function Home (){
    return (
        <>
            <Header></Header>
            <main>
                <secton className={styles.principal}>
                    <Menu />
                    <Banner />  

                </secton>
            </main>
            
        </>

    )
}