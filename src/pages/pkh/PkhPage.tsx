import { CrudPage } from '../shared/CrudPage';
import { moduleServices, pkhConfig } from '../../services/modules';

export default function PkhPage() {
  return <CrudPage config={pkhConfig} service={moduleServices.pkh} />;
}
