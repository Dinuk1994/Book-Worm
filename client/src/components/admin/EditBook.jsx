/* eslint-disable react/prop-types */

const EditBook = ({editModal}) => {
  return (
    <div>
        <div >
            <dialog ref={editModal} id="my_modal_3" className="modal">
                <div className="modal-box bg-gray-600">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Edit MOdal</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
        </div>
    </div>
  )
}

export default EditBook