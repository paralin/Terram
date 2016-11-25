node {
  stage ("node v6") {
    sh 'init-node-ci 6'
  }

  stage ("scm") {
    checkout scm
    sh 'init-jenkins-node-scripts'
  }

  env.CACHE_CONTEXT='terram-app-yarn'
  wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
    stage ("cache-download") {
      sh '''
        #!/bin/bash
        source ./jenkins_scripts/jenkins_env.bash
        ./jenkins_scripts/init_cache.bash ./.yarn-cache/
      '''
    }

    stage ("install") {
      sh '''
        #!/bin/bash
        source ./jenkins_scripts/jenkins_env.bash
        enable-npm-proxy
        npm install -g yarn
        yarn install --cache-folder ./.yarn-cache/
        npm run pree2e
      '''
    }

    stage ("cache-upload") {
      sh '''
        #!/bin/bash
        source ./jenkins_scripts/jenkins_env.bash
        ./jenkins_scripts/finalize_cache.bash ./.yarn-cache/
      '''
    }

    wrap([$class: 'Xvfb']) {
      stage ("test") {
        sh '''
          #!/bin/bash
          set -e
          source ./jenkins_scripts/jenkins_env.bash
          npm run ci
        '''
      }

      stage ("e2e") {
        sh '''
          #!/bin/bash
          set -e
          source ./jenkins_scripts/jenkins_env.bash
          ./scripts/run_e2e.bash
        '''
      }
    }
  }
}
