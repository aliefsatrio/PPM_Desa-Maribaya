import { CrudPage } from '../Admin/CrudPage';
import { moduleServices, pendudukConfig } from '../../services/modules';

export default function PendudukPage() {
  return <CrudPage config={pendudukConfig} service={moduleServices.penduduk} />;
}