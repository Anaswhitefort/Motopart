import * as React from 'react'
import { Link } from 'gatsby'
import { container, newh3} from '../components/layout.module.css'

console.log('container: ', container)

const TextImg = () => {
    return (
        <main className={container}>
            
             <a className={newh3} href='https://store.apple.com'>Download</a>
    

        </main>
        )
    }
export default TextImg