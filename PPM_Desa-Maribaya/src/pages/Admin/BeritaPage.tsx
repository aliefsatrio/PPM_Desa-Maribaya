import { beritaConfig, moduleServices } from '../../services/modules';
import { CrudPage } from './CrudPage';

export default function BeritaPage() {
  return <CrudPage config={beritaConfig} service={moduleServices.berita} />;
}