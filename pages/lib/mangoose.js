import mangoose from "mangoose";

export function mangooseConnect() {
  if (mangoose.connection.readyState === 1) {
    return mangoose.connection.asPromise();
  } else {
    const uri = process.env.MONGODB_URI;
    return mangoose.connect(uri);
  }
}
