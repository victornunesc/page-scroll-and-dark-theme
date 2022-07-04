import toast from "react-hot-toast";
import { ContainerSocial } from "./styles";

const SocialMedia = () => {
  const copy = () => {
    navigator.clipboard.writeText("victornunesc95@gmail.com");

    toast.success("Copiado!", { position: "top-center" });
  };

  return (
    <>
      {/* TROCAR PARA UM LINK PESSOAL */}
      <link
        href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <ContainerSocial>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/victorncosta/"
              target="_blank"
              rel="noreferrer"
              title="Join me on Linked In"
            >
              Linkedin <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/victornunesc"
              target="_blank"
              rel="noreferrer"
              title="Join me on Github"
            >
              Github <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <button
              href="3"
              className="g-plus"
              title="victornunesc95@gmail.com"
              onClick={() => copy()}
            >
              Google+ <i className="fa fa-google-plus" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </ContainerSocial>
    </>
  );
};

export default SocialMedia;
