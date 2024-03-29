import appDataSource from './dataSource';

export default async function dbInit() {
  const init = appDataSource.initialize();

  return init;
}
