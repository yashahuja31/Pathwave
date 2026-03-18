import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { BLOG_POSTS } from '../utils/data';
import './BlogPost.css';

export default function BlogPost() {
  const { slug } = useParams();
  const nav = useNavigate();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return (
    <div style={{ padding: '10rem 4rem', textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1rem' }}>Post Not Found</div>
      <button className="btn-outline" onClick={() => nav('/blog')}>Back to Blog</button>
    </div>
  );

  const renderContent = (text) => text.split('\n\n').map((para, i) => {
    if (para.startsWith('## ')) return <h2 key={i} className="post-h2">{para.replace('## ', '')}</h2>;
    const parts = para.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
      part.startsWith('**') ? <strong key={j}>{part.replace(/\*\*/g, '')}</strong> : part
    );
    return <p key={i} className="post-para">{parts}</p>;
  });

  return (
    <PageTransition>
      <div className="pt">
        <motion.div className="post-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="post-hero-inner">
            <button className="post-back" onClick={() => nav('/blog')}>← Back to Blog</button>
            <div className="badge" style={{ marginBottom: '1.5rem' }}>{post.tag}</div>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <div className="blog-author-avatar" style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--gold-dim)', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: 'var(--gold)' }}>
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>{post.author}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--silver)' }}>{post.date} · {post.readTime}</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="post-body"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
          {renderContent(post.content)}
        </motion.div>

        <div className="post-cta">
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, marginBottom: '1rem' }}>
            Ready to start your <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>application journey?</em>
          </div>
          <button className="btn-primary" onClick={() => nav('/contact')}>Book a Free Consultation</button>
        </div>
      </div>
    </PageTransition>
  );
}
