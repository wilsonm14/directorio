pipeline {
    agent any

    stages {

        stage('Clean') {
            steps {
                deleteDir()
            }
        }

        stage('Verificar repo') {
            steps {
                sh 'ls -la'
            }
        }

        stage('Build') {
            steps {
                echo 'Build OK'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Levantando microservicios...'
                sh 'docker compose up -d'
            }
        }

        stage('Verificar contenedores') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
