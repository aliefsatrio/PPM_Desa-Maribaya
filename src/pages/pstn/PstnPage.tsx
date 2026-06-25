import { CrudPage } from '../shared/CrudPage';
import { moduleServices, pstnConfig } from '../../services/modules';

export default function PstnPage() {
  return <CrudPage config={pstnConfig} service={moduleServices.pstn} />;
}
