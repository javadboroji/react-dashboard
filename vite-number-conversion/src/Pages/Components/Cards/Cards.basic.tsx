import { Col, Row } from 'antd'
import React from 'react'
import card from "../../../assets/card.png";
import profile2 from '../../../../public/images/us-2.jpg';
import "./Card.Style.css"
import { Link } from 'react-router-dom';
function CardsBasic() {
    return (
        <div className='container p-6'>
            <Row gutter={[16,16]}>

            <CardInitial
                cardImage={card} title='اخرین پست'
                description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ '
                textColor='text-black'
                date='خرداد 1403 / 16:30'
                userName='جواد بروجی'
                profile={profile2}
                dateColor='text-gray-400'
                authorTextColor='text-blue-50'
                boxShadow={true}
                category={<span className='text-white w-fit bg-blue-50 rounded-3xl text-xs py-1 px-2'> مقالات </span>}
            />
            <CardWidthTags
                cardImage={card} title='اخرین پست'
                description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ '
                textColor='text-black'
                date='خرداد 1403 / 16:30'
                userName='جواد بروجی'
                profile={profile2}
                dateColor='text-gray-400'
                authorTextColor='text-blue-50'
                boxShadow={true}
                category={<span className='text-white w-fit bg-red-700 absolute top-4 left-0  rounded-tr-lg rounded-br-lg text-sm py-1 px-4'> مقالات </span>}
                tags={['مقالات' , 'پست' ,'وب سایت', 'آموزش']}
            />
            </Row>
        </div>
    )
}

export default CardsBasic

interface AuthorCard {
    profile?: string,
    userName?: string
}

type CardInitialType = AuthorCard & {
    cardImage: string,
    title: string,
    description: string,
    textColor: string,
    date?: string,
    authorTextColor?: string,
    dateColor?: string,
    boxShadow?: true,
    category?: any,
    tags?:string[]
}
const CardInitial: React.FC<CardInitialType> = ({ cardImage, title, description, textColor, date, userName, profile, dateColor, authorTextColor, boxShadow, category }) => {

    return (
        <>
            <Col xs={24} md={12} lg={8}>
                <Link to={'/'}>
                    <div className={`${boxShadow && 'shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'}  w-full rounded-lg borderCard`}>
                        <div className=' w-full relative pt-[50%] rounded-tl-lg rounded-tr-lg overflow-hidden'>
                            <img className='w-full h-full object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={cardImage} alt={cardImage} />
                        </div>
                        <div className='flex flex-col px-4 py-2'>
                            {category && category}
                            <p className={`${textColor ? textColor : 'text-zinc-950'} font-bold text-2xl line-clamp-1 leading-8 py-2`}> {title}</p>
                            <span className={`${textColor ? textColor : 'text-zinc-950'} text-sm line-clamp-2`}>{description}</span>
                        </div>
                        <div className={`${userName ? 'flex  items-center' : 'flex'} px-4 py-2`}>
                            {profile && <img className='w-10 h-10 rounded-full mx-2' src={profile} alt={profile} />}
                            <div className='flex flex-col'>
                                <span className={`${authorTextColor ? authorTextColor : textColor} text-sm pb-2 `}>{userName}</span>
                                <span className={`${dateColor} text-xs `}>{date}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </Col>
        </>
    )
}

const CardWidthTags: React.FC<CardInitialType> = ({ cardImage, title, description, textColor, date, userName, profile, dateColor, authorTextColor, boxShadow, category,tags }) => {
    return (
        <>
            <Col xs={24} md={12} lg={8}>
                <Link to={'/'}>
                    <div className={`${boxShadow && 'shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'}  w-full rounded-lg borderCard`}>
                        <div className=' w-full relative pt-[50%] rounded-tl-lg rounded-tr-lg overflow-hidden'>
                            <img className='w-full h-full object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={cardImage} alt={cardImage} />
                            {category && category}
                        </div>
                        <div className='flex flex-col px-4 py-2'>
                            <div className='flex'>{tags&&tags.map((tag ,i)=><span key={i+'tag'} className='text-blue-50'> #{tag}</span>)}</div>
                            <p className={`${textColor ? textColor : 'text-zinc-950'} font-bold text-2xl line-clamp-1 leading-8 py-2`}> {title}</p>
                            <span className={`${textColor ? textColor : 'text-zinc-950'} text-sm line-clamp-2`}>{description}</span>
                        </div>
                        <div className={`${userName ? 'flex  items-center' : 'flex'} px-4 py-2`}>
                            {profile && <img className='w-16 h-16 rounded-full mx-2' src={profile} alt={profile} />}
                            <div className='flex flex-col'>
                                <span className={`${authorTextColor ? authorTextColor : textColor} text-sm pb-2 `}>{userName}</span>
                                <span className={`${dateColor} text-xs `}>{date}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </Col>
        </>
    )
}