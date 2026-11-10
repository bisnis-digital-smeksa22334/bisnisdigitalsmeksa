import PageHeader from '../components/PageHeader.jsx';
import OrganizationChart from '../components/OrganizationChart.jsx';
import Icon from '../components/Icon.jsx';
import { SCHOOL } from '../config.js';

export default function Organization() {
  return (
    <>
      <PageHeader
        eyebrow={`Tahun ${SCHOOL.academicYear}`}
        title="Struktur Organisasi"
        lead={`${SCHOOL.program} ${SCHOOL.name}.`}
        crumbs={[{ label: 'Struktur Organisasi' }]}
      />
      <section className="section">
        <div className="container">
          <p className="notice">
            <Icon name="info" size={18} />
            <span>
              Susunan nama dan jabatan mengikuti dokumen struktur organisasi. Foto masih placeholder dan dapat diganti
              lewat <code>src/data/teachers.js</code>.
            </span>
          </p>
          <OrganizationChart withCards />
        </div>
      </section>
    </>
  );
}
