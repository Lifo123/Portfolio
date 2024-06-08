import PButton from '../../../../Components/Buttons/PButton'
import Icon from '../../../../Components/icons/Icon'
import SocialMediaIcon from '../../../../Components/icons/SocialMediaIcons'
import './Styles/ProjectCard.css'

export default function ProjectCard({ }) {
    return (
        <div className='project-card br-10 o-hidden'>
            <span className='d-flex f-center'>
                <img src="" alt="img Project" />
            </span>
            <div className='p-c-info f-col f-align-start'>
                <h4>Meta Tag Editor</h4>
                <p className='mt-10'>Simple editor of metatag for testing the result in engines Searchs</p>
                <div className='f-row g-25 f-justify-between mt-20 w-100'>
                    <a className='br-max f-row g-15 f-align-center' href='https://github.com/Lifo123' target='_blank'>
                        <SocialMediaIcon id={'github'} />
                        <p>Github</p>
                    </a>
                    <a className='br-max f-row g-15 f-align-center' href='https://www.linkedin.com/in/lifo3/' target='_blank'>
                        <Icon id={'redirect'} box={22} />
                        <p className='d-flex f-align-center' style={{ height: '30px' }}>Linkedin</p>
                    </a>
                </div>
            </div>
        </div>
    )
}