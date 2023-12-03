
import React,{useState} from 'react'

const MoadalLogin = ({ modalOpen, setModalOpen, children }) => {
    const [showModal,setShowModal]=useState(false)
  return (
    <dialog  className={`modal ${modalOpen ? "modal-open" : ""}`}>
    <div className="modal-box" >
        <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setModalOpen(false)}>✕</button>
        </form>
        {children}
    </div>
</dialog>
  )
}

export default MoadalLogin
