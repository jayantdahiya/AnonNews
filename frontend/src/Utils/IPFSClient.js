import { create } from "ipfs-http-client";
import { Buffer } from "buffer";

// Setting up ipfs infura (POST)
const projectId = process.env.REACT_APP_INFURA_API_KEY;
const projectSecret = process.env.REACT_APP_INFURA_API_KEY_SECRET;
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");
export const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  apiPath: "/api/v0",
  headers: {
    authorization: auth,
  },
});
// **********