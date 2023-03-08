import { Avatar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-avatar">
      <Avatar>
        <GitHubIcon />
      </Avatar>
      <Avatar>
        <LinkedInIcon />
      </Avatar>
      <Avatar>
        <EmailIcon />
      </Avatar>
      <Avatar>
        <PhoneIcon />
      </Avatar>
    </div>
  );
};

export default Contact;
