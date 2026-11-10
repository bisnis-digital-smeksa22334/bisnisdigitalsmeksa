import Placeholder from './Placeholder.jsx';

// Kartu profil guru: foto (placeholder), nama, jabatan, keterangan kelas/bidang.
export default function TeacherCard({ teacher }) {
  return (
    <article className="teacher-card">
      <Placeholder
        variant="person"
        src={teacher.photo}
        alt={`Foto ${teacher.name}`}
        label="Foto resmi belum tersedia"
        ratio="4 / 5"
      />
      <div className="teacher-body">
        <h3>{teacher.name}</h3>
        <ul className="teacher-roles">
          {teacher.roles.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
