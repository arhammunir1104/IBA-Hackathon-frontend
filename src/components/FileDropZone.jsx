import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const FileDropzone = () => {
    const [files, setFiles] = useState([]);
    console.log(files)
    const onDrop = (acceptedFiles) => {
        setFiles(acceptedFiles);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/*, application/pdf", // Accept images & PDFs (modify as needed)
    });

    return (
        <div
            {...getRootProps()}
            className="border-2 border-dashed p-5 rounded-lg text-center cursor-pointer bg-gray-100"
        >
            <input {...getInputProps()} />
            <p>Drag & drop some files here, or click to select files</p>
            <ul className="mt-2">
                {files.map((file) => (
                    <li key={file.path}>
                        {file.name} - {Math.round(file.size / 1024)} KB
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileDropzone;
