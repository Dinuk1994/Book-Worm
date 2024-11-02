

const AddBookDrawer = () => {
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <label htmlFor="my-drawer-4" className="btn btn-ghost bg-green-500 w-full shadow-lg shadow-gray-700  text-lg hover:bg-green-600 text-white">Add Book</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-300 text-base-content min-h-full w-[1200px] p-4">
                        <div>
                            <div className="w-full">
                                <div className="flex justify-end">
                                    <label htmlFor="my-drawer-4" className="btn btn-ghost bg-red-400 text-white hover:bg-red-600 cursor-pointer">
                                        Close
                                    </label>
                                </div>
                            </div>

                            <div className="grid">
                                assadsadsad
                            </div>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AddBookDrawer