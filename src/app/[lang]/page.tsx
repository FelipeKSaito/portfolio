import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyEmail } from "@/components/CopyEmail";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Reveal } from "@/components/Reveal";
import { ThemeEditor } from "@/components/ThemeEditor";
import { hasLocale } from "@/i18n/config";
import { getDictionary, profile } from "@/i18n/dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const otherLang = lang === "pt" ? "en" : "pt";

  return (
    <>
      <a className="skip-link" href="#conteudo">
        {lang === "pt" ? "Pular para o conteúdo" : "Skip to content"}
      </a>

      <header className="site-header">
        <div className="container site-header__inner">
          <Link href={`/${lang}`} className="brand" aria-label={profile.name}>
            <span className="brand__mark" aria-hidden="true">
              fs
            </span>
            <span className="brand__name">{profile.name}</span>
          </Link>

          <nav aria-label={lang === "pt" ? "Seções" : "Sections"}>
            <ul className="site-nav">
              <li>
                <a href="#projetos">{dict.nav.projects}</a>
              </li>
              <li>
                <a href="#habilidades">{dict.nav.skills}</a>
              </li>
              <li>
                <a href="#trajetoria">{dict.nav.experience}</a>
              </li>
              <li>
                <a href="#contato">{dict.nav.contact}</a>
              </li>
            </ul>
          </nav>

          <LanguageSwitch
            href={`/${otherLang}`}
            hrefLang={otherLang === "pt" ? "pt-BR" : "en"}
            label={dict.nav.switchLabel}
            short={dict.nav.switchShort}
          />
        </div>
      </header>

      <main id="conteudo">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <p className="hero__greeting">{dict.hero.greeting}</p>
              <h1 className="hero__name">{profile.name}</h1>
              <p className="hero__role">{dict.hero.role}</p>
              <p className="hero__now">{dict.hero.now}</p>
              <div className="hero__actions">
                <a className="button" href="#projetos">
                  {dict.hero.ctaProjects}
                </a>
                <a className="button button--ghost" href="#contato">
                  {dict.hero.ctaContact}
                </a>
              </div>
            </div>

            <ThemeEditor
              title={dict.hero.panelTitle}
              sections={dict.hero.panelSections}
              addLabel={dict.hero.panelAdd}
              savedLabel={dict.hero.panelSaved}
            />
          </div>
        </section>

        <section className="section about" aria-labelledby="sobre-titulo">
          <div className="container split">
            <h2 id="sobre-titulo" className="section__title">
              {dict.about.title}
            </h2>
            <div className="prose">
              {dict.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projetos"
          className="section projects"
          aria-labelledby="projetos-titulo"
        >
          <div className="container">
            <div className="section__head">
              <h2 id="projetos-titulo" className="section__title">
                {dict.projects.title}
              </h2>
              <p className="section__intro">{dict.projects.intro}</p>
            </div>

            <ul className="project-list">
              {dict.projects.items.map((project) => (
                <Reveal as="li" key={project.name} className="project">
                  <div className="project__main">
                    <p className="project__category">{project.category}</p>
                    <h3 className="project__name">{project.name}</h3>
                    <p className="project__description">{project.description}</p>
                    <h4 className="project__work-title">
                      {dict.projects.workLabel}
                    </h4>
                    <ul className="tags">
                      {project.work.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <a
                      className="project__link"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {dict.projects.visit}
                      <span className="project__domain">{project.domain}</span>
                    </a>
                  </div>

                  {project.image ? (
                    <a
                      className="browser"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <span className="browser__bar">
                        <span className="browser__dots">
                          <i />
                          <i />
                          <i />
                        </span>
                        <span className="browser__url">{project.domain}</span>
                      </span>
                      <span className="browser__screen">
                        <Image
                          className="browser__image"
                          src={project.image}
                          alt=""
                          width={1280}
                          height={589}
                          sizes="(min-width: 900px) 560px, 100vw"
                        />
                      </span>
                    </a>
                  ) : null}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="habilidades"
          className="section skills"
          aria-labelledby="habilidades-titulo"
        >
          <div className="container">
            <h2 id="habilidades-titulo" className="section__title">
              {dict.skills.title}
            </h2>
            <div className="skill-grid">
              {dict.skills.groups.map((group) => (
                <div key={group.name} className="skill-group">
                  <h3 className="skill-group__name">{group.name}</h3>
                  <ul className="skill-group__list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="trajetoria"
          className="section journey"
          aria-labelledby="trajetoria-titulo"
        >
          <div className="container split">
            <h2 id="trajetoria-titulo" className="section__title">
              {dict.experience.title}
            </h2>

            <div>
              <ol className="timeline">
                {dict.experience.items.map((item) => (
                  <li key={`${item.company}-${item.period}`} className="timeline__item">
                    <p className="timeline__period">{item.period}</p>
                    <h3 className="timeline__role">
                      {item.role}
                      <span className="timeline__company">{item.company}</span>
                    </h3>
                    <p className="timeline__place">{item.place}</p>
                    <p className="timeline__summary">{item.summary}</p>
                  </li>
                ))}
              </ol>

              <div className="credentials">
                <div>
                  <h3 className="credentials__title">
                    {dict.experience.educationTitle}
                  </h3>
                  <p>{dict.experience.education}</p>
                </div>
                <div>
                  <h3 className="credentials__title">
                    {dict.experience.certificatesTitle}
                  </h3>
                  <ul className="credentials__list">
                    {dict.experience.certificates.map((certificate) => (
                      <li key={certificate}>{certificate}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="section contact"
          aria-labelledby="contato-titulo"
        >
          <div className="container">
            <h2 id="contato-titulo" className="contact__title">
              {dict.contact.title}
            </h2>
            <p className="contact__text">{dict.contact.text}</p>
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="contact__actions">
              <a className="button" href={`mailto:${profile.email}`}>
                {dict.contact.emailLabel}
              </a>
              <CopyEmail
                email={profile.email}
                label={dict.contact.copy}
                copiedLabel={dict.contact.copied}
              />
            </div>
            <ul className="contact__links">
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <p>
            © {profile.name}
          </p>
          <p>{dict.footer}</p>
        </div>
      </footer>
    </>
  );
}
