import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const pages = ['about', 'projects', 'contact']

function pageFromHash() {
	const page = window.location.hash.slice(1)
	return pages.includes(page) ? page : 'about'
}

function Header({ page, navigate }) {
	return (
		<header className="site-header">
			<a className="brand" href="#about" onClick={() => navigate('about')} aria-label="Jacob Sweeten, home">
				<img src="/content/images/Jacob Sweeten ACII.png" alt="Jacob Sweeten" />
			</a>
			<nav aria-label="Main navigation">
				{pages.map((item) => (
					<a
						key={item}
						href={`#${item}`}
						aria-current={page === item ? 'page' : undefined}
						onClick={() => navigate(item)}
						className="nav-link"
					>
						{item}
					</a>
				))}
			</nav>
		</header>
	)
}

function About({ navigate }) {
	return (
		<main className="page about-page">
			<section className="intro" aria-labelledby="intro-title">
				<div className="intro-copy">
					<p className="eyebrow"><span className="status-dot" /> Cybersecurity / Systems</p>
					<h1 id="intro-title">Curious about what runs <em>beneath the surface.</em></h1>
					<p className="intro-summary">
						I'm Jacob, a computer scientist drawn to the details that make technology work, and the ones that keep it secure.
					</p>
					<div className="intro-actions">
						<a className="button button-dark" href="#projects" onClick={() => navigate('projects')}>Explore my work <span aria-hidden="true">-&gt;</span></a>
						<a className="text-link" href="#contact" onClick={() => navigate('contact')}>Get in touch</a>
					</div>
					<div className="intro-index"><span>01</span> ABOUT / JACOB SWEETEN</div>
				</div>
				<figure className="portrait-frame">
					<img src="/content/images/photo.jpg" alt="Portrait of Jacob Sweeten" />
					<figcaption><span>Based in Tennessee</span><span>Always learning</span></figcaption>
				</figure>
			</section>
			<section className="about-details" aria-label="Background and interests">
				<div className="detail-block">
					<p className="section-kicker">01 / BACKGROUND</p>
					<h2>Security-minded.<br />Curiosity-led.</h2>
				</div>
				<div className="detail-copy">
					<p>I have an M.S. in computer science focused on cybersecurity. I'm especially interested in IT security and hardware security: how systems are built, where they can fail, and how to make them more resilient.</p>
					<div className="interests">
						<span>Aviation</span><span>Flight simulation</span><span>Cars</span><span>Hiking</span><span>Gaming</span>
					</div>
				</div>
			</section>
		</main>
	)
}

const projects = [
	{
		number: '01',
		name: 'Nintendo 64 Game Engine',
		category: 'C / MIPS ASSEMBLY',
		description: 'A home-built N64 engine exploring low-level graphics and hardware. It can write raw data to the frame buffer and swap buffers; asset packing and loading are next.',
		url: 'https://github.com/JacobSweeten/N64-Build',
		link: 'View repository',
	},
	{
		number: '02',
		name: 'Fred Discord Bot',
		category: 'NODE.JS',
		description: 'A small Discord bot made for friends, with a swear jar, reaction commands, and an 8 Ball.',
		url: 'https://github.com/JacobSweeten/tntech-csc-fun-discord-bot',
		link: 'View repository',
	},
	{
		number: '03',
		name: 'Home Lab',
		category: 'PROXMOX / ANSIBLE',
		description: 'A Proxmox server on a Dell PowerEdge R710, running isolated services and virtual machines managed with Ansible and SSH.',
	},
]

function Projects() {
	return (
		<main className="page content-page">
			<div className="page-heading">
				<p className="eyebrow"><span className="status-dot" /> Selected work</p>
				<h1>Projects <em>& experiments.</em></h1>
				<p>A few things I've built, explored, and learned from along the way.</p>
			</div>
			<div className="project-list">
				{projects.map((project) => (
					<article className="project" key={project.number}>
						<div className="project-number">{project.number}</div>
						<div className="project-body">
							<p className="section-kicker">{project.category}</p>
							<h2>{project.name}</h2>
							<p>{project.description}</p>
						</div>
						{project.url && <a className="project-link" href={project.url} target="_blank" rel="noreferrer">{project.link}<span aria-hidden="true">-&gt;</span></a>}
					</article>
				))}
			</div>
		</main>
	)
}

function Contact() {
	return (
		<main className="page contact-page">
			<p className="eyebrow"><span className="status-dot" /> Contact</p>
			<h1>Have a good<br /><em>question?</em></h1>
			<p className="contact-intro">I'd be glad to hear from you. Find me through any of these channels.</p>
			<div className="contact-list">
				<a href="mailto:sweeten.jacob@gmail.com"><span>Email</span><strong>sweeten.jacob@gmail.com</strong><span className="contact-arrow" aria-hidden="true">-&gt;</span></a>
				<a href="https://www.linkedin.com/in/jacob-sweeten-473122182/" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Jacob Sweeten</strong><span className="contact-arrow" aria-hidden="true">-&gt;</span></a>
				<a href="https://github.com/JacobSweeten" target="_blank" rel="noreferrer"><span>GitHub</span><strong>JacobSweeten</strong><span className="contact-arrow" aria-hidden="true">-&gt;</span></a>
			</div>
		</main>
	)
}

function App() {
	const [page, setPage] = useState(pageFromHash)

	useEffect(() => {
		const syncPage = () => setPage(pageFromHash())
		window.addEventListener('hashchange', syncPage)
		return () => window.removeEventListener('hashchange', syncPage)
	}, [])

	useEffect(() => {
		document.title = `${page[0].toUpperCase()}${page.slice(1)} | Jacob Sweeten`
	}, [page])

	return (
		<div className="site-shell">
			<Header page={page} navigate={setPage} />
			{page === 'about' && <About navigate={setPage} />}
			{page === 'projects' && <Projects />}
			{page === 'contact' && <Contact />}
			<footer className="site-footer"><span>© {new Date().getFullYear()} Jacob Sweeten</span><span>Built with curiosity in Tennessee</span></footer>
		</div>
	)
}

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
)