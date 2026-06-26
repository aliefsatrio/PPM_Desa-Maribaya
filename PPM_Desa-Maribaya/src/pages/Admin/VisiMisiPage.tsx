import { CrudPage } from '../Admin/CrudPage';
import { moduleServices, visiMisiConfig } from '../../services/modules';

export default function VisiMisiPage() {
  return <CrudPage config={visiMisiConfig} service={moduleServices.visimisi} />;
}