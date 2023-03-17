import "./App.css";
import { useContext, useState } from "react";
import { create } from "ipfs-http-client";
import { Buffer } from "buffer";

import { AppContext } from "./App";

function TestingIPFS() {
    const [fileUrl, updateFileUrl] = useState("");
    const { client } = useContext(AppContext);
    async function onChange(e) {
      const file = e.target.files[0];
      try {
        const added = await client.add(file);
        const url = `https://anonnews.infura-ipfs.io/ipfs/${added.path}`;
        updateFileUrl(url);
        console.log(url);
      } catch (error) {
        console.log("Error uploading file: ", error);
      }
    }
}
export default TestingIPFS;
