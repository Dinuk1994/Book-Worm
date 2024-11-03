/* eslint-disable no-unused-vars */
import { useState } from "react"

const PdfUpload = () => {
    const [file,setFile] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file',file)
        console.log(formData); 
    }
  return (
    <div>
          <input type="file" onChange={(e)=>setFile(e.target.files[0])} accept="application/pdf"  className="file-input -mt-14 file-input-bordered w-full h-full" />
          <button onClick={handleSubmit} className="btn btn-ghost">Submit</button>
    </div>
  )
}
 
export default PdfUpload