import app from './app.js';
import { authenticate, syncUp } from './config/database/database.js';
import { envs } from './config/environments/environments.js'

async function main() {
    try {
        await authenticate();
        await syncUp();
    } catch (error) {
        console.error(error);
    }
}

main()

app.listen(envs.PORT, () => {
    console.log(`Server listening on port ${envs.PORT}`);
})