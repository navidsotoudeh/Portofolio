import React, { useEffect, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const container = {
  display: "flex",
  marginLeft: "3px",
};
const baseStyle = {
  flex: 1,
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  borderWidth: 1.6,
  borderRadius: 1,
  borderColor: "#4e4a4a",
  borderStyle: "dashed",
  backgroundColor: "#ffffff",
  color: "#000000",
  outline: "none",
  transition: "border .24s ease-in-out",
};
const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};
const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 50,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

export default function MyDropzone({ files, setFiles }) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    maxFiles: 2,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt={"a"} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div className={container}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p style={{ fontSize: "10px" }}>
          Drag , or click to select (only png,jpeg) files
        </p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </div>
  );
}
