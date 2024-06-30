import './CallAc.css'
import { HashLink } from 'react-router-hash-link'

import PButton from '../../../Components/Buttons/PButton'
import PButtonSecondary from '../../../Components/Buttons/pButtonSecondary'
import { Link } from 'react-router-dom'

export default function CallAc() {
    return (
        <section className="view-anim f-col f-align-start f-justify-center" id='call-ac'>
            <div className='f-col f-align-start w-65 mx-auto g-20'>
                <h2 className=''>¿Do you need a Web Developer?</h2>
                <p className='mb-15'>Let's start innovative new projects together.</p>
                <div className='call-btns f-row g-30 f-wrap'>
                    <HashLink className='' to="#Contact">
                        <PButton text='Contact me' borderRadius={8} padding={[16, 46]} fontSize={17} boolean={1} />
                    </HashLink>
                    <HashLink className='' to="#Projects">
                        <PButtonSecondary text='View Projects' borderRadius={8} padding={[16, 46]} />
                    </HashLink>
                </div>
            </div>
        </section>
    )
}