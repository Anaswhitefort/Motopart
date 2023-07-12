import * as React from 'react'
import { container, newh3} from './layout.module.css'

console.log('container: ', container)

const DownloadPopUp = () => {
    return (
        <main className={container}>
            
             <a className={newh3} href='https://store.apple.com'>Download</a>
    

        </main>
        )
    }
export default DownloadPopUp