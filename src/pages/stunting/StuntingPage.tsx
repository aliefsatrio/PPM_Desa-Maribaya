import { CrudPage } from '../shared/CrudPage';
import { moduleServices, stuntingConfig } from '../../services/modules';

export default function StuntingPage() {
  return <CrudPage config={stuntingConfig} service={moduleServices.stunting} />;
}
