import { AiFillInstagram } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si'
export default () => {
    return (
        <div className="filtro">
            <div className="contenedor-prinicipal">
                <div className="foto-perfil">
                </div>
                <span className="nombre-perfil">María Paula Garzón</span>
                <span className="descripcion">Make-up | Outfits</span>
                <div className="contenedor-botones">
                    <button className="btn-redes mb-2"><AiFillInstagram size={50} onClick={() => { window.open('https://instagram.com/maria.pgq?utm_medium=copy_link', '_blank') }} />
                    </button>

                    <button className='btn-redes mt-2 py-1'><SiTiktok size={40} onClick={() => {
                        window.open('https://vm.tiktok.com/ZMLA2NCc8/', '_blank');
                    }} /></button>
                </div>
            </div>
        </div>
    )
}