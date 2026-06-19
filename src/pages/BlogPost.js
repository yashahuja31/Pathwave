import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { BLOG_POSTS } from '../utils/data';

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

  const renderContent = text => text.split('\n\n').map((para, i) => {
    if (para.startsWith('## ')) return <h2 key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 400, color: 'var(--white)', margin: '3rem 0 1.2rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>{para.replace('## ', '')}</h2>;
    const parts = para.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
      part.startsWith('**') ? <strong key={j}>{part.replace(/\*\*/g, '')}</strong> : part
    );
    return <p key={i} style={{ fontSize: '1rem', color: 'var(--silver)', lineHeight: 1.9, marginBottom: '1.5rem' }}>{parts}</p>;
  });

  return (
    <PageTransition>
      <div className="pt">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '5rem 4rem 4rem' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <button onClick={() => nav('/blog')} style={{ background: 'none', border: 'none', color: 'var(--silver)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', marginBottom: '2rem', transition: 'color 0.3s', fontFamily: 'var(--font-body)' }}>← Back to Blog</button>
            <span className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>{post.tag}</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, lineHeight: 1.15, margin: '1rem 0 1.5rem' }}>{post.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: 38, height: 38, background: 'var(--gold-dim)', border: '1px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: 'var(--gold)', fontFamily: 'var(--font-display)' }}>
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>{post.author}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--silver)' }}>{post.date} · {post.readTime}</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          style={{ maxWidth: 800, margin: '0 auto', padding: '4rem 4rem 2rem' }}>
          {renderContent(post.content)}
        </motion.div>

        <div style={{ textAlign: 'center', padding: '5rem 4rem', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, marginBottom: '1rem' }}>
            Ready to start your <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>application journey?</em>
          </div>
          <button className="btn-primary" onClick={() => nav('/contact')}>Book a Free Consultation</button>
        </div>
      </div>
    </PageTransition>
  );
}
