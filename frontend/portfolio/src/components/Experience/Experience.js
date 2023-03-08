import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./Experience.css";
import acrobyteLogo from '../../assests/acrobyteLogo.png';

const Experience = () => {
  const experienceData = [
    {
      name: "Acrobyte Technologies (Mcgraw Hill)",
      description: [
        "Worked as a full stack developer",
        "Tech Stack: ReactJs, Typescript, NodeJs, Mysql",
        "Developed various features requested by Product team",
        "Involved in day to day debugging of issues and bugs in product",
      ],
    },
    {
      name: "Acrobyte Technologies (Mcgraw Hill)",
      description: [
        "Worked as a full stack developer",
        "Tech Stack: ReactJs, Typescript, NodeJs, Mysql",
        "Developed various features requested by Product team",
        "Involved in day to day debugging of issues and bugs in product",
      ],
    },
    {
      name: "Acrobyte Technologies (Mcgraw Hill)",
      description: [
        "Worked as a full stack developer",
        "Tech Stack: ReactJs, Typescript, NodeJs, Mysql",
        "Developed various features requested by Product team",
        "Involved in day to day debugging of issues and bugs in product",
      ],
    },
  ];

  const getCard = (cardData) => {
    return (
      <Card className="experience-card">
        <CardMedia image={acrobyteLogo} sx={{ height: 140 }} title="Acrobyte Technologies"/>
        <CardContent>
          <h3>{cardData.name}</h3>
          {cardData.description.map((data) => (
            <li>{data}</li>
          ))}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="experience-div">
        Experience
      {experienceData.map((data) => getCard(data))}
    </div>
  );
};

export default Experience;
