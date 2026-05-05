import EspecialidadPage from './EspecialidadPage'
import { especialidades } from '../../data/especialidades'
export default function EjecutivoComercial() {
  return <EspecialidadPage esp={especialidades.find(e => e.id === 'comercial')!} />
}