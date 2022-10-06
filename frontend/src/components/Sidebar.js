import FilesView from "./FilesView";
import { Link } from "react-router-dom";
import {
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";

import FileUpload from "./FileUpload";

const Sidebar = (props) => {
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);
  let { slug } = useParams();
  
  const onAddFilesClick = async () => {
    setShowFileUploadModal(true);
  };
  const onAddFilesClose = async () => {
    setShowFileUploadModal(false);
  };
  
  return (
    <div className="flex w-full fixed h-screen mt-[8rem] text-2xl">
      <aside className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
        x-show="asideOpen">
        <Link to="/admin/files" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
          <span><i className="bx bx-file"></i></span>
          <span>Files</span>
        </Link>

        <Link to="/admin/monetization" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
          <span><i className="bx bx-dollar"></i></span>
          <span>Monetization</span>
        </Link>

      </aside>

      <div className="w-full p-2">
      {
        slug === 'files' && (
          <div>
            <button onClick={onAddFilesClick} className="navLink navLink-hover mb-2"> Add Files </button>
            { showFileUploadModal && <FileUpload onClose={onAddFilesClose}/> }
            <FilesView photos={props.photos}/>
          </div>
          
        )
      }
      {
        slug === 'monetization' && (
          <div className="mt-[8rem]"> Heyo </div>
        )
      }
      </div>
    </div>
  );
}

export default Sidebar;