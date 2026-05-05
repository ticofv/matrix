import EspecialidadPage from './EspecialidadPage'
import { especialidades } from '../../data/especialidades'
export default function Ciberseguridad() {
  return <EspecialidadPage esp={especialidades.find(e => e.id === 'ciberseguridad')!} />
}