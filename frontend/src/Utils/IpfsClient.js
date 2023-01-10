const {create} = require('ipfs-http-client');

async function ipfsClient(){
    const ipfs = create(
        {
            host: 'ipfs.infura.io',
            port: 5001,
            protocol: 'https'
        }
    );
    return ipfs;
}

module.exports = ipfsClient;