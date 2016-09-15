node {
  stage ("node v6") {
    sh 'set +x && . /root/.bashrc && nvm install 6'
  }

  stage ("scm") {
    checkout scm
  }

  wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
    stage ("install") {
      sh '. /root/.bashrc && npm install'
    }

    wrap([$class: 'Xvfb']) {
      stage ("test") {
        sh '. /root/.bashrc && npm run ci'
      }
    }
  }
}
