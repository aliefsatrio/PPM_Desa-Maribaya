import { CrudPage } from '../shared/CrudPage';
import { bpntConfig, moduleServices } from '../../services/modules';

export default function BpntPage() {
  return <CrudPage config={bpntConfig} service={moduleServices.bpnt} />;
}
