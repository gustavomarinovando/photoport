import Github from '../../assets/images/socials/github.svg'
import Linkedin from '../../assets/images/socials/linkedin.svg'
import Portfolio from '../../assets/images/socials/instagram.png'

const Socials = () => {
  return (
    <section className="flex flex-row gap-3">
      <a
        href="https://github.com/gustavomarinovando"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-6 h-6	max-w-full" src={Github} alt="Github icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/gustavo-marin-3463b9301/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-6 h-6	max-w-full" src={Linkedin} alt="Linkedin icon" />
      </a>
      <a
        href="https://www.instagram.com/imnotmarbin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6	max-w-full"
          src={Portfolio}
          alt="Portfolio icon"
        />
      </a>
    </section>
  )
}

export default Socials
