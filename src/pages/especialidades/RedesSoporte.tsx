import EspecialidadPage from './EspecialidadPage'
import { especialidades } from '../../data/especialidades'
export default function RedesSoporte() {
  return <EspecialidadPage esp={especialidades.find(e => e.id === 'redes')!} />
}