import * as React from 'react'
import motopartBanner from '../pages/motopart-banner.jpg'
import { container, banner} from './layout.module.css'

console.log('container: ', container)

const MotopartBanner = () => {
    return (
        <main className={container}>
            
            <img className={banner} src={motopartBanner} alt="sample banner for motopart" />
    

        </main>
        )
    }
export default MotopartBanner