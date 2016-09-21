node {
  stage ("node v6") {
    sh '''
      #!/bin/bash
      set +x
      source ~/.nvm/nvm.sh
      nvm install 6
    '''
  }

  stage ("scm") {
    checkout scm
  }

  env.CACHE_CONTEXT='terram-app'
  wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
    stage ("cache-download") {
      sh '''
        #!/bin/bash
        source ./scripts/jenkins_env.bash
        ./scripts/init_cache.bash
      '''
    }

    stage ("install") {
      sh '''
        #!/bin/bash
        source ./scripts/jenkins_env.bash
        enable-npm-proxy
        npm install
        npm run pree2e
        npm prune
      '''
    }

    stage ("cache-upload") {
      sh '''
        #!/bin/bash
        source ./scripts/jenkins_env.bash
        ./scripts/finalize_cache.bash
      '''
    }

    wrap([$class: 'Xvfb']) {
      stage ("test") {
        sh '''
          #!/bin/bash
          source ./scripts/jenkins_env.bash
          npm run ci
        '''
      }

      stage ("e2e") {
        sh '''
          #!/bin/bash
          source ./scripts/jenkins_env.bash
          ./scripts/run_e2e.bash
        '''
      }
    }
  }
}
