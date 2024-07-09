import app from './app';
import mongoose from 'mongoose';
import config from './App/config';

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    app.listen(config.port, () => {
      console.log(`Typescript app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
