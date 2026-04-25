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
                echo 'Levantando contenedores...'
                sh '''
                docker run -d -p 3001:3000 wilsonmz/users-service
                docker run -d -p 3002:3000 wilsonmz/business-service
                docker run -d -p 3003:3000 wilsonmz/orders-service
                docker run -d -p 3004:3000 wilsonmz/search-service
                docker run -d -p 3000:3000 wilsonmz/gateway
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
