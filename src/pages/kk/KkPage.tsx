import { CrudPage } from '../shared/CrudPage';
import { kkConfig, moduleServices } from '../../services/modules';

export default function KkPage() {
  return <CrudPage config={kkConfig} service={moduleServices.kk} />;
}
