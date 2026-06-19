import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { BLOG_POSTS } from '../utils/data';

const TAGS = ['All', 'United Kingdom', 'United States', 'Canada', 'Australia & Europe', 'Admissions'];

export default function Blog() {
  const nav = useNavigate();
  const [tag, setTag] = useState('All');
  const posts = tag === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.tag === tag);

  return (
    <PageTransition>
      <div className="pt">
        <div className="section-inner" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-tag">Insights & Guides</div>
            <h1 className="section-h2">The PathWave <em>Blog</em></h1>
            <p className="section-p">Expert advice, destination guides, visa updates, and admission tips from our counselling team.</p>
          </motion.div>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            {TAGS.map(t => (
              <button key={t} onClick={() => setTag(t)} style={{ padding: '0.4rem 1.1rem', background: 'none', border: `1px solid ${tag === t ? 'var(--gold)' : 'var(--border)'}`, color: tag === t ? 'var(--gold)' : 'var(--silver)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s', fontFamily: 'var(--font-body)' }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem', paddingBottom: '5rem' }} className2="blog-grid">
          {posts.map((post, i) => (
            <motion.article key={post.slug}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => nav(`/blog/${post.slug}`)}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '2.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}
              whileHover={{ borderColor: 'var(--gold)', y: -4 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <span className="badge">{post.tag}</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--silver)' }}>{post.readTime}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 500, lineHeight: 1.35, marginBottom: '1rem', flex: 1 }}>{post.title}</h2>
              <p style={{ fontSize: '0.87rem', color: 'var(--silver)', lineHeight: 1.75, marginBottom: '1.5rem' }}>{post.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <div style={{ width: 32, height: 32, background: 'var(--gold-dim)', border: '1px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', color: 'var(--gold)', fontFamily: 'var(--font-display)', flexShrink: 0 }}>
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 500 }}>{post.author}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--silver)' }}>{post.date}</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>Read →</span>
              </div>
            </motion.article>
          ))}
          <style>{`@media(max-width:900px){ .blog-grid{ grid-template-columns:1fr !important; } }`}</style>
        </div>
      </div>
    </PageTransition>
  );
}
