import * as Hapi from   './node_modules/@hapi/hapi';
import  {env} from './env_config';

const port = process.env.PORT || env.server.port; // allow port to be set
const host = process.env.HOST || env.server.host;

const init = async () => {
    const server = Hapi.server({
        port: port, host: host, "routes": {
            "cors": {
                origin: ['*'],
                additionalHeaders: ['x-requested-at']
            }
        }
    });
    await server.start();
    console.log(`server version -->${server.version} \nserver running on ${server.info.uri}`);
}

process.on(`unhandledRejection`, (err) => {
    console.log(err);
    process.exit(1);
});

init();
