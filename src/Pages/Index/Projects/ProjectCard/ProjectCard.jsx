import './ProjectCard.css'
import { Link } from 'react-router-dom'

import Icon from '../../../../Components/icons/Icon'

export default function ProjectCard({ data = {} }) {

    const techs = data.techs ? data.techs.split(',') : [];

    return (
        <div className='project-card br-10 o-hidden'>
            <Link className='pc-img-parent d-flex f-center relative o-hidden' to={data.websiteURL || 'URL'} target='_blank'>
                <span className='p-c-ic-e h-100 w-100 f-center absolute'>
                    <Icon id={'redirect'} box={26} />
                </span>
                <img src={data.img || 'image'} height={140} width={340} alt="img Project" />
                <span className='p-c-hover d-flex h-100 w-100 absolute'></span>
            </Link>
            <div className='p-c-info f-col f-align-start g-5'>
                <label className='w-100 f-row f-justify-between f-align-center'>
                    <h3>{data.tittle || 'Tittle'}</h3>
                    <p style={{ color: `${data.state ? '#07EC39' : '#ECB21C'}` }}>{data.state ? 'Finish' : 'Unfinish'}</p>
                </label>
                <p className='l-subpgrafh' style={{ marginBottom: '5px' }}>{data.description || 'Description'}</p>
                <div className='p-c-tags f-row g-10'>
                {
                        techs.map((element, index) => (
                            <Tags key={index} content={element} />
                        ))
                    }
                </div>
                <Link className='p-btn br-max w-100 mt-15' to={data.websiteURL} target='_blank'>
                    <span className='br-max h-100 w-100 f-row g-15 f-center'>
                        <Icon id={'redirect'} box={18} />
                        <p>Website</p>
                    </span>
                </Link>
            </div>
        </div>
    )
}

function Tags(props) {
    return (
        <span className='p-c-tag-item br-max d-flex' style={{ fontSize: '13px' }} data-type={props.content}>
            {props.content}
        </span>
    )
}