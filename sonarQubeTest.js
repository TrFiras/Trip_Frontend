import scanner from 'sonarqube-scanner';

scanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.projectKey': 'TripFrontApp_V1.0',
      'sonar.projectName': 'TripFrontApp_V1.0',
      'sonar.projectVersion': '1.0',
      'sonar.sources': 'src',
      'sonar.exclusions': '**/node_modules/**/*, **/*.spec.ts, **/*.spec.tsx',
      'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.ts.file.suffixes': '.ts,.tsx',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.login': "admin",
      'sonar.password': "admin2024",
     
    },
  },
  () => {
    console.log('SonarQube analysis completed.');
  }
);