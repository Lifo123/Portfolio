import './Styles/ProjectCard.css'
import Icon from '../../../../Components/icons/Icon'
import SocialMediaIcon from '../../../../Components/icons/SocialMediaIcons'

export default function ProjectCard({ }) {
    return (
        <div className='project-card br-10 o-hidden'>
            <span className='d-flex f-center relative'>
                <span className='p-c-ic-e absolute'>
                    <Icon id={'redirect'} box={26} />
                </span>
                <img src="" height={140} width={340} alt="img Project" />
            </span>
            <div className='p-c-info f-col f-align-start g-5'>
                <h3>Meta Tag Editor</h3>
                <p className=''>Simple editor of metatag for testing the result in engines Searchs</p>
                <div className='f-row g-25 f-justify-between mt-10 w-100'>
                    <a className='br-max f-row g-15 f-align-center' href='https://github.com/Lifo123' target='_blank'>
                        <SocialMediaIcon id={'github'} />
                        <p>Github</p>
                    </a>
                    <a className='br-max f-row g-15 f-align-center' href='https://www.linkedin.com/in/lifo3/' target='_blank'>
                        <Icon id={'redirect'} box={18} />
                        <p className='d-flex f-align-center' style={{ height: '30px' }}>Website</p>
                    </a>
                </div>
            </div>
        </div>
    )
}