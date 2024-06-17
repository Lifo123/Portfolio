import './Styles/ProjectCard.css'
import Icon from '../../../../Components/icons/Icon'

export default function ProjectCard({ data = {} }) {
    return (
        <div className='project-card br-10 o-hidden'>
            <a className='d-flex f-center relative' href={data.websiteURL || 'URL'} target='_blank'>
                <span className='p-c-ic-e h-100 w-100 f-center absolute'>
                    <Icon id={'redirect'} box={26} />
                </span>
                <img src={data.img || 'image'} height={140} width={340} alt="img Project" />
            </a>
            <div className='p-c-info f-col f-align-start g-5'>
                <label className='w-100 f-row f-justify-between'>
                    <h3>{data.tittle || 'Tittle'}</h3>
                    <p>State</p>
                </label>
                <p className=''>{data.description || 'Description'}</p>
                <div className='p-c-tags f-row g-10'>
                    <Tags content={'Javascript'} />
                    <Tags content={'React'} />
                    <Tags content={'Sass'} />
                </div>
                <a className='p-btn br-max w-100' href='https://github.com/Lifo123' target='_blank'>
                    <span className='br-max h-100 w-100 f-row g-15 f-center'>
                        <Icon id={'redirect'} box={18}/>
                        <p>Website</p>
                    </span>
                </a>
            </div>
        </div>
    )
}

function Tags(props) {
    return (
        <div>
            {props.content}
        </div>
    )
}