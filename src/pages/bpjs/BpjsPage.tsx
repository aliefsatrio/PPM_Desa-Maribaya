import { CrudPage } from '../shared/CrudPage';
import { bpjsConfig, moduleServices } from '../../services/modules';

export default function BpjsPage() {
  return <CrudPage config={bpjsConfig} service={moduleServices.bpjs} />;
}
