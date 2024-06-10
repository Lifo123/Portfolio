import './Styles/ProjectCard.css'
import Icon from '../../../../Components/icons/Icon'
import SocialMediaIcon from '../../../../Components/icons/SocialMediaIcons'

export default function ProjectCard({ data }) {
    return (
        <div className='project-card br-10 o-hidden'>
            <a className='d-flex f-center relative' href={data.websiteURL}>
                <span className='p-c-ic-e absolute'>
                    <Icon id={'redirect'} box={26} />
                </span>
                <img src="" height={140} width={340} alt="img Project" />
            </a>
            <div className='p-c-info f-col f-align-start g-5'>
                <h3>{data.tittle || 'Tittle'}</h3>
                <p className=''>{data.description || 'Description'}</p>
                <div className='f-row g-25 f-justify-between mt-10 w-100'>
                    <a className='p-btn br-max f-row g-15 f-align-center' href={data.repoURL} target='_blank'>
                        <label className='f-row f-center br-max g-10'>
                            <SocialMediaIcon id={'github'} />
                            <p>Github</p>
                        </label>
                    </a>
                    <a className='p-btn br-max f-row g-15 f-align-center' href={data.websiteURL} target='_blank'>
                        <label className='f-row f-center br-max g-10'>
                            <Icon id={'redirect'} box={18} />
                            <p className='d-flex f-align-center' style={{ height: '30px' }}>Website</p>
                        </label>
                    </a>
                </div>
            </div>
        </div>
    )
}