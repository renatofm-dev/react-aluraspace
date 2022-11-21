import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Rodape from '../../components/Rodape'
import styles from './Home.module.scss'
import Galeria from '../../components/Galeria'

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
            <div className={styles.galeria}> 
                <Galeria />
            </div>
            <Rodape />
            
        </>

    )
}