export const capitalizeString = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);


const setSubProp = (key: any) => {
  const str = key.split("/")[2];
  return str && !str.includes(".") ? capitalizeString(str) : "";
};

const setPropName = (key: any) =>
  `${key.replace(/.js/, "").split("/")[1]}${setSubProp(key)}`;

export const getFiles = (context: any) => {
  const keys = context.keys();
  const values = keys.map(context);
  return keys.reduce((acc: any, item: any, index: any) => {
    acc[item] = values[index];
    return acc;
  }, {});
};

export const mapFiles = (files: any) =>
  Object.entries(files).reduce(
    (acc, [key, value]: any) => ({
      ...acc,
      [setPropName(key)]: value.default,
    }),
    {}
  );


export const store = mapFiles(
  getFiles(require.context("./", true, /store.ts/))
);

console.log(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  store,
};



