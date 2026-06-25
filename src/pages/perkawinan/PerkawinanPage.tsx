import { CrudPage } from '../shared/CrudPage';
import { moduleServices, perkawinanConfig } from '../../services/modules';

export default function PerkawinanPage() {
  return <CrudPage config={perkawinanConfig} service={moduleServices.perkawinan} />;
}
