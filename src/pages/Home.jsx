import { useEffect } from 'react'
import Header from '../components/Header/Header'
import Form from '../components/form/Form.jsx'

import img1 from "../assets/hr_text1.webp"
/**
 * Home - View 
 * @returns {JSX.Element} - Home View JSX element.
 */
const Home = () => {

    useEffect(() => {
        document.title = "HRnet - Form"

    }, [])
    return (
        <>
            <Header title="HRnet" />
            <main>
                <div
                    className='image'
                    style={{
                        backgroundImage: `url(${img1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        width: "calc(50% - 25px)",
                        height: '300px'
                    }}
                ></div>
                <Form />
            </main>
        </>
    )
}

export default Home