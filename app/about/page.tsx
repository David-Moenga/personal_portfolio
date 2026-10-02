import { getSkills } from "../../lib/api";

export default async function AboutPage() {
  const skills = await getSkills();

  return (
    <>
      <section className="shell page-hero">
        <p className="eyebrow">About me</p>
        <h1>Software engineer & data analyst.</h1>
        <p className="lead">
          I&apos;m David Moenga, a software engineer and data analyst based in Nairobi, Kenya. 
          I build web applications, explore blockchain technology, and turn complex data into decisions people can act on.
        </p>
      </section>

      <section className="shell section">
        <div className="about-grid">
          <div>
            <h2>My journey</h2>
            <p>
              I started my journey in tech with a curiosity for how things work and a desire to build solutions 
              that make a difference. Over the time, I&apos;ve worked with various technologies and frameworks, 
              always focusing on creating reliable, user-friendly applications.
            </p>
            <p>
              My experience spans full-stack web development, data analysis, and blockchain technology. 
              I&apos;m particularly interested in fintech and decentralized systems that can improve 
              financial inclusion in Africa.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m learning new technologies, contributing to open source, 
              or exploring the vibrant tech community in Nairobi.
            </p>
          </div>
          <div>
            <h2>What I do</h2>
            <ul className="highlights-list">
              <li>Full-stack web development with React, Next.js, and Django</li>
              <li>Data analysis and visualization with Python, SQL, and Power BI</li>
              <li>Blockchain development with Stellar and Solidity</li>
              <li>API design and integration</li>
              <li>Database design and optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="shell section">
        <h2>Skills & Technologies</h2>
        <div className="card skills-card">
          {skills.map((skill) => (
            <span className="tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
