import EspecialidadPage from './EspecialidadPage'
import { especialidades } from '../../data/especialidades'
export default function Logistica() {
  return <EspecialidadPage esp={especialidades.find(e => e.id === 'logistica')!} />
}