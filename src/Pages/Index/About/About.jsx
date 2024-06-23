import './About.css'

export default function About() {
    return (
        <section className="view-anim f-col" id="About">
            <h2 className='d-flex w-65 mx-auto l-subtitle' >About me</h2>
            <div className='about-cont f-row w-65 g-70 f-wrap mx-auto f-center mt-50'>
                <div className='about-img p-btn br-12'>
                    <span className='d-flex f-center br-10'>
                        <img src="#" alt="pfp Lifo" />
                    </span>
                </div>
                <label className='f-col g-15 f-justify-center'>
                    <p className='l-text-p'>Hello! I'm a 20 year old developer from Peru.</p>
                    <p className='l-text-p'>Specialized in building modern websites using <span className='p-blue'>ReactJS</span> and <span className='p-pink'>Sass</span>, with knowledge of Git.</p>
                    <p className='l-text-p'>Always improving my skills and staying updated with the latest industry trends.</p>
                </label>
            </div>
        </section>
    )
}