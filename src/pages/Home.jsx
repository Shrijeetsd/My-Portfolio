import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css'
import { GlowingCard } from '../components/GlowingCard'
import { ArrowUp } from 'lucide-react'


// 🖼️ Import Assets
import photo from '../../public/shrijeet.jpg'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'
import facebookLogo from '../../public/facebook.png'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  const professions = [
    'Software Developer',
    'AI Developer',
    'Full-Stack Developer',
    'Java Expert',
    'React Specialist',
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/Shrijeetsd' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/shrijeetdesai/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:shrijitdesai8459@gmail.com' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const fullText = "Software/ AI Developer | Full-Stack Engineer | Tech Explorer"

  useEffect(() => {
    let timeout;

    if (isDeleting) {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(fullText.substring(0, text.length - 1))
        }, 50)
      } else {
        timeout = setTimeout(() => setIsDeleting(false), 500)
      }
    } else {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.substring(0, text.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <section className="home-section">
      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top" id="home-top">
        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Kunj Desai"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              Shrijeet Desai
            </motion.span>
          </h1>

          {/* Typing Animated Text */}
          <p className="typing-effect" style={{ minHeight: '1.5em', borderRight: '2px solid var(--accent)', paddingRight: '5px', animation: 'blink 0.7s infinite', display: 'inline-block' }}>
            {text}
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }} transition={{ type: 'spring', stiffness: 200 }} className="profession-tag">
                {role}
              </motion.div>
            ))}
          </motion.div>



          {/* Info Cards */}
          <motion.div className="info-cards">
            {[
              { label: '📍 Location', value: 'Pune, Maharashtra' },
              { label: '💼 Expertise', value: 'Java, React, Node.js, AI' },
              { label: '📧 Contact', value: 'shrijitdesai8459@gmail.com' },
            ].map((info, i) => (
              <GlowingCard key={i} className="info-card">
                <motion.div whileHover={{ y: -4, scale: 1.05 }} transition={{ type: 'spring', stiffness: 250 }} style={{ padding: '1.5rem' }}>
                  <strong>{info.label}</strong>
                  <p>{info.value}</p>
                </motion.div>
              </GlowingCard>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)' }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'var(--accent)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              zIndex: 1000
            }}
            whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-2)' }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

    </section>
  )
}
