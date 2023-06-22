import React from 'react'
import { useParams } from 'react-router-dom'
import img_1 from '../../../assets/notification/3.png'

const NotificationRead = () => {

    const notificationId = useParams()

    return (
        <>
            <div className='container my-5'>
                <div className='row justify-content-center'>
                    <div className='col-xl-6'>
                        <img src={img_1} alt="" className='img-fluid' style={{ height: "400px" }} />
                        <div className='text-secondary small my-3'>07.01.2023</div>
                        <div className='fw-black h5 mb-3'>Realme C33 Smartfon 4/128 GB, altyn reňk</div>
                        <p>
                            Aşgabatda we ähli welaýatlarda dükanlary bolan «Nur Ýüpek» düz bambuk, özünden gülli, suzanna, flamaster matalaryna uly arzanladyş aksiýasyny yglan etdi. Aksiýa 2022-nji ýylyň 15-31-nji dekabr aralygynda dowam eder.
                            <br /><br />
                            Düz bambuk — 40% arzanladyş — 200 man (öňki bahasy 320 man); Özünden gülli — 18% arzanladyş — 320 man (öňki bahasy 390 man); Suzanna — 15% arzanladyş — 220 man (öňki bahasy 260 man); Flamasterler — 15% arzanladyş — 440 man (öňki bahasy 520 man)
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationRead