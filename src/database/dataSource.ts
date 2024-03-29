import { DataSource } from 'typeorm';
import { defaultConfig, mockConfig } from './dbConfigs';

function createDataSource(useMock = false) {
  const config = useMock ? mockConfig : defaultConfig;

  return new DataSource(config);
}

const appDataSource = createDataSource();

export default appDataSource;
