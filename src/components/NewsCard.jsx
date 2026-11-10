import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export default function NewsCard({ item, variant = 'default' }) {
  return (
    <article className={`news-card news-card--${variant}`}>
      <Link to={`/berita/${item.id}`} className="news-card-link">
        <div className="news-meta">
          <span className="chip chip--cat">{item.category}</span>
          {item.demo && <span className="chip chip--demo">DEMO</span>}
        </div>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        <div className="news-foot">
          <time dateTime={item.date}>
            <Icon name="calendar" size={14} /> {formatDate(item.date)}
          </time>
          <span className="more">
            Baca <Icon name="arrow" size={14} />
          </span>
        </div>
      </Link>
    </article>
  );
}
