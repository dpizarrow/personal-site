import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-xl sm:text-4xl">
      Contacts and socials:
      <div className="flex flex-col justify-center items-center mt-6">
        {/* Email div */}
        <div className="flex sm:flex-row flex-col items-center mb-4 text-center">
          <EmailIcon fontSize="large" />
          <p className="ml-2 sm:ml-2 mt-2 sm:mt-0 break-words">
            diego [dot] pizarro0 [at] gmail [dot] com
          </p>
        </div>

        {/* LinkedIn div */}
        <div className="flex sm:flex-row flex-col items-center mb-4">
          <LinkedInIcon fontSize="large" />
          <a
            href="https://www.linkedin.com/in/dpizarrow/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 sm:ml-2 mt-2 sm:mt-0"
          >
            LinkedIn
          </a>
        </div>

        {/* GitHub div */}
        <div className="flex sm:flex-row flex-col items-center mb-4">
          <GitHubIcon fontSize="large" />
          <a
            href="github.com/dpizarrow"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 sm:ml-2 mt-2 sm:mt-0"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
