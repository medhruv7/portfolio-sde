import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Experience.css';

const Experience = () => {
    const experienceData = [
        { name: 'Acrobyte Technologies (Mcgraw Hill)', description: ['Worked as a full stack developer', 'Tech Stack: ReactJs, Typescript, NodeJs, Mysql', 'Developed various features requested by Product team', 'Involved in day to day debugging of issues and bugs in product'] },
        { name: 'Arista Networks', description: ['Worked as a full stack developer', 'Tech Stack: ReactJs, Typescript, NodeJs, Mysql', 'Developed various features requested by Product team', 'Involved in day to day debugging of issues and bugs in product'] },
        { name: 'Arista Networks', description: 'a' }
    ]

    const getCard = (cardData) => {
        return (
            <Card variant='outlined' className='experience-card'>
                <CardContent>
                    <h3>{cardData.name}</h3>
                    {cardData.description.map(data => <p>{data}</p>)}
                </CardContent>
            </Card>
        )
    }

    return (
        <div className='experience-div'>
            {experienceData.map(data => getCard(data))}
        </div>
    )
}

export default Experience;