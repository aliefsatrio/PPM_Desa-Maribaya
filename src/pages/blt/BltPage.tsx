import { CrudPage } from '../shared/CrudPage';
import { bltConfig, moduleServices } from '../../services/modules';

export default function BltPage() {
  return <CrudPage config={bltConfig} service={moduleServices.blt} />;
}
