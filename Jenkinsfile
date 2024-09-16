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

        stage("Clear Running Docker Containers") {
            steps {
                script {
                    def containerIds = sh(script: 'docker ps -a --filter "ancestor=cozycare-frontend-image" -q', returnStdout: true).trim()

                    if (containerIds) {
                        sh "docker stop ${containerIds}"
                        sh "docker rm ${containerIds}"
                    } else {
                        echo "No containers with the image 'cozycare-frontend-image' found."
                    }
                }
            }
        }

        stage("Remove Old Docker Images") {
            steps {
                script {
                    def imageIds = sh(script: 'docker images --filter "reference=cozycare-frontend-image" -q', returnStdout: true).trim()

                    if (imageIds) {
                        sh "docker rmi ${imageIds}"
                    } else {
                        echo "No images with the name 'cozycare-frontend-image' found."
                    }
                }
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