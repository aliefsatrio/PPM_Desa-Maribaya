import { CrudPage } from '../shared/CrudPage';
import { beritaConfig, moduleServices } from '../../services/modules';

export default function BeritaPage() {
  return <CrudPage config={beritaConfig} service={moduleServices.berita} />;
}
