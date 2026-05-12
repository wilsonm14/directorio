pipeline {
    agent any

    stages {

        stage('Clean') {
            steps {
                deleteDir()
            }
        }

        stage('Clonar Repo') {
            steps {
                git 'https://github.com/wilsonm14/directorio.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Build OK'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Levantando microservicios con docker-compose...'
                sh '''
                docker stop $(docker ps -aq) || true
                docker rm $(docker ps -aq) || true

                docker-compose up -d
                '''
            }
        }

        stage('Verificar') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
    }
}
