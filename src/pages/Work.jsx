const projects = [
  { number: '01', title: 'Kora Health', type: 'Digital health platform', year: '2025', category: 'Product / Strategy', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1400&q=85', tone: 'project-lilac' },
  { number: '02', title: 'Nuru Finance', type: 'Brand & product system', year: '2024', category: 'Brand / Digital', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85', tone: 'project-yellow' },
  { number: '03', title: 'Saba House', type: 'Hospitality experience', year: '2024', category: 'Identity / Space', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85', tone: 'project-green' },
  { number: '04', title: 'Kilimanjaro', type: 'Editorial art direction', year: '2023', category: 'Editorial / Culture', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85', tone: 'project-coral' },
]

function Work() {
  return (
    <main className="page-pad inner-page">
      <div className="page-intro"><p className="eyebrow">02 — Selected work</p><h1>A few things I&apos;ve <em>helped make.</em></h1><p className="page-lede">A collection of identities, interfaces, and experiences made with curious people.</p></div>
      <div className="filter-row"><span>Showing all projects</span><span>04 / 04</span></div>
      <div className="work-list">
        {projects.map((project) => <a className={`work-row ${project.tone}`} href="/contact" key={project.number}><div className="work-row-image"><img src={project.image} alt={`${project.title} project`} /></div><div className="work-row-copy"><span className="project-number">{project.number}</span><h2>{project.title}</h2><p>{project.type}</p></div><div className="work-row-meta"><span>{project.category}</span><span>{project.year} ↗</span></div></a>)}
      </div>
    </main>
  )
}

export default Work
