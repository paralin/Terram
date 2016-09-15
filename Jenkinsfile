node {
  stage ("node v6") {
    sh '. /root/.bashrc && set +x && nvm install 6'
  }

  stage ("scm") {
    checkout scm
  }

  wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
    stage ("install") {
      sh '. /root/.bashrc && enable-npm-proxy && npm install'
    }

    wrap([$class: 'Xvfb']) {
      stage ("test") {
        sh '. /root/.bashrc && npm run ci'
      }
    }
  }
}
