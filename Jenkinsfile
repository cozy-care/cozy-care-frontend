pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {

        stage("Install Environment") {
            steps {
                echo 'Installing Environment'
                sh 'npm install'
            }
        }

        stage("Clear Docker Containers") {
            steps {
                script {
                    def runningContainers = sh(script: 'docker ps -q | wc -l', returnStdout: true).trim().toInteger()

                    if (runningContainers > 0) {
                        sh 'docker stop $(docker ps -a -q)'
                        sh 'docker rm $(docker ps -a -q)'
                    } else {
                        echo "Nothing exist. Running container count: $runningContainers"
                    }
                }
            }
        }

        stage("Docker Backend Up"){
            steps {
                echo 'Node/Express UP'
                sh 'docker run -d -p 3333:3333 cozycare-backend-image'
            }
        }

        stage("Docker Frontend Up"){
            steps {
                echo 'NextJs UP'
                sh 'docker build -t cozycare-frontend-image .'
                sh 'docker run -d -p 3000:3000 cozycare-frontend-image'
            }
        }

    }
}