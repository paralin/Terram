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
      sh '. ~/.bashrc && ./scripts/init_cache.bash'
    }

    stage ("install") {
      sh '. ~/.bashrc && enable-npm-proxy && npm install && npm prune'
    }

    stage ("cache-upload") {
      sh '. ~/.bashrc && ./scripts/finalize_cache.bash'
    }

    wrap([$class: 'Xvfb']) {
      stage ("test") {
        sh '. /root/.bashrc && npm run ci'
      }

      stage ("e2e") {
        sh '. /root/.bashrc && ./scripts/run_e2e.bash'
      }
    }
  }
}
