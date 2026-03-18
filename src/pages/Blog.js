import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { BLOG_POSTS } from '../utils/data';
import './Blog.css';

const TAGS = ['All', 'United Kingdom', 'United States', 'Canada', 'Australia & Europe', 'Admissions'];

export default function Blog() {
  const nav = useNavigate();
  const [activeTag, setActiveTag] = useState('All');
  const filtered = activeTag === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.tag === activeTag);

  return (
    <PageTransition>
      <div className="pt">
        <div className="section-inner" style={{ padding: '5rem 0 3rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-tag">Insights & Guides</div>
            <h1 className="section-h2">The PathWave <em>Blog</em></h1>
            <p className="section-p">Expert advice, destination guides, visa updates, and admission tips from our counselling team — everything you need to navigate studying abroad.</p>
          </motion.div>
          <div className="blog-filter-tags">
            {TAGS.map(t => (
              <button key={t} className={`blog-filter-tag${activeTag === t ? ' active' : ''}`} onClick={() => setActiveTag(t)}>{t}</button>
            ))}
          </div>
        </div>

        <div className="section-inner blog-grid" style={{ paddingBottom: '5rem' }}>
          {filtered.map((post, i) => (
            <motion.article className="blog-card" key={post.slug}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => nav(`/blog/${post.slug}`)}>
              <div className="blog-card-top">
                <span className="badge">{post.tag}</span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-footer">
                <div className="blog-author">
                  <div className="blog-author-avatar">{post.author.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <div className="blog-author-name">{post.author}</div>
                    <div className="blog-date">{post.date}</div>
                  </div>
                </div>
                <span className="blog-read-more">Read →</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
