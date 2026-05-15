import EspecialidadPage from './EspecialidadPage'
import { especialidades } from '../../data/especialidades'

export default function Electronica() {
  return <EspecialidadPage esp={especialidades.find(e => e.id === 'electronica')!} />
}