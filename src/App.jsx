import { useEffect, useState } from 'react'
import profilePhoto from './assets/foto-saya.png'
import canvaWorkOne from './assets/karya-canva-1.png'
import canvaWorkTwo from './assets/karya-canva-2.png'
import canvaWorkThree from './assets/karya-canva-3.png'
import canvaWorkFour from './assets/karya-canva-4.png'
import canvaWorkFive from './assets/karya-canva-5.png'
import canvaWorkSix from './assets/karya-canva-6.png'
import canvaWorkSeven from './assets/karya-canva-7.png'
import canvaWorkEight from './assets/karya-canva-8.png'
import './App.css'

function App() {
  const [lang, setLang] = useState('ID')
  const [activeSection, setActiveSection] = useState('skills')
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('portfolio-theme') === 'dark')
  const [isMenuFloating, setIsMenuFloating] = useState(false)

  const t = {
    ID: {
      nav: ['Tentang', 'Keahlian', 'Proyek', 'Visual', 'Pelatihan'],
      cta: 'Hubungi Saya',
      eyebrowHero: 'Halo, saya',
      introHero: 'Pelajar dan pengembang web yang senang membangun pengalaman digital yang rapi, cepat, dan bermakna.',
      btnHero: 'Lihat keahlian',
      scrollNote: 'gulir untuk menjelajah',
      skillsTitle: 'Keahlian & Teknologi\ndikuasai.',
      projectsTitle: 'Konfigurasi & Topologi\nyang pernah dibuat.',
      projectsEyebrow: '02 / Proyek Jaringan',
      visualEyebrow: 'Karya pilihan',
      visualAbout: 'Desain bagi saya adalah cara bercerita dengan jujur. Lewat Canva saya meramu tipografi tegas, warna berani, dan foto bercerita menjadi poster yang mudah dibaca dan berkarakter — dari kampanye sosial sampai promosi kuliner.',
      visualStats: ['Karya kurasi', 'Kategori', 'Eksplorasi'],
      visualNote: 'Semua karya dibuat di Canva dengan pendekatan editorial dan sentuhan humanis.',
      certTitle: 'Sertifikat &\nSertifikasi.',
      certEyebrow: '04 / Sertifikat & Sertifikasi',
      certDesc: 'Komitmen terhadap pembelajaran berkelanjutan melalui kursus teknis, workshop, dan sertifikasi profesional.',
      contactEyebrow: '05 / Mari terhubung',
      contactTitle: 'Mari buat\nsesuatu yang berarti.',
      footerInfo: 'Indonesia · Terbuka untuk kolaborasi'
    },
    EN: {
      nav: ['About', 'Skills', 'Projects', 'Visual', 'Certificates'],
      cta: 'Contact Me',
      eyebrowHero: 'Hello, I am',
      introHero: 'Student and web developer who loves building clean, fast, and meaningful digital experiences.',
      btnHero: 'View skills',
      scrollNote: 'scroll to explore',
      skillsTitle: 'Skills & Tech\nMastered.',
      projectsTitle: 'Configurations & Topologies\nCreated.',
      projectsEyebrow: '02 / Network Projects',
      visualEyebrow: 'Featured Work',
      visualAbout: 'Design to me is a way to tell stories honestly. Through Canva I mix bold typography, striking colors, and narrative photography into readable, characterful posters — from social campaigns to culinary promos.',
      visualStats: ['Curated works', 'Categories', 'Exploration'],
      visualNote: 'All works made in Canva with an editorial approach and human touch.',
      certTitle: 'Certificates &\nCertifications.',
      certEyebrow: '04 / Certificates & Certifications',
      certDesc: 'Commitment to continuous learning through technical courses, workshops, and professional certifications.',
      contactEyebrow: '05 / Let\'s Connect',
      contactTitle: 'Let\'s build\nsomething meaningful.',
      footerInfo: 'Indonesia · Open for collaboration'
    }
  }[lang]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => setIsMenuFloating(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ids = ['top', 'skills', 'projects', 'work', 'cert', 'contact']
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) spy.observe(el)
    })
    return () => spy.disconnect()
  }, [])

  const navigateTo = (section) => {
    setActiveSection(section)
    if (section === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  const skillData = [
    ['01', 'Canva', 'Desain poster, presentasi, dan konten visual', '85%'],
    ['02', 'CapCut', 'Editing video pendek dan konten media sosial', '78%'],
    ['03', 'Microsoft Office', 'Dokumen, spreadsheet, dan presentasi', '82%'],
    ['04', 'Cisco', 'Administrasi jaringan dan perangkat keras', '75%'],
  ]

  const projectData = [
    ['01', 'Portfolio Web', 'Website portofolio responsif berbasis React & Vite dengan fitur tema gelap/terang', '2024'],
    ['02', 'E-Commerce App', 'Sistem toko online dengan keranjang, checkout, dan payment gateway', '2024'],
    ['03', 'Dashboard Admin', 'Panel manajemen data dengan grafik real-time dan tabel interaktif', '2023'],
  ]

  const certData = [
    ['01', 'Network Administrator', 'BNSP'],
    ['02', 'Belajar Jaringan Komputer', 'Dicoding Indonesia'],
  ]

  const canvaWorks = [
    {
      id: '01',
      title: 'Oranye Itu Takdir',
      category: 'Kampanye sosial / 2024',
      tag: 'social',
      badge: 'Kampanye Sosial',
      imageSrc: canvaWorkOne,
      desc: 'Poster kampanye isu sosial bertema tajam dengan kontras warna oranye dan tipografi tegas yang mengikat perhatian.',
    },
    {
      id: '02',
      title: 'Who Do You Call?',
      category: 'Isu sosial / 2024',
      tag: 'social',
      badge: 'Isu Sosial',
      imageSrc: canvaWorkTwo,
      desc: 'Eksplorasi visual monokromatik bergaya editorial dengan aksen warna pop untuk menyuarakan pesan sosial.',
    },
    {
      id: '03',
      title: 'History of Batakan Baru',
      category: 'Desain editorial / 2024',
      tag: 'editorial',
      badge: 'Editorial',
      imageSrc: canvaWorkThree,
      desc: 'Tata letak publikasi sejarah lokal dengan perpaduan tipografi modern dan tekstur foto bersejarah.',
    },
    {
      id: '04',
      title: 'Matcha White',
      category: 'Promosi minuman / 2024',
      tag: 'promo',
      badge: 'Promosi Minuman',
      imageSrc: canvaWorkFour,
      desc: 'Desain poster promosi minuman kekinian bertema matcha dengan komposisi segar dan estetika warna seimbang.',
    },
    {
      id: '05',
      title: 'Selamat Sarjana',
      category: 'Ucapan wisuda / 2024',
      tag: 'editorial',
      badge: 'Wisuda & Perayaan',
      imageSrc: canvaWorkFive,
      desc: 'Desain ucapan kelulusan penuh kehangatan, selebrasi, dan tipografi ceria untuk momen berharga.',
    },
    {
      id: '06',
      title: 'Special Ramen',
      category: 'Promosi makanan / 2024',
      tag: 'promo',
      badge: 'Promosi Kuliner',
      imageSrc: canvaWorkSix,
      desc: 'Iklan promosi kuliner ramen dengan aksen merah dinamis, grafis bergaya Jepang, dan visual menggoda.',
    },
    {
      id: '07',
      title: 'Farm & Fork',
      category: 'Branding makanan sehat / 2024',
      tag: 'editorial',
      badge: 'Branding & Menu',
      imageSrc: canvaWorkSeven,
      desc: 'Identitas visual kuliner sehat dengan konsep farm-to-table dan sentuhan tipografi modern minimalis.',
    },
    {
      id: '08',
      title: 'Crispy Chicken Burger',
      category: 'Menu makanan / 2024',
      tag: 'promo',
      badge: 'Promosi Kuliner',
      imageSrc: canvaWorkEight,
      desc: 'Poster menu burger renyah berlatar hangat dengan penataan fotografi produk yang kuat dan menggugah selera.',
    },
  ]

  return (
    <main className={isDarkMode ? 'dark-mode' : ''}>
      <nav className="nav" aria-label="Navigasi utama"><div className={isMenuFloating ? 'nav-links floating' : 'nav-links'}>{[['top', t.nav[0]], ['skills', t.nav[1]], ['projects', t.nav[2]], ['work', t.nav[3]], ['cert', t.nav[4]]].map(([item, label]) => <button className={activeSection === item ? 'nav-link active' : 'nav-link'} key={item} type="button" onClick={() => navigateTo(item)}>{label}</button>)}{isMenuFloating && <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Kembali ke atas" title="Kembali ke atas">↑</button>}</div><div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={() => setLang(l => l === 'ID' ? 'EN' : 'ID')} aria-label="Ganti bahasa" title="Ganti bahasa">{lang}</button>
          <button className="theme-toggle" type="button" onClick={() => setIsDarkMode((current) => !current)} aria-label={isDarkMode ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'} title={isDarkMode ? 'Mode terang' : 'Mode gelap'}>{isDarkMode ? '☀' : '☾'}</button>
          <a className="nav-cta" href="mailto:hello@naya.design">{t.cta} <span>↗</span></a>
        </div></nav>
      <section className="hero hero-reference" id="top"><div className="hero-name" aria-hidden="true">RIZKI INSANI</div><div className="hero-curve" /><div className="hero-photo reveal delay-1"><img src={profilePhoto} alt="Foto Muhammad Rizki Insani" /><span className="photo-caption">PORTOFOLIO<br />2024</span><span className="art-number">01</span></div><div className="hero-copy reference-copy reveal"><p className="eyebrow">{t.eyebrowHero}</p><h1>Muhammad Rizki<br /><em>Insani.</em></h1><p className="hero-intro">{t.introHero}</p><div className="hero-actions"><button className="button button-dark" type="button" onClick={() => navigateTo('work')}>{t.btnHero} <span>↓</span></button><a className="text-link" href="mailto:hello@naya.design">{t.cta} <span>↗</span></a></div></div><div className="scroll-note"><span className="scroll-line" /> {t.scrollNote}</div></section>
      <section className="skills-section" id="skills"><p className="eyebrow reveal">01 tools</p><h2 className="reveal">{t.skillsTitle.split('\n')[0]}<br /><em>{t.skillsTitle.split('\n')[1]}</em></h2><div className="skill-list reveal delay-1">{skillData.map(([number, name, description, level]) => <article className="skill-item" key={name}><span className="skill-number">{number}</span><h3>{name}</h3><p>{description}</p><div className="skill-level"><span style={{ width: level }} /></div><strong>{level}</strong></article>)}</div></section>

      <section className="skills-section" id="projects" style={{ background: 'var(--paper)' }}>
        <p className="eyebrow reveal">{t.projectsEyebrow}</p>
        <h2 className="reveal">{t.projectsTitle.split('\n')[0]}<br /><em>{t.projectsTitle.split('\n')[1]}</em></h2>
        <div className="skill-list reveal delay-1">
          {projectData.map(([number, name, description, year]) => (
            <article className="skill-item project-card-custom" key={name}>
              <span className="skill-number">{number}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <div className="project-tags">
                <span>Networking</span>
                <span>Cisco</span>
              </div>
              <strong>{year}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="canva-section" id="work">
        <div className="canva-layout">
          <div className="canva-grid-wrapper reveal delay-1">
            <div className="canva-gallery-grid">
              {canvaWorks.map((work) => (
                <article className="canva-card-min" key={work.id}>
                  <div className="canva-media-min">
                    <img className="canva-img-min" src={work.imageSrc} alt={work.title} loading="lazy" />
                  </div>
                  <div className="canva-meta-min">
                    <span className="canva-cat-min">{work.id} — {work.category}</span>
                    <h3 className="canva-title-min">{work.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="canva-intro reveal">
            <p className="eyebrow">{t.visualEyebrow}</p>
            <h2><em>Visual.</em></h2>
            <p className="canva-about">{t.visualAbout}</p>
            <div className="canva-line" />
            <ul className="canva-stats">
              <li><strong>08</strong><span>{t.visualStats[0]}</span></li>
              <li><strong>03</strong><span>{t.visualStats[1]}</span></li>
              <li><strong>2024</strong><span>{t.visualStats[2]}</span></li>
            </ul>
            <p className="canva-note">{t.visualNote}</p>
          </div>
        </div>
      </section>

      <section className="about-section" id="cert" style={{ background: 'var(--paper)' }}>
        <div className="about-copy reveal">
          <p className="eyebrow">{t.certEyebrow}</p>
          <h2>{t.certTitle.split('\n')[0]}<br /><em>{t.certTitle.split('\n')[1]}</em></h2>
          <p>{t.certDesc}</p>
        </div>
        <div className="cert-grid reveal delay-1">
          {certData.map(([number, name, institution]) => (
            <div className="cert-card" key={name}>
              <div className="cert-top">
                <span className="cert-number">{number}</span>
              </div>
              <h4 className="cert-name">{name}</h4>
              <p className="cert-institution">{institution}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="contact-section" id="contact"><p className="eyebrow reveal">{t.contactEyebrow}</p><h2 className="reveal delay-1">{t.contactTitle.split('\n')[0]}<br /><em>{t.contactTitle.split('\n')[1]}</em></h2><a className="contact-email reveal delay-2" href="mailto:hello@naya.design">hello@naya.design <span>↗</span></a><div className="contact-footer"><span>© 2024 Muhammad Rizki Insani</span><span>{t.footerInfo}</span><div className="socials"><a href="https://www.instagram.com" target="_blank" rel="noreferrer">IG</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LI</a></div></div></section>
    </main>
  )
}

export default App
