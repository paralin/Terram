node {
  stage ("node v6") {
    sh 'set +x && . /root/.bashrc && nvm install 6'
  }

  stage ("scm") {
    checkout scm
  }

  stage ("install") {
    sh '. /root/.bashrc && npm install'
  }

  stage ("test") {
    sh '. /root/.bashrc && npm run ci'
  }
}
