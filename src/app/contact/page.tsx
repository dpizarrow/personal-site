import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-4xl">
      Contacts and socials:
      <div className="flex flex-col justify-center items-center mt-6">
        <div className="flex flex-row items-center mb-6">
          <EmailIcon fontSize="large" />
          <p className="ml-2">diego [dot] pizarro0 [at] gmail [dot] com</p>
        </div>
        <div className="flex flex-row items-center mb-6">
          <LinkedInIcon fontSize="large" />
          <a
            href="https://www.linkedin.com/in/dpizarrow/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-row items-center mb-6">
          <GitHubIcon fontSize="large" />
          <a
            href="github.com/dpizarrow"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
