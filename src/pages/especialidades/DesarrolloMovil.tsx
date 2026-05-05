import EspecialidadPage from './EspecialidadPage'
import { especialidades } from '../../data/especialidades'
export default function DesarrolloMovil() {
  return <EspecialidadPage esp={especialidades.find(e => e.id === 'movil')!} />
}