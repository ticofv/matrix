import EspecialidadPage from './EspecialidadPage'
import { especialidades } from '../../data/especialidades'
export default function DibujoEdificaciones() {
  return <EspecialidadPage esp={especialidades.find(e => e.id === 'dibujo')!} />
}